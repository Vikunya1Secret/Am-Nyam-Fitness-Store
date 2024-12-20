import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ProviderService } from '../provider/provider.service';
export declare class AuthProviderGuard implements CanActivate {
    private readonly providerService;
    constructor(providerService: ProviderService);
    canActivate(context: ExecutionContext): boolean;
}
