import React, { useState , memo} from 'react'

function C4() {
  const [count,setCount] = useState(0)
  console.log('child 4 render')
  return (
    <div>
      
      <button onClick={()=>{setCount(pre=>pre+1)}}> {count} child 4</button>
    </div>
  )
}

export default memo(C4)
