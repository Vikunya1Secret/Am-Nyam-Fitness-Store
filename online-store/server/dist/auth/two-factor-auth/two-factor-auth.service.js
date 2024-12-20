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
exports.TwoFactorAuthService = void 0;
const common_1 = require("@nestjs/common");
const __generated__1 = require("../../../prisma/__generated__/index.js");
const mail_service_1 = require("../../libs/mail/mail.service");
const prisma_service_1 = require("../../prisma/prisma.service");
let TwoFactorAuthService = class TwoFactorAuthService {
    constructor(prismaService, mailService) {
        this.prismaService = prismaService;
        this.mailService = mailService;
    }
    async validateTwoFactorToken(email, code) {
        const existingToken = await this.prismaService.token.findFirst({
            where: {
                email,
                type: __generated__1.TokenType.TWO_FACTOR
            }
        });
        if (!existingToken) {
            throw new common_1.NotFoundException('Токен двухфакторной аутентификации не найден. Убедитесь, что вы запрашивали токен для данного адреса электронной почты.');
        }
        if (existingToken.token !== code) {
            throw new common_1.BadRequestException('Неверный код двухфакторной аутентификации. Пожалуйста, проверьте введенный код и попробуйте снова.');
        }
        const hasExpired = new Date(existingToken.expiresIn) < new Date();
        if (hasExpired) {
            throw new common_1.BadRequestException('Срок действия токена двухфакторной аутентификации истек. Пожалуйста, запросите новый токен.');
        }
        await this.prismaService.token.delete({
            where: {
                id: existingToken.id,
                type: __generated__1.TokenType.TWO_FACTOR
            }
        });
        return true;
    }
    async sendTwoFactorToken(email) {
        const twoFactorToken = await this.generateTwoFactorToken(email);
        await this.mailService.sendTwoFactorTokenEmail(twoFactorToken.email, twoFactorToken.token);
        return true;
    }
    async generateTwoFactorToken(email) {
        const token = Math.floor(Math.random() * (1000000 - 100000) + 100000).toString();
        const expiresIn = new Date(new Date().getTime() + 300000);
        const existingToken = await this.prismaService.token.findFirst({
            where: {
                email,
                type: __generated__1.TokenType.TWO_FACTOR
            }
        });
        if (existingToken) {
            await this.prismaService.token.delete({
                where: {
                    id: existingToken.id,
                    type: __generated__1.TokenType.TWO_FACTOR
                }
            });
        }
        const twoFactorToken = await this.prismaService.token.create({
            data: {
                email,
                token,
                expiresIn,
                type: __generated__1.TokenType.TWO_FACTOR
            }
        });
        return twoFactorToken;
    }
};
exports.TwoFactorAuthService = TwoFactorAuthService;
exports.TwoFactorAuthService = TwoFactorAuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mail_service_1.MailService])
], TwoFactorAuthService);
//# sourceMappingURL=two-factor-auth.service.js.map