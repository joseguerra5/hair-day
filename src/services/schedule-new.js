import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }) {
  try {
    //se a função é async, tem que ter o await no fetch
    //requisição para enviar os dados do agendamento
    await fetch(`${apiConfig.baseURL}/schedules`, {
      //definir o metodo da requisição
      method: "POST",
      //definir o tipo do conteudo
      headers: {
        "Content-Type": "application/json"
      },
      //passa o corpo do conteudo, o stringify serealiza as info
      body: JSON.stringify({ id, name, when})
    })

    alert("Agendamento realizado com sucesso!")
  } catch (error) {
    alert ("Não foi possível agender, Tente novamente mais tarde.")
    console.log(error)
  }
}