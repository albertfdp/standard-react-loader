import React, { Component } from 'react'

class StandardComponent extends Component {

  render () {
    const { name } = this.props

    return (
      <div>Hello {name}</div>
    )
  }

}

export default StandardComponent
