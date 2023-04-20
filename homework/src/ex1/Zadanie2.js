import React from "react";
import classes from './Zadanie2.module.css'

export const Zadanie2 = () => {
    return (
      <article>
        <p>Style CSS Modules</p>
        <p className={classes.zadaniaDoZrobienia}>Zadania do zrobienia</p>
        <ul>
          <li className={classes.zielonaKlasa}>Pouczyć się JSa</li>
          <li className={classes.zielonaKlasa}>Pouczyć się CSSa</li>
          <li className={`${classes.niebieskaKlasa} ${classes.przekreslonyTekst}`}>Pouczyć się Reacta</li>
        </ul>
      </article>
    );
  };
  