// funkcja zewnętrzna poza komponentem
const multiplyTwoNumbers = (a, b) => {
  return a * b;
};

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

  return (
    <article>
      {naglowek}
      {button}
      {notatki}
      {`Name: ${obiekt.name} Age: ${obiekt.age} Job: ${obiekt.job}`}
      <div>{tablica}</div>

      <div>
        <p>Wynik dodawania 5 + 10 = {addTwoNumbers(5,10)}</p>
        <p>Wynik mnożenia 5 * 10 = {multiplyTwoNumbers(5,10)}</p>
      </div>
    </article>
  );
};
