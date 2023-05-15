import React, { useState } from "react";
import { ListZ } from "./components/ListZ";
import { ListZ2 } from "./components/ListZ2";



export  const CyklZyciaKomponentu = () => {
    const [check, setCheck] = useState(false)
    const [check2, setCheck2] = useState(false)
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
    </article>
}