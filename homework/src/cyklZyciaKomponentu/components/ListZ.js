import React, { useEffect } from "react";



export const ListZ = () => {
    useEffect(() => {
        console.log('komponent się zamontował');
        
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))
      return () => {
        console.log('komponent się odmontował')
      }
    }, [])
    return <div>

    </div>
}