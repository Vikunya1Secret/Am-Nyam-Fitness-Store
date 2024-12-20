import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
export declare class MailService {
    private readonly mailerService;
    private readonly configService;
    constructor(mailerService: MailerService, configService: ConfigService);
    sendConfirmationEmail(email: string, token: string): Promise<SentMessageInfo>;
    sendPasswordResetEmail(email: string, token: string): Promise<SentMessageInfo>;
    sendTwoFactorTokenEmail(email: string, token: string): Promise<SentMessageInfo>;
    private sendMail;
}
