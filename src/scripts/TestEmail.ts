import { IsEmpty } from "./IsEmpty";

export function TestEmail(input:HTMLInputElement):boolean {
  if (!IsEmpty(input)) {
    let val = input.value
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    let result = (val.match(emailRegex)) ? true : false

    return result
  }

  return false
}