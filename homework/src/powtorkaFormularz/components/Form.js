import React from "react";



export const Form = (props) => {
   const {value, setValue} = props
    return <div>
        <p>Form</p>
        <input type="text" name="" id="" value={value} onChange={(e)=> setValue(e.target.value)} />
    </div>
}