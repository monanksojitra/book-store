import React, { useContext, useEffect, useState ,memo} from 'react'
import { Usercontext } from './Context'

function C2() {
  // const user = useContext(Usercontext)
  const [count,setCount] = useState(0)
  console.log('child 2 render')
  return (
    <div>
      <p>This is Child count</p>
      <button onClick={()=>{setCount(pre=>pre+1)}}>{count} child 2</button>
    
      {/* {user} */}
        {/* <Usercontext.Consumer>
    {value =>
      <h1>hello{value}</h1>
    }
        </Usercontext.Consumer> */}

    </div>
  )
}
export default memo(C2)
