// prendo tutti i elementi necessari del form
const form = document.getElementById("content")
const inputField = document.getElementById("userField")
const saveButton = document.getElementById("save")
const deleteButton = document.getElementById("delete")

// SAVE BUTTON
saveButton.addEventListener("click", (e) => {
  e.preventDefault()
  // ora posso aggiungere la mia logica
  const inputContent = inputField.value
  // salvo l'elemento in local storage
  // If statement che controlla che username sia presente e lo mette nell'input al refresh
  let savedContent = localStorage.getItem("username")
  if (savedContent !== null) {
    savedContent = inputField.value
  } else {
    localStorage.setItem("username", inputContent)
  }
  // svuoto l'input field
  inputField.innerText = ""
})

// DELETE BUTTON
deleteButton.addEventListener("click", (e) => {
  e.preventDefault()
  // elimino l'elemento in local storage
  localStorage.removeItem("username")
})

// Secondo esercizio
// prendo la posizione del timer
const timer = document.getElementById("timer")
// mi faccio il timer
let counter = 0
const counterUp = setInterval(() => {
  console.log(counter)
  timer.innerText = counter
  return counter++
}, 1000)
// mi salvo in session storage il counter
sessionStorage.setItem("timer", counter++)
