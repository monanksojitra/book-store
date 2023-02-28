import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super()
        this.state={
            count : 0
        }

    }
    updatecount(){
        this.setState({
            count: this.state.count + 1
        })
    }

  render() {
    return (
      <div>
        <p> This is counter : {this.state.count}</p>
        <button onClick={()=>this.updatecount()}>+1</button>
      </div>
    )
  }
}
