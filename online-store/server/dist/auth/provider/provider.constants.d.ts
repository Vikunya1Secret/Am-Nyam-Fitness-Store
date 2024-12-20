import { FactoryProvider, ModuleMetadata } from '@nestjs/common';
import { BaseOAuthService } from './services/base-oauth.service';
export declare const ProviderOptionsSymbol: unique symbol;
export type TypeOptions = {
    baseUrl: string;
    services: BaseOAuthService[];
};
export type TypeAsyncOptions = Pick<ModuleMetadata, 'imports'> & Pick<FactoryProvider<TypeOptions>, 'useFactory' | 'inject'>;
