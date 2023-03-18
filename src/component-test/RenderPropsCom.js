import React, { Component } from 'react'

export default class RenderPropsCom extends Component {
  render() {
    return (
        this.props.render()
    )
  }
}
