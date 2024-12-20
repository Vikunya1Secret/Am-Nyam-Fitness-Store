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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const google_recaptcha_1 = require("@nestlab/google-recaptcha");
const auth_service_1 = require("./auth.service");
const login_dto_1 = require("./dto/login.dto");
const register_dto_1 = require("./dto/register.dto");
const provider_guard_1 = require("./guards/provider.guard");
const provider_service_1 = require("./provider/provider.service");
let AuthController = class AuthController {
    constructor(authService, configService, providerService) {
        this.authService = authService;
        this.configService = configService;
        this.providerService = providerService;
    }
    async register(dto) {
        return this.authService.register(dto);
    }
    async login(req, dto) {
        return this.authService.login(req, dto);
    }
    async callback(req, res, code, provider) {
        if (!code) {
            throw new common_1.BadRequestException('Не был предоставлен код авторизации.');
        }
        await this.authService.extractProfileFromCode(req, provider, code);
        return res.redirect(`${this.configService.getOrThrow('ALLOWED_ORIGIN')}/dashboard/settings`);
    }
    async connect(provider) {
        const providerInstance = this.providerService.findByService(provider);
        return {
            url: providerInstance.getAuthUrl()
        };
    }
    async logout(req, res) {
        return this.authService.logout(req, res);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, google_recaptcha_1.Recaptcha)(),
    (0, common_1.Post)('register'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, google_recaptcha_1.Recaptcha)(),
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(provider_guard_1.AuthProviderGuard),
    (0, common_1.Get)('/oauth/callback/:provider'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __param(2, (0, common_1.Query)('code')),
    __param(3, (0, common_1.Param)('provider')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "callback", null);
__decorate([
    (0, common_1.UseGuards)(provider_guard_1.AuthProviderGuard),
    (0, common_1.Get)('/oauth/connect/:provider'),
    __param(0, (0, common_1.Param)('provider')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "connect", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        config_1.ConfigService,
        provider_service_1.ProviderService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map