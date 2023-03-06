import React, { useState } from 'react'

function LoginForm2() {
  
  const [login,setLogin]=  useState({
    Email:"none",
    Password:"none"
  })
const updateEmail = (value)=>{
  setLogin({Email:value})

}
const updatePassword =(value)=>{
  setLogin({Password:value})
}
  return (
<div className="form-container">
    <form>
      <label for="email">Email:</label>
      <input type="email" onChange={(e)=>{updateEmail(e.target.value)}} placeholder="Enter your email" required/>
      
      <label for="password">Password:</label>
      <input type="password" onChange={(e)=>{updatePassword(e.target.value)}}  placeholder="Enter your password" required/>
      
     <button onClick={()=>alert("this is your " + login.Email + "  and password  " + login.Password)}>Submit</button>
     
    </form>
  </div>
  )
}

export default LoginForm2
