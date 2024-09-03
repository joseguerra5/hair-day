import { hoursLoad } from "../form/hour-load.js";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { scheduleShow } from "../schedules/show.js";
const selectedDate = document.getElementById("date")
export async function schedulesDay() {
  //obtém da data do imput
  const date = selectedDate.value

  //Busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date })

  //Exibe os agendamentos
  scheduleShow({dailySchedules})

  //renderiza as horas disponíveis
  hoursLoad({date, dailySchedules})
}