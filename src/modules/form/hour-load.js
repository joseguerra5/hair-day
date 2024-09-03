import dayjs from "dayjs";
import { openingHours } from "../../util/opening-hour.js";

import { hoursClick } from "../form/hour-click.js";

const hours = document.getElementById("hours")

export function hoursLoad({date, dailySchedules}) {
  //limpa a lista de horários
  hours.innerHTML = ""

  //obtém a lista de todos os horários ocupados
  const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))


  //recupera as horas
  const opening = openingHours.map((hour) => {
    //recupera valor inteiro desestruturando o obj
    const [scheduleHours] = hour.split(":")

    //adiciona a hora na date e verifica se está no passado
    const isHoursPast = dayjs(date).add(scheduleHours, "hour").isBefore(dayjs())

    const available = !unavailableHours.includes(hour) && !isHoursPast
    //define se o horário está disponível
    return {
      hour,
      available
    }
    
 })

 //redenrizar os horários.
 //desentrutura o array opening e percorre todos os valores
 opening.forEach(({hour, available}) => {
  const li = document.createElement("li")
    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")
    li.textContent = hour

    if (hour === "9:00") {
      hourHeaderAdd("Manhã")
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde")
    } else if (hour === "19:00") {
      hourHeaderAdd("Noite")
    }
    hours.append(li)

 })
 //adiciona o evento de click em horários disponíveis
 hoursClick()
}

function hourHeaderAdd(title) {
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = title

  hours.append(header)
}