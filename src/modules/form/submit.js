import dayjs from "dayjs"
const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

//date atual para o input
const inputToday = dayjs(new Date()). format("YYYY-MM-DD")

//carrega a data atual.
selectedDate.value = inputToday

//define a data mínima como sendo a datra ataual/
selectedDate.min = inputToday

form.onsubmit = (event) => {
  //evitar que o navegador carregue
  event.preventDefault()

  console.log("test")
}