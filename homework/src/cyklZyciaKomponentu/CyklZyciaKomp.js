import React, { useState } from "react";
import { ListZ } from "./components/ListZ";



export  const CyklZyciaKomponentu = () => {
    const [check, setCheck] = useState(false)
    return <article>
        <input type="checkbox" name="" id="" checked={check} onChange={(e)=> setCheck((prev) => !prev)}/>
        {check === true && <ListZ />}
    </article>
}