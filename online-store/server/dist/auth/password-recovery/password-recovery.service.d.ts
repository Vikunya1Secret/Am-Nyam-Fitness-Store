import { MailService } from '@/libs/mail/mail.service';
import { PrismaService } from '@/prisma/prisma.service';
import { UserService } from '@/user/user.service';
import { NewPasswordDto } from './dto/new-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
export declare class PasswordRecoveryService {
    private readonly prismaService;
    private readonly userService;
    private readonly mailService;
    constructor(prismaService: PrismaService, userService: UserService, mailService: MailService);
    reset(dto: ResetPasswordDto): Promise<boolean>;
    new(dto: NewPasswordDto, token: string): Promise<boolean>;
    private generatePasswordResetToken;
}
