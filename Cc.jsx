import React, { Component } from 'react'

export default class Cc extends Component {
    state={
        name:"anandi",
        age:12
    }
  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <h2>{this.state.age}</h2>
      </div>
    )
  }
}
