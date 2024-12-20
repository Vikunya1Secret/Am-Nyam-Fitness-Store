import { BaseOAuthService } from './base-oauth.service';
import { TypeProviderOptions } from './types/provider-options.types';
import { TypeUserInfo } from './types/user-info.types';
export declare class YandexProvider extends BaseOAuthService {
    constructor(options: TypeProviderOptions);
    extractUserInfo(data: YandexProfile): Promise<TypeUserInfo>;
}
interface YandexProfile {
    login: string;
    id: string;
    client_id: string;
    psuid: string;
    emails?: string[];
    default_email?: string;
    is_avatar_empty?: boolean;
    default_avatar_id?: string;
    birthday?: string | null;
    first_name?: string;
    last_name?: string;
    display_name?: string;
    real_name?: string;
    sex?: 'male' | 'female' | null;
    default_phone?: {
        id: number;
        number: string;
    };
    access_token: string;
    refresh_token?: string;
}
export {};
