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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterDto = void 0;
const class_validator_1 = require("class-validator");
const is_passwords_matching_constraint_decorator_1 = require("../../libs/common/decorators/is-passwords-matching-constraint.decorator");
class RegisterDto {
}
exports.RegisterDto = RegisterDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Имя должно быть строкой.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Имя обязательно для заполнения.' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Email должен быть строкой.' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Некорректный формат email.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email обязателен для заполнения.' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Пароль должен быть строкой.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Пароль обязателен для заполнения.' }),
    (0, class_validator_1.MinLength)(6, {
        message: 'Пароль должен содержать минимум 6 символов.'
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Пароль подтверждения должен быть строкой.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Поле подтверждения пароля не может быть пустым.' }),
    (0, class_validator_1.MinLength)(6, {
        message: 'Пароль подтверждения должен содержать не менее 6 символов.'
    }),
    (0, class_validator_1.Validate)(is_passwords_matching_constraint_decorator_1.IsPasswordsMatchingConstraint, {
        message: 'Пароли не совпадают.'
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "passwordRepeat", void 0);
//# sourceMappingURL=register.dto.js.map