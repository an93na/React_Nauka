import React, { useEffect, useState } from "react";

export const ListZ3 = () => {
  const [counter1, setCounter1] = useState(0);
  const [slowo, setSlowo] = useState('');

  useEffect(() => {
    console.log('slowo sie zmienilo')
    if(slowo === 'brzydkie slowo'){
      alert('Nie mow brzydko')
    }
  }, [slowo])
  return (
    <div>
      <div>
        <h2>{counter1}</h2>
        <input type="text" name="" id="" value={slowo} onChange={(e)=> setSlowo(e.target.value)}/>
        <button onClick={() => setCounter1(counter1 + 1)}>+1</button>
      </div>
    </div>
  );
};