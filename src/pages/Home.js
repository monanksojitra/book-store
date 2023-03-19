import React, { Component } from 'react'
import List from '../component-test/List';
// import Titel from '../component/Titel';
import Counter from '../component-test/Counter'
import UserList from '../component-test/UserList';
import HOC from '../component-test/HOC';
import Navbar from '../components/Navbar';



class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title: this.props.title,
  //     dis: this.props.dis
  //   };
  // }

  render() {
    // const userData = [
    //   { id: 1, name: 'monank' },
    //   { id: 2, name: 'raj' },
    //   { id: 3, name: 'ashish' },
    // ];
    // const Users = HOC(UserList, userData);
    return (
      <>
      <Navbar/>
        {/* <h1>Home form Home.js</h1> 
        <h3>{this.state.title}</h3>
        <h3>{this.state.dis}</h3>
        <List/>
        <Counter/> */}
        {/* <Users/> */}
      </>
    )
  }
}
export default Home;