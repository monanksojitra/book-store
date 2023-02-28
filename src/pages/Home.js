import React, { Component } from 'react'
import Titel from '../component/Titel';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {title: this.props.title,
                        dis: this.props.dis};
      }
  render() {
    return (
      <div>
        <h1>Home form Home.js</h1>
        <Titel title={this.state.title} dis ={this.state.dis}/>
      </div>
    )
  }
}
export default Home;