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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const __generated__1 = require("../../prisma/__generated__/index.js");
const argon2_1 = require("argon2");
const prisma_service_1 = require("../prisma/prisma.service");
const user_service_1 = require("../user/user.service");
const email_confirmation_service_1 = require("./email-confirmation/email-confirmation.service");
const provider_service_1 = require("./provider/provider.service");
const two_factor_auth_service_1 = require("./two-factor-auth/two-factor-auth.service");
let AuthService = class AuthService {
    constructor(prismaService, userService, configService, providerService, emailConfirmationService, twoFactorAuthService) {
        this.prismaService = prismaService;
        this.userService = userService;
        this.configService = configService;
        this.providerService = providerService;
        this.emailConfirmationService = emailConfirmationService;
        this.twoFactorAuthService = twoFactorAuthService;
    }
    async register(dto) {
        const isExists = await this.userService.findByEmail(dto.email);
        if (isExists) {
            throw new common_1.ConflictException('Регистрация не удалась. Пользователь с таким email уже существует. Пожалуйста, используйте другой email или войдите в систему.');
        }
        const newUser = await this.userService.create(dto.email, dto.password, dto.name, '', __generated__1.AuthMethod.CREDENTIALS, false);
        await this.emailConfirmationService.sendVerificationToken(newUser.email);
        return {
            message: 'Вы успешно зарегистрировались. Пожалуйста, подтвердите ваш email. Сообщение было отправлено на ваш почтовый адрес.'
        };
    }
    async login(req, dto) {
        const user = await this.userService.findByEmail(dto.email);
        if (!user || !user.password) {
            throw new common_1.NotFoundException('Пользователь не найден. Пожалуйста, проверьте введенные данные');
        }
        const isValidPassword = await (0, argon2_1.verify)(user.password, dto.password);
        if (!isValidPassword) {
            throw new common_1.UnauthorizedException('Неверный пароль. Пожалуйста, попробуйте еще раз или восстановите пароль, если забыли его.');
        }
        if (!user.isVerified) {
            await this.emailConfirmationService.sendVerificationToken(user.email);
            throw new common_1.UnauthorizedException('Ваш email не подтвержден. Пожалуйста, проверьте вашу почту и подтвердите адрес.');
        }
        if (user.isTwoFactorEnabled) {
            if (!dto.code) {
                await this.twoFactorAuthService.sendTwoFactorToken(user.email);
                return {
                    message: 'Проверьте вашу почту. Требуется код двухфакторной аутентификации.'
                };
            }
            await this.twoFactorAuthService.validateTwoFactorToken(user.email, dto.code);
        }
        return this.saveSession(req, user);
    }
    async extractProfileFromCode(req, provider, code) {
        const providerInstance = this.providerService.findByService(provider);
        const profile = await providerInstance.findUserByCode(code);
        const account = await this.prismaService.account.findFirst({
            where: {
                id: profile.id,
                provider: profile.provider
            }
        });
        let user = account?.userId
            ? await this.userService.findById(account.userId)
            : null;
        if (user) {
            return this.saveSession(req, user);
        }
        user = await this.userService.create(profile.email, '', profile.name, profile.picture, __generated__1.AuthMethod[profile.provider.toUpperCase()], true);
        if (!account) {
            await this.prismaService.account.create({
                data: {
                    userId: user.id,
                    type: 'oauth',
                    provider: profile.provider,
                    accessToken: profile.access_token,
                    refreshToken: profile.refresh_token,
                    expiresAt: profile.expires_at
                }
            });
        }
        return this.saveSession(req, user);
    }
    async logout(req, res) {
        return new Promise((resolve, reject) => {
            req.session.destroy(err => {
                if (err) {
                    return reject(new common_1.InternalServerErrorException('Не удалось завершить сессию. Возможно, возникла проблема с сервером или сессия уже была завершена.'));
                }
                res.clearCookie(this.configService.getOrThrow('SESSION_NAME'));
                resolve();
            });
        });
    }
    async saveSession(req, user) {
        return new Promise((resolve, reject) => {
            req.session.userId = user.id;
            req.session.save(err => {
                if (err) {
                    return reject(new common_1.InternalServerErrorException('Не удалось сохранить сессию. Проверьте, правильно ли настроены параметры сессии.'));
                }
                resolve({
                    user
                });
            });
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        user_service_1.UserService,
        config_1.ConfigService,
        provider_service_1.ProviderService,
        email_confirmation_service_1.EmailConfirmationService,
        two_factor_auth_service_1.TwoFactorAuthService])
], AuthService);
//# sourceMappingURL=auth.service.js.map