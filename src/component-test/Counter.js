import React, { PureComponent } from 'react'

export default class Counter extends PureComponent {
  constructor() {
    super()
    this.state = {
      count: 0
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
