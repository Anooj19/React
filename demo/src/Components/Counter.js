import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0);
  return (
    <div>
          <h1>counter</h1>
          <button onClick={() => setCounter((anooj) => anooj+1)}> + </button>
    </div>
  )
}

export default Counter;
