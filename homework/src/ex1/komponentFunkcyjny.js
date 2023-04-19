// funkcja zewnętrzna poza komponentem
const multiplyTwoNumbers = (a, b) => {
  return a * b;
};

const odejmijDwieLiczby = (a, b) => {
  return a - b;
};

const podzielLiczbe = (a,b) => {
  return a/b;
}

const jakisObiekt = {
  name: 'Dorota',
  age: 34,
  job: 'student',
  hobby: 'art'
}

export const KomponentFunkcyjny = () => {
  const naglowek = <h3>Nauka React</h3>;
  const button = <button>Click me</button>;
  const notatki = <textarea placeholder="notatka"></textarea>;
  const obiekt = {
    name: "Julia",
    age: 18,
    job: "teacher",
  };

  const tablica = [1, 2, 3, 4];

  // funkcja wewnętrzna wewnątrz komponentu
  const addTwoNumbers = (a, b) => {
    return a + b;
  };

  const wynikOdejmowania = odejmijDwieLiczby(5, 10);
  const wynikDzielenia = podzielLiczbe(5,10)

  return (
    <article>
      {naglowek}
      {button}
      {notatki}
      <ul>
        <li>Name: {obiekt.name}</li>
        <li>Age: {obiekt.age}</li>
        <li>Job: {obiekt.job}</li>
      </ul>

      <div>{tablica}</div>

      <div>
        <p>Wynik dodawania: 5 + 10 = {addTwoNumbers(5, 10)}</p>
        <p>Wynik mnożenia: 5 * 10 = {multiplyTwoNumbers(5, 10)}</p>
        <p>Wynik odejmowania: 5 - 10 = {wynikOdejmowania}</p>
        <p>Wynik dzielenia: 5/10 = {wynikDzielenia}</p>
      </div>

      <div>
       <p>Imie: {jakisObiekt.name}</p> 
       <p>Wiek: {jakisObiekt.age}</p> 
       <p>Nazwisko: {jakisObiekt.job}</p> 
       <p>Hobbi: {jakisObiekt.hobby}</p>
      </div>

    </article>
  );
};
