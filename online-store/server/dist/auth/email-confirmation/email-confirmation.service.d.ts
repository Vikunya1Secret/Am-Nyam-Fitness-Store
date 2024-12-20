import { Request } from 'express';
import { MailService } from '@/libs/mail/mail.service';
import { PrismaService } from '@/prisma/prisma.service';
import { UserService } from '@/user/user.service';
import { AuthService } from '../auth.service';
import { ConfirmationDto } from './dto/confirmation.dto';
export declare class EmailConfirmationService {
    private readonly prismaService;
    private readonly mailService;
    private readonly userService;
    private readonly authService;
    constructor(prismaService: PrismaService, mailService: MailService, userService: UserService, authService: AuthService);
    newVerification(req: Request, dto: ConfirmationDto): Promise<unknown>;
    sendVerificationToken(email: string): Promise<boolean>;
    private generateVerificationToken;
}
