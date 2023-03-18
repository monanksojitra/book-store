import React from "react";
// import LoginForm2 from "./component-test/LoginForm2"
// import CounterHook from "./component-test/CounterHook";
// import Post from "./component-test/Post";
// import UsersHook from "./component-test/UsersHook";
// import PostDetail from "./component-test/PostDetail";

// import Users from "./component-test/Users";
// import C1 from "./component-test/C1";
// import { Usercontext } from "./component-test/Context";
// import CounterReduces from "./component-test/CounterReduces";
// import Posst_useReducer from "./component-test/Post_useReducer";
// import RegisterUser from "./component-test/RegisterUser";
// import NewForm from "./component-test/NewForm";
// import UpdatedCounter_useReducer from "./component-test/UpdatedCounter_useReducer";
import Navbar from "./components/Navbar";

// import Focusinput from "./component/Focusinput";
// import LoginForm from "./component/LoginForm";
// import Navbar from "./component/Navbar";
// import RenderPropsCom from "./component/RenderPropsCom";

// import About from "./pages/About";
// import Home from "./pages/Home";

function App() {
//   const [sethome, setAbout] = React.useState("Home");
  const Contextmain = React.createContext("this is from app");


  // const xchang = () => {
  //   if (sethome === "Home") {
  //     setAbout("About");
  //   } else {
  //     setAbout("Home");
  //   }
  // };
  return (
    <>
    <Navbar/>
 
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
      {/* <Users/> */}
      {/* <Post/> */}
      {/* <CounterHook/> */}
      {/* <LoginForm2/> */}
      {/* <UsersHook/> */}
      {/* <PostDetail/> */}
      {/* <CounterReduces/> */}
      {/* <Posst_useReducer/> */}
      {/* <RegisterUser/> */}
      {/* <NewForm/> */}
      {/* <UpdatedCounter_useReducer/> */}
      {/* <C1/> */}
    </>
  );
}
export default App
