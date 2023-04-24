import React from "react";
import cat from "./1.jpg";
import cat2 from "./ddd.png";
import mapa from './mapa.png'

export const Assets = () => {
  return (
    <article>
      <h4>Assets</h4>
      <div style={{display:"flex", gap: 10}}>
        <img src={cat} alt="cat" style={{borderRadius: 15, height: 500, width: 500}}/>
        <img src={cat2} alt="cat2" style={{borderRadius: "50%", height: 500, width: 500}}/>
        <img src={mapa} alt="mapa" style={{border: '1px solid red', height: 500, width: 500}}/>
      </div>
    </article>
  );
};
