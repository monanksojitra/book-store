import React, { useContext } from 'react'
import { Usercontext } from './Context'

export default function C2() {
  const user = useContext(Usercontext)
  return (
    <div>
      {user}
        {/* <Usercontext.Consumer>
    {value =>
      <h1>hello{value}</h1>
    }
        </Usercontext.Consumer> */}

    </div>
  )
}
