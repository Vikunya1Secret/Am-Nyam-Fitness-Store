"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YandexProvider = void 0;
const base_oauth_service_1 = require("./base-oauth.service");
class YandexProvider extends base_oauth_service_1.BaseOAuthService {
    constructor(options) {
        super({
            name: 'yandex',
            authorize_url: 'https://oauth.yandex.ru/authorize',
            access_url: 'https://oauth.yandex.ru/token',
            profile_url: 'https://login.yandex.ru/info?format=json',
            scopes: options.scopes,
            client_id: options.client_id,
            client_secret: options.client_secret
        });
    }
    async extractUserInfo(data) {
        return super.extractUserInfo({
            email: data.emails[0],
            name: data.display_name,
            picture: data.default_avatar_id
                ? `https://avatars.yandex.net/get-yapic/${data.default_avatar_id}/islands-200`
                : undefined
        });
    }
}
exports.YandexProvider = YandexProvider;
//# sourceMappingURL=yandex.provider.js.map