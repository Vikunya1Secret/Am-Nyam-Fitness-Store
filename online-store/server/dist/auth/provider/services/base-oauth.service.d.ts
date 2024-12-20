import { TypeBaseProviderOptions } from './types/base-provider-options.types';
import { TypeUserInfo } from './types/user-info.types';
export declare class BaseOAuthService {
    private readonly options;
    private BASE_URL;
    constructor(options: TypeBaseProviderOptions);
    protected extractUserInfo(data: any): Promise<TypeUserInfo>;
    getAuthUrl(): string;
    findUserByCode(code: string): Promise<TypeUserInfo>;
    private getRedirectUrl;
    set baseUrl(value: string);
    get name(): string;
    get access_url(): string;
    get profile_url(): string;
    get scopes(): string[];
}
