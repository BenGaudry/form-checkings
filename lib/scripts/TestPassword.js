"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestPassword = void 0;
const IsEmpty_1 = require("./IsEmpty");
function TestPassword(input) {
    if (!(0, IsEmpty_1.IsEmpty)(input)) {
        if (input.value.length >= 8) {
            return true;
        }
        else
            return false;
    }
    else
        return false;
}
exports.TestPassword = TestPassword;
