import React, { useContext, useEffect, useState } from 'react'
import { Usercontext } from './Context'

export default function C2() {
  // const user = useContext(Usercontext)
  const [count,setCount] = useState(0)
  console.log('child render')
  return (
    <div>
      <p>This is Child count</p>
      <button onClick={()=>{setCount(pre=>pre+1)}}>child{count}</button>
    
      {/* {user} */}
        {/* <Usercontext.Consumer>
    {value =>
      <h1>hello{value}</h1>
    }
        </Usercontext.Consumer> */}

    </div>
  )
}
