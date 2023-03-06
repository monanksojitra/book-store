import React, { useState } from 'react'

function CounterHook() {
    const [count,setcount]=useState(0)
  const updatecount = ()=>{setcount(count+1)}

  return (
    <div>
      <button onClick={updatecount}>Live Counter is {count}</button>
    </div>
  )
}

export default CounterHook
