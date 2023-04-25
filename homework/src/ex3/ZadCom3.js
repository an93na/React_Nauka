import React, { useState } from "react";



export const ZadCom3 = () => {
    const[status, setStatus] = useState('');
    return <article>
        <h4>ZadCom3</h4>
        <p>TextFiled</p>
        <input type="text" onChange={(event)=>setStatus(event.target.value)}/>
        <h4>{status}</h4>
    </article>
}