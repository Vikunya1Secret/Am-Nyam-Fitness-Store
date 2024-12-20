"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailConfirmationService = void 0;
const common_1 = require("@nestjs/common");
const __generated__1 = require("../../../prisma/__generated__/index.js");
const uuid_1 = require("uuid");
const mail_service_1 = require("../../libs/mail/mail.service");
const prisma_service_1 = require("../../prisma/prisma.service");
const user_service_1 = require("../../user/user.service");
const auth_service_1 = require("../auth.service");
let EmailConfirmationService = class EmailConfirmationService {
    constructor(prismaService, mailService, userService, authService) {
        this.prismaService = prismaService;
        this.mailService = mailService;
        this.userService = userService;
        this.authService = authService;
    }
    async newVerification(req, dto) {
        const existingToken = await this.prismaService.token.findUnique({
            where: {
                token: dto.token,
                type: __generated__1.TokenType.VERIFICATION
            }
        });
        if (!existingToken) {
            throw new common_1.NotFoundException('Токен подтверждения не найден. Пожалуйста, убедитесь, что у вас правильный токен.');
        }
        const hasExpired = new Date(existingToken.expiresIn) < new Date();
        if (hasExpired) {
            throw new common_1.BadRequestException('Токен подтверждения истек. Пожалуйста, запросите новый токен для подтверждения.');
        }
        const existingUser = await this.userService.findByEmail(existingToken.email);
        if (!existingUser) {
            throw new common_1.NotFoundException('Пользователь не найден. Пожалуйста, проверьте введенный адрес электронной почты и попробуйте снова.');
        }
        await this.prismaService.user.update({
            where: {
                id: existingUser.id
            },
            data: {
                isVerified: true
            }
        });
        await this.prismaService.token.delete({
            where: {
                id: existingToken.id,
                type: __generated__1.TokenType.VERIFICATION
            }
        });
        return this.authService.saveSession(req, existingUser);
    }
    async sendVerificationToken(email) {
        const verificationToken = await this.generateVerificationToken(email);
        await this.mailService.sendConfirmationEmail(verificationToken.email, verificationToken.token);
        return true;
    }
    async generateVerificationToken(email) {
        const token = (0, uuid_1.v4)();
        const expiresIn = new Date(new Date().getTime() + 3600 * 1000);
        const existingToken = await this.prismaService.token.findFirst({
            where: {
                email,
                type: __generated__1.TokenType.VERIFICATION
            }
        });
        if (existingToken) {
            await this.prismaService.token.delete({
                where: {
                    id: existingToken.id,
                    type: __generated__1.TokenType.VERIFICATION
                }
            });
        }
        const verificationToken = await this.prismaService.token.create({
            data: {
                email,
                token,
                expiresIn,
                type: __generated__1.TokenType.VERIFICATION
            }
        });
        return verificationToken;
    }
};
exports.EmailConfirmationService = EmailConfirmationService;
exports.EmailConfirmationService = EmailConfirmationService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => auth_service_1.AuthService))),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mail_service_1.MailService,
        user_service_1.UserService,
        auth_service_1.AuthService])
], EmailConfirmationService);
//# sourceMappingURL=email-confirmation.service.js.map