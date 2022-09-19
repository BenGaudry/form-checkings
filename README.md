# Form Checkings
## What is Form Checkings ?
Form checkings is a javascript library written in typescript that do all the verification on inputs before submitting it, so you don’t have to code it yourself.

## How can I add it to my project ?
You can use the node package manager with this command : 

`npm i form-checkings`

or 

`yarn add form-checkings`

Then, you only need to write a few lines of html & javascript to include it :

---

```html
<!-- index.html -->
<form id="check-this-form">
  <input type="email" />
  <input type="submit" value="Valider" />
</form>

<script src="./app.js" type="module"></script>
```

---

```javascript
// app.js
include { FormCheckings } from 'form-checkings'
FormCheckings(document.getElementById('check-this-form'))
```

## Features
### Currently supported features :
- Checking email
- Checking password

### In building features :
- Getters
   - getPasswordStrength():float
   - getLog():string

## Contributing to project
### Reporting an issue 

To fix an issue that you may have found in the library, please consider reporting it in the [issues section](https://github.com/BenGaudry/form-checkings/issues)

### Pull request

Pull requests are not taken in charge yet but it will be implemented in a close future
