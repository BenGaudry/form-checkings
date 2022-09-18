var submitBtn:HTMLInputElement
var inputs
var form:HTMLFormElement

export function DefineForm(f:HTMLFormElement) {
  form = f
  inputs = form.getElementsByTagName("input");
}

export function DefineSubmitBtn(btn:HTMLInputElement) {
  submitBtn = btn
}

export function HandleSubmitBtn(val:boolean) {
  let disabled = (val === true) ? false : true
  submitBtn.disabled = disabled
}