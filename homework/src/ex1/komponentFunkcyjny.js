export const KomponentFunkcyjny = () => {
 const naglowek = <h3>Nauka React</h3>
 const button = <button>Click me</button>
 const notatki = <textarea placeholder="notatka"></textarea>
 const obiekt = {
    name: 'Julia',
    age: 18,
    job: 'teacher'
}

 const tablica = [1, 2, 3, 4]; 

 return(<article>
    {naglowek}
    {button}
    {notatki}
    {`Name: ${obiekt.name} Age: ${obiekt.age} Job: ${obiekt.job}`}
    <div>
        {tablica}
    </div>
 </article>)
}