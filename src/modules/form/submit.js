import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";
const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const clientName = document.getElementById("customer")

//date atual para o input
const inputToday = dayjs(new Date()). format("YYYY-MM-DD")

//carrega a data atual.
selectedDate.value = inputToday

//define a data mínima como sendo a datra ataual/
selectedDate.min = inputToday

form.onsubmit = async (event) => {
  //evitar que o navegador carregue
  event.preventDefault()

  try {
    //recuperar o nome do cliente
    const name = clientName.value.trim()

    if(!name){
      //se o clientName não for preenchido usa-se o return porque dai para o código e retorna logo o alert
      return alert("Informe o nome do cliente") 
    }
    const hourSelected = document.querySelector(".hour-selected")
    
    if(!hourSelected){
      return alert("Selecione um horário") 
    }

    //recupera somente a hora
    const[hour] = hourSelected.innerText.split(":")

    //omsere a hora na data com o JS
    const when = dayjs(selectedDate.value).add(hour, "hour")

    //gera um ID
    const id = new Date().getTime()

    //faz p agemda,emtp
    await scheduleNew({
      id,
      name,
      when,
    })

    //recarregar o agendamento
    await schedulesDay()

    //limpa o input de nome do cliente
    clientName.value = ""
  } catch (error) {
    alert("não foi possível realizar o agendamento")
    console.log(error)
  }
}