"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsEmpty = void 0;
function IsEmpty(input) {
    let str = input.value;
    if (str.replace(/\s+/, '').length) {
        return false;
    }
    else {
        return true;
    }
}
exports.IsEmpty = IsEmpty;
