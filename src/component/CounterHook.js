import React, { useEffect, useState } from 'react'

function CounterHook() {
  const [count, setcount] = useState(0)
  const updatecount = () => { setcount(count + 1) }

  useEffect(() => {
    document.title = count
  }, [count])


  return (
    <div>
      <button id='counter' onClick={updatecount}>Live Counter is {count}</button>
    </div>
  )
}

export default CounterHook
