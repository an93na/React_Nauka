import React, { useState } from "react";

export const Formularz = () => {
    return <div>
        <h4>Formularz</h4>
        <form onSubmit={(event)=> {
            event.preventDefault();
        }}>
            <input type="text" placeholder="Wpisz wartość" />
            <button type="submit">Submit</button>
        </form>
    </div>
}
