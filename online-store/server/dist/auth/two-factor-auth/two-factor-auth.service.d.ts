import { MailService } from '@/libs/mail/mail.service';
import { PrismaService } from '@/prisma/prisma.service';
export declare class TwoFactorAuthService {
    private readonly prismaService;
    private readonly mailService;
    constructor(prismaService: PrismaService, mailService: MailService);
    validateTwoFactorToken(email: string, code: string): Promise<boolean>;
    sendTwoFactorToken(email: string): Promise<boolean>;
    private generateTwoFactorToken;
}
