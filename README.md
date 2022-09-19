# Form Checkings
## What is Form Checkings ?
Form checkings is a javascript library written in typescript that do all the verification on inputs before submitting it, so you don’t have to code it yourself.

## How can I add it to my project ?
You can use the node package manager with this command : 

`npm i form-checkings`

or 

`yarn add form-checkings`

Then, you only need to write a few lines of html & javascript to include it :

```html
<form id=«check-this-form»>`
```

```javascript
include { FormCheckings } from ‘form-checkings’
FormCheckings(document.getElementById(‘check-this-form’))
```
