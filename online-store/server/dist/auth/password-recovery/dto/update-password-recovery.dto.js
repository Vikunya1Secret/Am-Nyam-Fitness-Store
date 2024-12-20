"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePasswordRecoveryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_password_recovery_dto_1 = require("./create-password-recovery.dto");
class UpdatePasswordRecoveryDto extends (0, mapped_types_1.PartialType)(create_password_recovery_dto_1.CreatePasswordRecoveryDto) {
}
exports.UpdatePasswordRecoveryDto = UpdatePasswordRecoveryDto;
//# sourceMappingURL=update-password-recovery.dto.js.map