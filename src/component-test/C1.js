import React, { useContext, useEffect, useState } from 'react'
import C2 from './C2'
import C3 from './C3'
import { Usercontext } from './Context'
export const Newuser = React.createContext('this is defult context')
export default function C1() {
  const user = useContext(Usercontext)
  const [count,setCount] = useState(0)
  
  return (
 
    <Newuser.Provider value={count}>
      <div>
      <p>"count of perent</p>
      <button onClick={()=>{setCount(pre=>pre+1)}}>perent{count}</button>
      <C2/>
      <C3/>
    </div>
    </Newuser.Provider>
   
  )
}
