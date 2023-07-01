const lista = document.querySelector('#lista');
const day = document.querySelector("#day");
const resultDay = day.addEventListener("input", () => {
// console.log(day.value)
const li1 = document.createElement('li');
li1.innerText = `${day.value} day`
const resultUl1 = lista.appendChild(li1);}



);

const month = document.querySelector("#month");
const resultMonth = month.addEventListener("input", () =>
  console.log(month.value)
);

const year = document.querySelector("#year");
const resultYear = year.addEventListener("input", () =>
  console.log(year.value)
);