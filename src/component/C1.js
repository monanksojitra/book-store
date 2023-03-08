import React, { useEffect, useState } from 'react'
import C2 from './C2'

export default function C1() {
  const [count,setCount] = useState(0)
  console.log('prent render')
  
  return (
    <div>
      <p>"count of perent</p>
      <button onClick={()=>{setCount(pre=>pre+1)}}>perent{count}</button>
      <C2/>
    </div>
  )
}
