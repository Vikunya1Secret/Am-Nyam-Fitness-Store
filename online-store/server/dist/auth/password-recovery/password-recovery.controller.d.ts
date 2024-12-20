import { NewPasswordDto } from './dto/new-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { PasswordRecoveryService } from './password-recovery.service';
export declare class PasswordRecoveryController {
    private readonly passwordRecoveryService;
    constructor(passwordRecoveryService: PasswordRecoveryService);
    resetPassword(dto: ResetPasswordDto): Promise<boolean>;
    newPassword(dto: NewPasswordDto, token: string): Promise<boolean>;
}
