"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmationTemplate = ConfirmationTemplate;
const components_1 = require("@react-email/components");
const html_1 = require("@react-email/html");
const React = require("react");
function ConfirmationTemplate({ domain, token }) {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`;
    return (React.createElement(components_1.Tailwind, null,
        React.createElement(html_1.Html, null,
            React.createElement(components_1.Body, { className: 'text-black' },
                React.createElement(components_1.Heading, null, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u043E\u0447\u0442\u044B"),
                React.createElement(components_1.Text, null, "\u0427\u0442\u043E\u0431\u044B \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0441\u0432\u043E\u0439 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043F\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0441\u0441\u044B\u043B\u043A\u0435:"),
                React.createElement(components_1.Link, { href: confirmLink }, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u043F\u043E\u0447\u0442\u0443"),
                React.createElement(components_1.Text, null, "\u042D\u0442\u0430 \u0441\u0441\u044B\u043B\u043A\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u0430 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 1 \u0447\u0430\u0441\u0430. \u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u043B\u0438 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435, \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0440\u043E\u0438\u0433\u043D\u043E\u0440\u0438\u0440\u0443\u0439\u0442\u0435 \u044D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435.")))));
}
//# sourceMappingURL=confirmation.template.js.map