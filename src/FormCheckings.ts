import { HandleInput } from "./scripts/HandleInput";

export function FormCheckings(form:HTMLFormElement) {
  form.addEventListener('input', () => {
    HandleInput(form)
  })
}