import { DynamicModule } from '@nestjs/common';
import { TypeAsyncOptions, TypeOptions } from './provider.constants';
export declare class ProviderModule {
    static register(options: TypeOptions): DynamicModule;
    static registerAsync(options: TypeAsyncOptions): DynamicModule;
}
