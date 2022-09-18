import { TestEmail } from "./TestEmail";
import { TestPassword } from "./TestPassword";

export function HandleInput(form: HTMLFormElement) {
  const inputs = form.getElementsByTagName("input");
  for (let i = 0; i <= inputs.length; i++) {
    const input = inputs[i];
    let inputType:string = input.type
    switch (inputType) {
      case "email":
        TestEmail(input);
        break;

      case "password":
        TestPassword(input);
        break;

      case "submit":
        new SubmitBtn(input);
    }
  }
}


export class SubmitBtn {

  button:HTMLInputElement

  constructor(btn:HTMLInputElement) {
    this.button = btn
  }

  get() {
    return this.button
  }

}