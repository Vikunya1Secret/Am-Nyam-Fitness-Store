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
exports.ProviderService = void 0;
const common_1 = require("@nestjs/common");
const provider_constants_1 = require("./provider.constants");
let ProviderService = class ProviderService {
    constructor(options) {
        this.options = options;
    }
    onModuleInit() {
        for (const provider of this.options.services) {
            provider.baseUrl = this.options.baseUrl;
        }
    }
    findByService(service) {
        return this.options.services.find(s => s.name === service) ?? null;
    }
};
exports.ProviderService = ProviderService;
exports.ProviderService = ProviderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(provider_constants_1.ProviderOptionsSymbol)),
    __metadata("design:paramtypes", [Object])
], ProviderService);
//# sourceMappingURL=provider.service.js.map