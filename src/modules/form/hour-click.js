export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available")
 
  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      hours.forEach((hour) => {
        //primeiro passa por toda hora e remove a classse
        hour.classList.remove("hour-selected")
      })
      //depois vê onde foi o click e adiciona a classe
      selected.target.classList.add("hour-selected")
    })
  })
}