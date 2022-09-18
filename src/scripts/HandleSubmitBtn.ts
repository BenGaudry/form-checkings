import { SubmitBtn } from "./HandleInput";

console.log(SubmitBtn.get())

export function HandleSubmitBtn(btnActive:boolean) {
  SubmitBtn.disabled = btnActive
}