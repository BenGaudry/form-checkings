import { IsEmpty } from "./IsEmpty";

export function TestPassword (input:HTMLInputElement):boolean {
  if(!IsEmpty(input)) {
    if(input.value.length >= 8) {
      return true
    } else return false
  } else return false
}