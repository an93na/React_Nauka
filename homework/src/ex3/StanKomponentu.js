import React, { useState } from "react";

export const StanKomponentu = () => {
  const [state, setState] = useState("test");
  const [name, setName] = useState("Krzyś");
  const [lastName, setLastName] = useState("Koper");
  const [age, setAge] = useState(27);
  const [address, setAddress] = useState({
    city: "Łódź",
    street: "Błękitna",
    postalCode: 11111,
  });

  const [users, setUsers] = useState(["Janek ", "Joasia ", "Basia "]);

  //   setTimeout(() => {
  //     setState("koniec Testu");
  //   }, 3000);

  //   setTimeout(() => {
  //     // nowy obiekt jako nowy stan
  //     // const newAddress = { city: "Gdańsk", street: " Dluga", postalCode: 88888 };
  //     // setAddress(newAddress);

  //     // aktualizacja stanu poprzedniego
  //     setAddress((prevState) => ({...prevState, street: 'Armi Krajowej'}))

  //     // setUsers((prevUsers) => ([...prevUsers, ' Luka']));

  //   }, 5000);

  const [number1] = useState(10);
  const [number2] = useState(15);

  const sum = number1 + number2;

  return (
    <article>
      <h4>Stan Komponentu</h4>
      <p>{state}</p>
      <p>
        Name: <b>{name}</b>
      </p>
      <p>
        Last name: <b>{lastName}</b>
      </p>
      <p>
        Age: <b>{age}</b>
      </p>
      <p>
        City: <b>{address.city}</b>
      </p>
      <p>
        Street: <b>{address.street}</b>
      </p>
      <p>
        Street: <b>{address.postalCode}</b>
      </p>

      <p>
        Users: <b>{users}</b>
      </p>
      <p>Wynik dodawania liczby {number1} i {number2} = {sum}</p>
    </article>
  );
};
