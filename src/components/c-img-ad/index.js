import React from 'react'
import PropTypes from 'prop-types'

import Swiper from './swiper/index'

class CImgAd extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    const data = this.props.data
    const styleType = data.config_map.style_type
    const content = data.business_obj.content
    return (
      styleType === 0 ? <Swiper data={content}/>
      : null
    )
  }
}

export default CImgAd