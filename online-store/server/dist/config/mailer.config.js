"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMailerConfig = void 0;
const is_dev_util_1 = require("../libs/common/utils/is-dev.util");
const getMailerConfig = async (configService) => ({
    transport: {
        host: configService.getOrThrow('MAIL_HOST'),
        port: configService.getOrThrow('MAIL_PORT'),
        secure: !(0, is_dev_util_1.isDev)(configService),
        auth: {
            user: configService.getOrThrow('MAIL_LOGIN'),
            pass: configService.getOrThrow('MAIL_PASSWORD')
        }
    },
    defaults: {
        from: `"FitnessStore" ${configService.getOrThrow('MAIL_LOGIN')}`
    }
});
exports.getMailerConfig = getMailerConfig;
//# sourceMappingURL=mailer.config.js.map