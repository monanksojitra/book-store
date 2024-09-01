import React, { useContext, useEffect, useState ,memo} from 'react'
import { Newuser } from './C1'
import { Usercontext } from './Context'

function C2() {
  // const user = useContext(Usercontext)
  const perentcontext = useContext(Newuser)
  const [count,setCount] = useState(0)
  return (
    <div>
      <p>This is count by perent in C2 {perentcontext}</p>
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
