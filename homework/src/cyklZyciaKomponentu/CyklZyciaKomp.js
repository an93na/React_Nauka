import React, { useState } from "react";
import { ListZ } from "./components/ListZ";
import { ListZ2 } from "./components/ListZ2";
import { ListZ3 } from "./components/ListZ3";
import { ListZ4 } from "./components/ListZ4";



export  const CyklZyciaKomponentu = () => {
    const [check, setCheck] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [check3, setCheck3] = useState(false)
    const [check4, setCheck4] = useState(false)
    return <article>
        <label>
            <input type="checkbox" name="" id="" checked={check} onChange={()=> setCheck((prev) => !prev)}/>
        Pokaż dane
        </label>
        {check === true && <ListZ />}
        <label>
            <input type="checkbox" name="" id="" checked={check2} onChange={()=> setCheck2((prev) => !prev)}/>
        Pokaż dane2
        </label>
        {check2 === true && <ListZ2 />}
        <label>
            <input type="checkbox" name="" id="" checked={check3} onChange={()=> setCheck3((prev) => !prev)}/>
        Pokaż dane3
        </label> 
        {check3 === true && <ListZ3 />}
        <label>
            <input type="checkbox" name="" id="" checked={check4} onChange={()=> setCheck4((prev) => !prev)}/>
        Pokaż dane4
        </label>
        {check4 === true && <ListZ4 />}

    </article>
}