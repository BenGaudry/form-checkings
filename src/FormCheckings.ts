import { HandleInput } from "./scripts/HandleInput";

export function FormCheckings(form:HTMLFormElement) {
  window.onload = () => {
    HandleInput(form)
  }

  form.addEventListener('input', () => {
    HandleInput(form)
  })
}