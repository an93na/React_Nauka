import React, { useState } from "react";



export const ZadCom1 = () =>{
    const [counter, SetCounter] = useState(0)

    return <div>
        <h4>Counter exercise</h4>
        <input type="text" value={counter} readOnly/>
        <div style={{display: 'flex', gap: 20}}>
            <button onClick={() => SetCounter((prevCo) => prevCo +1)}>+1</button>
            <button onClick={() => SetCounter((prevCo) => prevCo -1)}>-1</button>
        </div>
    </div>
} 