import { OnModuleInit } from '@nestjs/common';
import { TypeOptions } from './provider.constants';
import { BaseOAuthService } from './services/base-oauth.service';
export declare class ProviderService implements OnModuleInit {
    private readonly options;
    constructor(options: TypeOptions);
    onModuleInit(): void;
    findByService(service: string): BaseOAuthService | null;
}
