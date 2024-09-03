import dayjs from "dayjs";

//selecionar as sessões
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export async function scheduleShow({dailySchedules}) {
  try {
    //Limpa as listas
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    //Renderiza os agendamentos por periodo
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li")
      const divContainer = document.createElement("div")
      const time = document.createElement("span")
      const name = document.createElement("span")
      const cancelIcon = document.createElement("img")


      time.textContent = dayjs(schedule.when).format("HH:mm")
      name.textContent = schedule.name

      cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
      cancelIcon.setAttribute("alt", "Cancelar")
      cancelIcon.classList.add("cancel-btn")

      item.setAttribute("data-id", schedule.id)

      divContainer.append(time, name)

      item.append(divContainer, cancelIcon)

      const hour = dayjs(schedule.when).hour()

      //renderiza o agendamento na sessão
      if(hour <= 12){
        periodMorning.appendChild(item)
      }else if(hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item)
      }else {
        periodNight.appendChild(item)
      }
    });
  } catch (error) {
    alert("Não foi possível exibir os agendamentos")
    console.log(error)
  }
}