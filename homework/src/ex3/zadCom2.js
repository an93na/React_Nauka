import React, { useState } from "react";



export const ZadCom2 = () => {
    const [counter, setCounter] = useState(0);
    const increaseOne = () => {
        setCounter(counter+1);
    }
    const increaseFive = () => {
        setCounter(counter+5);
    }
    const decreaseOne = () => {
        setCounter(counter-1);
    }
    const decreaseFive = () => {
        setCounter(counter-5);
    }
    return <div>
        <h4>ZadCom2</h4>
        <input type="text" value={counter} readOnly />
        <div style={{display: "flex", gap: 20}}>
        <button onClick={increaseOne}>+1</button>
        <button onClick={decreaseOne}>-1</button>
        <button onClick={increaseFive}>+5</button>
        <button onClick={decreaseFive}>-5</button>
        </div>

    </div>
}