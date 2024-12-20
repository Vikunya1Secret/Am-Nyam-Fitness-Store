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
exports.BaseOAuthService = void 0;
const common_1 = require("@nestjs/common");
let BaseOAuthService = class BaseOAuthService {
    constructor(options) {
        this.options = options;
    }
    async extractUserInfo(data) {
        return {
            ...data,
            provider: this.options.name
        };
    }
    getAuthUrl() {
        const query = new URLSearchParams({
            response_type: 'code',
            client_id: this.options.client_id,
            redirect_uri: this.getRedirectUrl(),
            scope: (this.options.scopes ?? []).join(' '),
            access_type: 'offline',
            prompt: 'select_account'
        });
        return `${this.options.authorize_url}?${query}`;
    }
    async findUserByCode(code) {
        const client_id = this.options.client_id;
        const client_secret = this.options.client_secret;
        const tokenQuery = new URLSearchParams({
            client_id,
            client_secret,
            code,
            redirect_uri: this.getRedirectUrl(),
            grant_type: 'authorization_code'
        });
        const tokensRequest = await fetch(this.options.access_url, {
            method: 'POST',
            body: tokenQuery,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Accept: 'application/json'
            }
        });
        if (!tokensRequest.ok) {
            throw new common_1.BadRequestException(`Не удалось получить пользователя с ${this.options.profile_url}. Проверьте правильность токена доступа.`);
        }
        const tokens = await tokensRequest.json();
        if (!tokens.access_token) {
            throw new common_1.BadRequestException(`Нет токенов с ${this.options.access_url}. Убедитесь, что код авторизации действителен.`);
        }
        const userRequest = await fetch(this.options.profile_url, {
            headers: {
                Authorization: `Bearer ${tokens.access_token}`
            }
        });
        if (!userRequest.ok) {
            throw new common_1.UnauthorizedException(`Не удалось получить пользователя с ${this.options.profile_url}. Проверьте правильность токена доступа.`);
        }
        const user = await userRequest.json();
        const userData = await this.extractUserInfo(user);
        return {
            ...userData,
            access_token: tokens.access_token,
            refresh_token: tokens.refresh_token,
            expires_at: tokens.expires_at || tokens.expires_in,
            provider: this.options.name
        };
    }
    getRedirectUrl() {
        return `${this.BASE_URL}/auth/oauth/callback/${this.options.name}`;
    }
    set baseUrl(value) {
        this.BASE_URL = value;
    }
    get name() {
        return this.options.name;
    }
    get access_url() {
        return this.options.access_url;
    }
    get profile_url() {
        return this.options.profile_url;
    }
    get scopes() {
        return this.options.scopes;
    }
};
exports.BaseOAuthService = BaseOAuthService;
exports.BaseOAuthService = BaseOAuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], BaseOAuthService);
//# sourceMappingURL=base-oauth.service.js.map