import React from "react";
import Users from "./component/Users";
// import C1 from "./component/C1";
// import { Usercontext } from "./component/Context";

// import Focusinput from "./component/Focusinput";
// import LoginForm from "./component/LoginForm";
// import Navbar from "./component/Navbar";
// import RenderPropsCom from "./component/RenderPropsCom";

// import About from "./pages/About";
// import Home from "./pages/Home";

function App() {
//   const [sethome, setAbout] = React.useState("Home");
//   const Contextmain = React.createContext("this is from app");


  // const xchang = () => {
  //   if (sethome === "Home") {
  //     setAbout("About");
  //   } else {
  //     setAbout("Home");
  //   }
  // };
  return (
    <>
      <Users/>
 
      {/* <Navbar/>
      {sethome === "Home" ? <Home/> : <About/>}
      <h3>Click for changing page</h3>
      <button onClick={xchang}>Click</button>
      <LoginForm/> */}
      {/* <Focusinput/> */}
      {/* <Home/>
      <RenderPropsCom render={()=>{
        return(
          <h3>I am coming form render propes</h3>
        )
      }}/> */}
      {/* <Usercontext.Provider value="this from app"><C1/></Usercontext.Provider> */}

    </>
  );
}
export default App
