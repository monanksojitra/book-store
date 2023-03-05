import React from 'react'
import { Usercontext } from './Context'

export default function C2() {
  return (
    <div>
        <Usercontext.Consumer>
    {value =>
      <h1>hello{value}</h1>
    }
        </Usercontext.Consumer>
    </div>
  )
}
