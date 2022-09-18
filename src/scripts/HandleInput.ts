import { DefineSubmitBtn, HandleSubmitBtn } from "./HandleSubmitBtn";
import { TestEmail } from "./TestEmail";
import { TestPassword } from "./TestPassword";

export function HandleInput(form: HTMLFormElement) {
  const inputs = form.getElementsByTagName("input");

  // Compte le nombre d'inputs valides pour pouvoir
  // comparer ensuite avec le nombre total d'inputs
  var counter:number = 0
  const nbInputs = inputs.length

  for (let i = 0; i < nbInputs; i++) {
    const input = inputs[i];
    let t = input.type

    var result:number
    
    if(t === "email") {
      result = (TestEmail(input)) ? 1 : 0
    } else if (t === "password") {
      result = (TestPassword(input)) ? 1 : 0
    } else if (t === "submit") {
      result = 1
      DefineSubmitBtn(input)
    } else {
      result = 1
    }
    // On augmente le compteur si l'input est vérifié
    counter = counter + result
  }
  // Fin de la boucle
  let enableBtn = (counter === nbInputs) ? true : false
  HandleSubmitBtn(enableBtn)

}