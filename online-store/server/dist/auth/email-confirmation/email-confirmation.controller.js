"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailConfirmationController = void 0;
const common_1 = require("@nestjs/common");
const confirmation_dto_1 = require("./dto/confirmation.dto");
const email_confirmation_service_1 = require("./email-confirmation.service");
let EmailConfirmationController = class EmailConfirmationController {
    constructor(emailConfirmationService) {
        this.emailConfirmationService = emailConfirmationService;
    }
    async newVerification(req, dto) {
        return this.emailConfirmationService.newVerification(req, dto);
    }
};
exports.EmailConfirmationController = EmailConfirmationController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, confirmation_dto_1.ConfirmationDto]),
    __metadata("design:returntype", Promise)
], EmailConfirmationController.prototype, "newVerification", null);
exports.EmailConfirmationController = EmailConfirmationController = __decorate([
    (0, common_1.Controller)('auth/email-confirmation'),
    __metadata("design:paramtypes", [email_confirmation_service_1.EmailConfirmationService])
], EmailConfirmationController);
//# sourceMappingURL=email-confirmation.controller.js.map