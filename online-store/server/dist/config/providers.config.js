"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProvidersConfig = void 0;
const google_provider_1 = require("../auth/provider/services/google.provider");
const yandex_provider_1 = require("../auth/provider/services/yandex.provider");
const getProvidersConfig = async (configService) => ({
    baseUrl: configService.getOrThrow('APPLICATION_URL'),
    services: [
        new google_provider_1.GoogleProvider({
            client_id: configService.getOrThrow('GOOGLE_CLIENT_ID'),
            client_secret: configService.getOrThrow('GOOGLE_CLIENT_SECRET'),
            scopes: ['email', 'profile']
        }),
        new yandex_provider_1.YandexProvider({
            client_id: configService.getOrThrow('YANDEX_CLIENT_ID'),
            client_secret: configService.getOrThrow('YANDEX_CLIENT_SECRET'),
            scopes: ['login:email', 'login:avatar', 'login:info']
        })
    ]
});
exports.getProvidersConfig = getProvidersConfig;
//# sourceMappingURL=providers.config.js.map