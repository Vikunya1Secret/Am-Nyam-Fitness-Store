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
exports.PasswordRecoveryController = void 0;
const common_1 = require("@nestjs/common");
const google_recaptcha_1 = require("@nestlab/google-recaptcha");
const new_password_dto_1 = require("./dto/new-password.dto");
const reset_password_dto_1 = require("./dto/reset-password.dto");
const password_recovery_service_1 = require("./password-recovery.service");
let PasswordRecoveryController = class PasswordRecoveryController {
    constructor(passwordRecoveryService) {
        this.passwordRecoveryService = passwordRecoveryService;
    }
    async resetPassword(dto) {
        return this.passwordRecoveryService.reset(dto);
    }
    async newPassword(dto, token) {
        return this.passwordRecoveryService.new(dto, token);
    }
};
exports.PasswordRecoveryController = PasswordRecoveryController;
__decorate([
    (0, google_recaptcha_1.Recaptcha)(),
    (0, common_1.Post)('reset'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_dto_1.ResetPasswordDto]),
    __metadata("design:returntype", Promise)
], PasswordRecoveryController.prototype, "resetPassword", null);
__decorate([
    (0, google_recaptcha_1.Recaptcha)(),
    (0, common_1.Post)('new/:token'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_password_dto_1.NewPasswordDto, String]),
    __metadata("design:returntype", Promise)
], PasswordRecoveryController.prototype, "newPassword", null);
exports.PasswordRecoveryController = PasswordRecoveryController = __decorate([
    (0, common_1.Controller)('auth/password-recovery'),
    __metadata("design:paramtypes", [password_recovery_service_1.PasswordRecoveryService])
], PasswordRecoveryController);
//# sourceMappingURL=password-recovery.controller.js.map