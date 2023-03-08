import React, { useState , memo } from 'react'
import C4 from './C4'

function C3() {
  const [count,setCount] = useState(0)
  console.log('child 3 render')
  return (
    <div>
         <button onClick={()=>{setCount(pre=>pre+1)}}>{count} child 3</button>
      <C4/>
    </div>
  )
}

export default memo(C3)
