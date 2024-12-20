import { BaseOAuthService } from './base-oauth.service';
import { TypeProviderOptions } from './types/provider-options.types';
import { TypeUserInfo } from './types/user-info.types';
export declare class GoogleProvider extends BaseOAuthService {
    constructor(options: TypeProviderOptions);
    extractUserInfo(data: GoogleProfile): Promise<TypeUserInfo>;
}
interface GoogleProfile extends Record<string, any> {
    aud: string;
    azp: string;
    email: string;
    email_verified: boolean;
    exp: number;
    family_name?: string;
    given_name: string;
    hd?: string;
    iat: number;
    iss: string;
    jti?: string;
    locale?: string;
    name: string;
    nbf?: number;
    picture: string;
    sub: string;
    access_token: string;
    refresh_token?: string;
}
export {};
