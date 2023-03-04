import React, { Children, Component } from 'react'
import InputRef from './InputRef'

class Focusinput extends Component {
  constructor(props) {
    super(props)
    this.btnRef = React.createRef()
  }

render() {
  return (
    <div>
      <InputRef ref={this.btnRef} />
      {/* <input type="text" ref={this.btnRef}></input> */}
      <button onClick={() =>{this.btnRef.current.inputfs()}}>click me</button>
    </div>
  )
  }

}
export default Focusinput
