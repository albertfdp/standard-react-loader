import React, { Component } from 'react'

class StandardComponent extends Component {

  static propTypes = {
    name: React.PropTypes.string
  }

  render () {
    const { name } = this.props

    return (
      <div>Hello {name}</div>
    )
  }

}

export default StandardComponent
