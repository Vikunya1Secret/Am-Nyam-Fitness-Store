import { ConfigService } from '@nestjs/config';
import { User } from '@prisma/__generated__';
import { Request, Response } from 'express';
import { PrismaService } from '@/prisma/prisma.service';
import { UserService } from '@/user/user.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { EmailConfirmationService } from './email-confirmation/email-confirmation.service';
import { ProviderService } from './provider/provider.service';
import { TwoFactorAuthService } from './two-factor-auth/two-factor-auth.service';
export declare class AuthService {
    private readonly prismaService;
    private readonly userService;
    private readonly configService;
    private readonly providerService;
    private readonly emailConfirmationService;
    private readonly twoFactorAuthService;
    constructor(prismaService: PrismaService, userService: UserService, configService: ConfigService, providerService: ProviderService, emailConfirmationService: EmailConfirmationService, twoFactorAuthService: TwoFactorAuthService);
    register(dto: RegisterDto): Promise<{
        message: string;
    }>;
    login(req: Request, dto: LoginDto): Promise<unknown>;
    extractProfileFromCode(req: Request, provider: string, code: string): Promise<unknown>;
    logout(req: Request, res: Response): Promise<void>;
    saveSession(req: Request, user: User): Promise<unknown>;
}
