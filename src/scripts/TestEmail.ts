import { HandleSubmitBtn } from "./HandleSubmitBtn"

export function TestEmail(input:HTMLInputElement) {
  if (input.value.includes('@')) {
    HandleSubmitBtn(true)
  } else {
    HandleSubmitBtn(false)
  }
}