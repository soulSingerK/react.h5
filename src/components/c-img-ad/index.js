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
    const data = this.props.data
    const styleType = data.config_map.style_type
    const type = this.useComponent(styleType)
    const Component = type && require(`./${type}/index`).default
    return (
      Component && <Component data={data}/>
    )
  }

  useComponent(styleType) {
    return (
      styleType === 0 ? 'swiper'
      : styleType === 1 ? 'type-1_1'
      : styleType === 2 ? 'type-1_2'
      : ''
    )
  }
}

export default CImgAd