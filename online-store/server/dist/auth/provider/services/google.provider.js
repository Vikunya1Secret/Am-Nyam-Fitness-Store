"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleProvider = void 0;
const base_oauth_service_1 = require("./base-oauth.service");
class GoogleProvider extends base_oauth_service_1.BaseOAuthService {
    constructor(options) {
        super({
            name: 'google',
            authorize_url: 'https://accounts.google.com/o/oauth2/v2/auth',
            access_url: 'https://oauth2.googleapis.com/token',
            profile_url: 'https://www.googleapis.com/oauth2/v3/userinfo',
            scopes: options.scopes,
            client_id: options.client_id,
            client_secret: options.client_secret
        });
    }
    async extractUserInfo(data) {
        return super.extractUserInfo({
            email: data.email,
            name: data.name,
            picture: data.picture
        });
    }
}
exports.GoogleProvider = GoogleProvider;
//# sourceMappingURL=google.provider.js.map