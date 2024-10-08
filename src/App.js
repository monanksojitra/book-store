import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";

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
import Registration from "./components/Registration";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import CategoryBook from "./components/CategoryBook";
import Login from "./components/Login";

// import Focusinput from "./component/Focusinput";
// import LoginForm from "./component/LoginForm";
// import Navbar from "./component/Navbar";
// import RenderPropsCom from "./component/RenderPropsCom";

import About from "./pages/About";
import ReadMore from "./components/ReadMore";
import { GlobalProvider } from "./components/GlobalProvider";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";

const App = () => {
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
      <GlobalProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/book-store" exact element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/Login" element={<Login />} />

            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/Register" element={<Registration />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/readmore" element={<ReadMore />} />
            <Route
              path="/Internet"
              element={<CategoryBook category="Internet" />}
            />
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
          <Footer />
        </BrowserRouter>
      </GlobalProvider>

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
};

export default App;
