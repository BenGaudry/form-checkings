"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestEmail = void 0;
const IsEmpty_1 = require("./IsEmpty");
function TestEmail(input) {
    if (!(0, IsEmpty_1.IsEmpty)(input)) {
        let val = input.value;
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let result = (val.match(emailRegex)) ? true : false;
        return true;
    }
    return false;
}
exports.TestEmail = TestEmail;
