import React, { useState ,useContext, memo} from 'react'
import { Newuser } from './C1'
function C4() {
  const [count,setCount] = useState(0)
  const perentcontext = useContext(Newuser)
  return (
    <div>
      <p>This is count by perent in C4 {perentcontext}</p>
      <button onClick={()=>{setCount(pre=>pre+1)}}> {count} child 4</button>
    </div>
  )
}

export default memo(C4)
