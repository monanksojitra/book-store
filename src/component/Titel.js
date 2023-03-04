import React from 'react'
import '../css/titel.css'

 const Titel= (prope)=> {
  return (
    <div>
    <h1 className='titel'>Titel form</h1>
    <p className='dess'>Description {prope.dis} </p>
    <h3>{prope.list}</h3>
    {/* <h1>Titel form {prope.title} and Description {prope.dis}</h1>
    <h1>Titel form {prope.title} and Description {prope.dis}</h1> */}
  </div>
  )
}
export default React.memo(Titel)