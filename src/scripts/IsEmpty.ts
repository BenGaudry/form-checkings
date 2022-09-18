export function IsEmpty(input:HTMLInputElement) {
  let str = input.value
  if( str.replace(/\s+/, '').length ) {
    return false
  } else {
    return true
  }
}