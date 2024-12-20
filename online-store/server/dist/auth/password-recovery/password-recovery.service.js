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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordRecoveryService = void 0;
const common_1 = require("@nestjs/common");
const __generated__1 = require("../../../prisma/__generated__/index.js");
const argon2_1 = require("argon2");
const uuid_1 = require("uuid");
const mail_service_1 = require("../../libs/mail/mail.service");
const prisma_service_1 = require("../../prisma/prisma.service");
const user_service_1 = require("../../user/user.service");
let PasswordRecoveryService = class PasswordRecoveryService {
    constructor(prismaService, userService, mailService) {
        this.prismaService = prismaService;
        this.userService = userService;
        this.mailService = mailService;
    }
    async reset(dto) {
        const existingUser = await this.userService.findByEmail(dto.email);
        if (!existingUser) {
            throw new common_1.NotFoundException('Пользователь не найден. Пожалуйста, проверьте введенный адрес электронной почты и попробуйте снова.');
        }
        const passwordResetToken = await this.generatePasswordResetToken(existingUser.email);
        await this.mailService.sendPasswordResetEmail(passwordResetToken.email, passwordResetToken.token);
        return true;
    }
    async new(dto, token) {
        const existingToken = await this.prismaService.token.findFirst({
            where: {
                token,
                type: __generated__1.TokenType.PASSWORD_RESET
            }
        });
        if (!existingToken) {
            throw new common_1.NotFoundException('Токен не найден. Пожалуйста, проверьте правильность введенного токена или запросите новый.');
        }
        const hasExpired = new Date(existingToken.expiresIn) < new Date();
        if (hasExpired) {
            throw new common_1.BadRequestException('Токен истек. Пожалуйста, запросите новый токен для подтверждения сброса пароля.');
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
                password: await (0, argon2_1.hash)(dto.password)
            }
        });
        await this.prismaService.token.delete({
            where: {
                id: existingToken.id,
                type: __generated__1.TokenType.PASSWORD_RESET
            }
        });
        return true;
    }
    async generatePasswordResetToken(email) {
        const token = (0, uuid_1.v4)();
        const expiresIn = new Date(new Date().getTime() + 3600 * 1000);
        const existingToken = await this.prismaService.token.findFirst({
            where: {
                email,
                type: __generated__1.TokenType.PASSWORD_RESET
            }
        });
        if (existingToken) {
            await this.prismaService.token.delete({
                where: {
                    id: existingToken.id,
                    type: __generated__1.TokenType.PASSWORD_RESET
                }
            });
        }
        const passwordResetToken = await this.prismaService.token.create({
            data: {
                email,
                token,
                expiresIn,
                type: __generated__1.TokenType.PASSWORD_RESET
            }
        });
        return passwordResetToken;
    }
};
exports.PasswordRecoveryService = PasswordRecoveryService;
exports.PasswordRecoveryService = PasswordRecoveryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        user_service_1.UserService,
        mail_service_1.MailService])
], PasswordRecoveryService);
//# sourceMappingURL=password-recovery.service.js.map