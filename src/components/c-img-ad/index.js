import React from 'react'
import PropTypes from 'prop-types'

class CImgAd extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <p>轮播图</p>
    )
  }
}

export default CImgAd