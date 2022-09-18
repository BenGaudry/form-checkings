"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleSubmitBtn = exports.DefineSubmitBtn = exports.DefineForm = void 0;
var submitBtn;
var inputs;
var form;
function DefineForm(f) {
    form = f;
    inputs = form.getElementsByTagName("input");
}
exports.DefineForm = DefineForm;
function DefineSubmitBtn(btn) {
    submitBtn = btn;
}
exports.DefineSubmitBtn = DefineSubmitBtn;
function HandleSubmitBtn(val) {
    let disabled = (val === true) ? false : true;
    submitBtn.disabled = disabled;
}
exports.HandleSubmitBtn = HandleSubmitBtn;
