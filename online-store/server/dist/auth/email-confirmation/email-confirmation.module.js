"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailConfirmationModule = void 0;
const common_1 = require("@nestjs/common");
const mail_module_1 = require("../../libs/mail/mail.module");
const mail_service_1 = require("../../libs/mail/mail.service");
const user_service_1 = require("../../user/user.service");
const auth_module_1 = require("../auth.module");
const email_confirmation_controller_1 = require("./email-confirmation.controller");
const email_confirmation_service_1 = require("./email-confirmation.service");
let EmailConfirmationModule = class EmailConfirmationModule {
};
exports.EmailConfirmationModule = EmailConfirmationModule;
exports.EmailConfirmationModule = EmailConfirmationModule = __decorate([
    (0, common_1.Module)({
        imports: [mail_module_1.MailModule, (0, common_1.forwardRef)(() => auth_module_1.AuthModule)],
        controllers: [email_confirmation_controller_1.EmailConfirmationController],
        providers: [email_confirmation_service_1.EmailConfirmationService, user_service_1.UserService, mail_service_1.MailService],
        exports: [email_confirmation_service_1.EmailConfirmationService]
    })
], EmailConfirmationModule);
//# sourceMappingURL=email-confirmation.module.js.map