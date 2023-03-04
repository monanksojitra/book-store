import React, { Component } from 'react'

export default class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }

  }
  shouldComponentUpdate(_nextProps) {
    if (_nextProps.value === this.props.value) {
     
      return true;
    }
    else {
      
      return false;
    }
  }


  render() {
    return (
      <div>
        <p> This is counter : {this.state.count}</p>
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1
          })
        }}>+1</button>
      </div>
    )
  }
}
