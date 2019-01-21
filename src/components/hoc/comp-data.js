import React from 'react'
import PropTypes from 'prop-types'

export function DataHOC(Component) {
  return class WrapComponnet extends React.Component {
    propTypes = {
      data: PropTypes.object.isRequired
    }

    constructor(props) {
      super(props)
    }
    render() {
      console.log(this.props.data)
      return (
        <Component {...this.props}></Component>
      )
    }
  }
}