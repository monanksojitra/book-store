import React, { Component } from 'react'

class InputRef extends Component {
    constructor(props){
        super(props)
          this.chRef = React.createRef()
         
      }  
      inputfs(){
          this.chRef.current.focus()
          console.log("focus on")
      }
  render() {
    
    return (
      <div>
           <input type="text" ref={this.chRef}></input>
      </div>
    )
  }
}

export default InputRef
