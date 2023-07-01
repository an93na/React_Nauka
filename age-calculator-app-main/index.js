const day = document.querySelector("#day");
const resultDay = day.addEventListener("input", () => console.log(day.value));

const month = document.querySelector("#month");
const resultMonth = month.addEventListener("input", () =>
  console.log(month.value)
);

const year = document.querySelector("#year");
const resultYear = year.addEventListener("input", () =>
  console.log(year.value)
);

const lista = document.querySelector('#lista');
const li1 = document.createElement('li');
li1.innerText = `${resultDay} day`
const resultUl1 = lista.appendChild(li1);