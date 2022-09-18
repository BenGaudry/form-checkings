"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormCheckings = void 0;
const TestEmail_1 = require("./scripts/TestEmail");
function FormCheckings(form) {
    const inputs = form.getElementsByTagName('input');
    let maxLength = inputs.length;
    for (let i = 0; i <= maxLength; i++) {
        const input = inputs[i];
        switch (input.type) {
            case "email":
                (0, TestEmail_1.TestEmail)(input);
                break;
            default:
                break;
        }
    }
}
exports.FormCheckings = FormCheckings;
