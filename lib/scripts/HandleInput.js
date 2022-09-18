"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleInput = void 0;
const HandleSubmitBtn_1 = require("./HandleSubmitBtn");
const TestEmail_1 = require("./TestEmail");
const TestPassword_1 = require("./TestPassword");
function HandleInput(form) {
    const inputs = form.getElementsByTagName("input");
    // Compte le nombre d'inputs valides pour pouvoir
    // comparer ensuite avec le nombre total d'inputs
    var counter = 0;
    const nbInputs = inputs.length;
    for (let i = 0; i < nbInputs; i++) {
        const input = inputs[i];
        let t = input.type;
        var result;
        if (t === "email") {
            result = ((0, TestEmail_1.TestEmail)(input)) ? 1 : 0;
        }
        else if (t === "password") {
            result = ((0, TestPassword_1.TestPassword)(input)) ? 1 : 0;
        }
        else if (t === "submit") {
            result = 1;
            (0, HandleSubmitBtn_1.DefineSubmitBtn)(input);
        }
        else {
            result = 1;
        }
        // On augmente le compteur si l'input est vérifié
        counter = counter + result;
    }
    // Fin de la boucle
    let enableBtn = (counter === nbInputs) ? true : false;
    (0, HandleSubmitBtn_1.HandleSubmitBtn)(enableBtn);
}
exports.HandleInput = HandleInput;
