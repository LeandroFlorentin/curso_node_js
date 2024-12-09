"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailTemplate = void 0;
const emailTemplate = `
<div>
    <h1>Hola, {{name}}</h1>
    <p>Gracias por su orden.{{orderId}}</p>
</div>
`;
exports.emailTemplate = emailTemplate;
