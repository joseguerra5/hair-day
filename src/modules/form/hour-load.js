import dayjs from "dayjs";
import { openingHours } from "../../util/opening-hour.js";

export function hoursLoad({date}) {

  //recupera as horas
  const opening = openingHours.map((hour) => {
    //recupera valor inteiro
    const [scheduleHours] = hour.split(":")

    //adiciona a hora na date e verifica se está no passado
    const isHoursPast = dayjs(date).add(scheduleHours, "hour").isAfter(dayjs())

    //define se o horário está disponível
    return {
      hour,
      available: isHoursPast
    }
    
 })

 //redenrizar os horários.
 opening.forEach(({hour, available}) => {
  const li = documente.createElement("li")
    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")
    li.textContent = hour
 })
   
}