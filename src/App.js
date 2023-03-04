import React from 'react'
import Focusinput from './component/Focusinput'
import LoginForm from './component/LoginForm'
import Navbar from './component/Navbar'
import About from './pages/About'
import Home from './pages/Home'

export default function App() {

  const [sethome,setAbout] = React.useState("Home")

  const xchang = ()=>{
    if (sethome === "Home") {

      setAbout("About")
      
    }
    else{
      setAbout("Home")
    }
  }
  return (
    <div>
      {/* <Navbar/>
      {sethome === "Home" ? <Home/> : <About/>}
      <h3>Click for changing page</h3>
      <button onClick={xchang}>Click</button>
      <LoginForm/> */}
      <Focusinput/>
    </div>
  )
}
