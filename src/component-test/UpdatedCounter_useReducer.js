import React, { useEffect ,useReducer, useState } from 'react'
const reset = 0
const reducr = (state, action) => {
    switch (action) {
        case '+':
            return state + 1
        case '-':
            return state - 1
        case '*':
            return state * 2
        case '/':
            return state / 2
        case 'reset':
            return reset
        default:
            return state
    }
}
function UpdatedCounter_useReducer() {
    
        const [count, dispatch] = useReducer(reducr, reset)
        useEffect(() => {
          },[]);
    
    return (
        <div>
           <div> <h2>this is Count {count}</h2></div>
            <button onClick={() => dispatch('+')}>+1</button>
            <button onClick={() => dispatch('-')}>-1</button>
            <button onClick={() => dispatch('*')}>*2</button>
            <button onClick={() => dispatch('/')}>/2</button>
            <button onClick={() => dispatch('reset')}>reset</button>
        </div>
    )
}

export default UpdatedCounter_useReducer
