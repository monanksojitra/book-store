import React, { useReducer } from 'react'


const reset = 0
const reducr =(state,action)=>{
  switch (action) {
    case '+':
      return state +1
  
    case '-':
      return state -1
  
    case 'reset':
      return reset
  
    default:
      return state
  }

}
function CounterReduces() {
  const [count,dispatch]= useReducer(reducr,reset)
  return (
    <div>
      <h2>this is Count {count}</h2>
      <button onClick={()=>dispatch('+')}>+1</button>
      <button onClick={()=>dispatch('-')}>-1</button>
      <button onClick={()=>dispatch('reset')}>reset</button>
    </div>
  )
}

export default CounterReduces
