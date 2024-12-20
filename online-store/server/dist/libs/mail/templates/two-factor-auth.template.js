"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoFactorAuthTemplate = TwoFactorAuthTemplate;
const components_1 = require("@react-email/components");
const html_1 = require("@react-email/html");
const React = require("react");
function TwoFactorAuthTemplate({ token }) {
    return (React.createElement(components_1.Tailwind, null,
        React.createElement(html_1.Html, null,
            React.createElement(components_1.Body, { className: 'text-black' },
                React.createElement(components_1.Heading, null, "\u0414\u0432\u0443\u0445\u0444\u0430\u043A\u0442\u043E\u0440\u043D\u0430\u044F \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F"),
                React.createElement(components_1.Text, null,
                    "\u0412\u0430\u0448 \u043A\u043E\u0434 \u0434\u0432\u0443\u0445\u0444\u0430\u043A\u0442\u043E\u0440\u043D\u043E\u0439 \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438: ",
                    React.createElement("strong", null, token)),
                React.createElement(components_1.Text, null, "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u044D\u0442\u043E\u0442 \u043A\u043E\u0434 \u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u0434\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438."),
                React.createElement(components_1.Text, null, "\u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u043B\u0438 \u044D\u0442\u043E\u0442 \u043A\u043E\u0434, \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0440\u043E\u0438\u0433\u043D\u043E\u0440\u0438\u0440\u0443\u0439\u0442\u0435 \u044D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435.")))));
}
//# sourceMappingURL=two-factor-auth.template.js.map