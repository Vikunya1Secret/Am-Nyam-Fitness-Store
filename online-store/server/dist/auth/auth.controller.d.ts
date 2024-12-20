import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ProviderService } from './provider/provider.service';
export declare class AuthController {
    private readonly authService;
    private readonly configService;
    private readonly providerService;
    constructor(authService: AuthService, configService: ConfigService, providerService: ProviderService);
    register(dto: RegisterDto): Promise<{
        message: string;
    }>;
    login(req: Request, dto: LoginDto): Promise<unknown>;
    callback(req: Request, res: Response, code: string, provider: string): Promise<void>;
    connect(provider: string): Promise<{
        url: string;
    }>;
    logout(req: Request, res: Response): Promise<void>;
}
