import React from 'react'
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
      <h3>Click for changing page</h3>
      <button onClick={xchang}>Click</button>
      {sethome === "Home" ? <Home/> : <About/>}
    </div>
  )
}
