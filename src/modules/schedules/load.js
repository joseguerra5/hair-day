import { hoursLoad } from "../form/hour-load.js";
const selectedDate = document.getElementById("date")
export function schedulesDay() {
  //obtém da data do imput
  const date = selectedDate.value

  //renderiza as horas disponíveis
  hoursLoad({date})
}