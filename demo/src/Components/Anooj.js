import React, { useState } from 'react'

function Anooj() {
    const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>counter-{ counter}</h1>
          <button onClick={() => setCounter((anooj) => anooj+1)}> + </button>
    </div>
  )
}

export default Anooj;
