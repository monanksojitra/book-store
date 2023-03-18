import React, { useState ,useContext, memo } from 'react'
import C4 from './C4'
import { Newuser } from './C1'

function C3() {
  const [count,setCount] = useState(0)
  const perentcontext = useContext(Newuser)
  console.log('child 3 render')
  return (
    <div>
         <button onClick={()=>{setCount(pre=>pre+1)}}>{count} child 3</button>
         <p>This is count by perent in C3 {perentcontext}</p>
      <C4/>
    </div>
  )
}

export default memo(C3)
