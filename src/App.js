import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import Login from "./components/Login";

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
import Registration from "./components/Registration";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import CategoryBook from "./components/CategoryBook";

// import Focusinput from "./component/Focusinput";
// import LoginForm from "./component/LoginForm";
// import Navbar from "./component/Navbar";
// import RenderPropsCom from "./component/RenderPropsCom";

import About from "./pages/About";
// import Home from "./pages/Home";

function App() {
  //   const [sethome, setAbout] = React.useState("Home");

  // const xchang = () => {
  //   if (sethome === "Home") {
  //     setAbout("About");
  //   } else {
  //     setAbout("Home");
  //   }
  // };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Internet" element={<CategoryBook category="Internet"/>}/>
          <Route path="/Java" element={<CategoryBook category={"Java"} />} />
          <Route
            path="/PowerBuilder"
            element={<CategoryBook category={"PowerBuilder"} />}
          />
          <Route
            path="/Programming"
            element={<CategoryBook category={"Programming"} />}
          />
        </Routes>
      </BrowserRouter>

      {/* <Navbar/>  */}

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
export default App;
