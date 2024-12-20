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
exports.MailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const components_1 = require("@react-email/components");
const confirmation_template_1 = require("./templates/confirmation.template");
const reset_password_template_1 = require("./templates/reset-password.template");
const two_factor_auth_template_1 = require("./templates/two-factor-auth.template");
let MailService = class MailService {
    constructor(mailerService, configService) {
        this.mailerService = mailerService;
        this.configService = configService;
    }
    async sendConfirmationEmail(email, token) {
        const domain = this.configService.getOrThrow('ALLOWED_ORIGIN');
        const html = await (0, components_1.render)((0, confirmation_template_1.ConfirmationTemplate)({ domain, token }));
        return this.sendMail(email, 'Подтверждение почты', html);
    }
    async sendPasswordResetEmail(email, token) {
        const domain = this.configService.getOrThrow('ALLOWED_ORIGIN');
        const html = await (0, components_1.render)((0, reset_password_template_1.ResetPasswordTemplate)({ domain, token }));
        return this.sendMail(email, 'Сброс пароля', html);
    }
    async sendTwoFactorTokenEmail(email, token) {
        const html = await (0, components_1.render)((0, two_factor_auth_template_1.TwoFactorAuthTemplate)({ token }));
        return this.sendMail(email, 'Подтверждение вашей личности', html);
    }
    sendMail(email, subject, html) {
        return this.mailerService.sendMail({
            to: email,
            subject,
            html
        });
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService,
        config_1.ConfigService])
], MailService);
//# sourceMappingURL=mail.service.js.map