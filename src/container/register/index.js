import React from 'react'
import { connect } from 'react-redux'

@connect(
  state => state.shop,
  null
)
class Register extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        Register
      </div>
    )
  }
}

export default Register