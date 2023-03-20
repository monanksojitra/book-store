import React,{useEffect, useState} from 'react'
import AdsBook from '../components/AdsBook';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import ProductSearchbar from '../components/ProductSearchbar';



const Home = () => {
  const [books,setBooks] =useState([]);
  useEffect(()=>{
    console.log('this is ',books)
  },[books.length])
  return (
    <>
      <Navbar />
      <AdsBook />
      <ProductSearchbar filterbook={setBooks} />
      <Products newBooks={books}/>
    </>
  )
}

export default Home



// constructor(props) {
//   super(props);
//   this.state = {
//     title: this.props.title,
//     dis: this.props.dis
//   };
// }


// const userData = [
//   { id: 1, name: 'monank' },
//   { id: 2, name: 'raj' },
//   { id: 3, name: 'ashish' },
// ];
// const Users = HOC(UserList, userData);



{/* <h1>Home form Home.js</h1> 
        <h3>{this.state.title}</h3>
        <h3>{this.state.dis}</h3>
        <List/>
        <Counter/> */}
{/* <Users/> */ }

