import { Request } from 'express';
import { ConfirmationDto } from './dto/confirmation.dto';
import { EmailConfirmationService } from './email-confirmation.service';
export declare class EmailConfirmationController {
    private readonly emailConfirmationService;
    constructor(emailConfirmationService: EmailConfirmationService);
    newVerification(req: Request, dto: ConfirmationDto): Promise<unknown>;
}
