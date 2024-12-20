"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPasswordTemplate = ResetPasswordTemplate;
const components_1 = require("@react-email/components");
const html_1 = require("@react-email/html");
const React = require("react");
function ResetPasswordTemplate({ domain, token }) {
    const resetLink = `${domain}/auth/new-password?token=${token}`;
    return (React.createElement(components_1.Tailwind, null,
        React.createElement(html_1.Html, null,
            React.createElement(components_1.Body, { className: 'text-black' },
                React.createElement(components_1.Heading, null, "\u0421\u0431\u0440\u043E\u0441 \u043F\u0430\u0440\u043E\u043B\u044F"),
                React.createElement(components_1.Text, null, "\u0412\u044B \u0437\u0430\u043F\u0440\u043E\u0441\u0438\u043B\u0438 \u0441\u0431\u0440\u043E\u0441 \u043F\u0430\u0440\u043E\u043B\u044F. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043F\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0441\u0441\u044B\u043B\u043A\u0435, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C:"),
                React.createElement(components_1.Link, { href: resetLink }, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0441\u0431\u0440\u043E\u0441 \u043F\u0430\u0440\u043E\u043B\u044F"),
                React.createElement(components_1.Text, null, "\u042D\u0442\u0430 \u0441\u0441\u044B\u043B\u043A\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u0430 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 1 \u0447\u0430\u0441\u0430. \u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u043B\u0438 \u0441\u0431\u0440\u043E\u0441 \u043F\u0430\u0440\u043E\u043B\u044F, \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0440\u043E\u0438\u0433\u043D\u043E\u0440\u0438\u0440\u0443\u0439\u0442\u0435 \u044D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435.")))));
}
//# sourceMappingURL=reset-password.template.js.map