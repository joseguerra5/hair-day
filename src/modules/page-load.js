import { schedulesDay} from "./schedules/load.js";

//capturar o evento depois que a tela carrega todo o conteudo
document.addEventListener("DOMContentLoaded", () => {
  schedulesDay()
})