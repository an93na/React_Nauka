import React, { useState } from "react";



export const ZadCom4 = () => {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const result = (Number(number1)+Number(number2))
    return <article>
        <h4>ZadCom4</h4>
        <h5>Add Two Numbers</h5>
        <input type="text" value={number1} onChange={({target}) => setNumber1(target.value)}/>
        <input type="text" value={number2} onChange={({target}) => setNumber2(target.value)}/>
        <p><b>Result: </b>{result}</p>
    </article>
}