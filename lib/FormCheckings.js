"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormCheckings = void 0;
const HandleInput_1 = require("./scripts/HandleInput");
function FormCheckings(form) {
    window.onload = () => {
        (0, HandleInput_1.HandleInput)(form);
    };
    form.addEventListener('input', () => {
        (0, HandleInput_1.HandleInput)(form);
    });
}
exports.FormCheckings = FormCheckings;
