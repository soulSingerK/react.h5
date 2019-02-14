import React from 'react'
import PropTypes from 'prop-types'

import './index.scss'

class Cube extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }
  
  render() {
    const calcCubes = this.calcCubes()
    const calcCubesSize = this.calcCubesSize()

    return (
      <div className = 'cube-wrap'>
        <div
          className='cube-img-wrap'
          style = { calcCubesSize }
        >
          {
            calcCubes.map((cube, index) => {
              const styles = {
                height: cube.height,
                width: cube.width,
                top: cube.top,
                left: cube.left,
                margin: cube.margin
              }
              console.log(styles)
              return (
                <div
                  className = 'cube-img'
                  key = { index }
                  style={ styles }
                >
                  {cube.img_url && <img src={ cube.img_url } alt=""/>}
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

  calcCubes() {
    const data = this.props.data
    const size = this.size()
    if (!data.business_obj.content.length) return
    return data.business_obj.content.map(item => {
      return {
        width: `${(item.width * size - data.config_map.img_space * 2) / 2}px`,
        height: `${(item.height * size - data.config_map.img_space * 2) / 2}px`,
        top: `${item.top * size / 2}px`,
        margin: `${data.config_map.img_space / 2}px`,
        left: `${item.left * size / 2}px`,
        img_url: item.img_url,
        content: item.content,
        type: item.type
      }
    })
  }
  size() {
    const data = this.props.data
    if (!data.config_map.container) return
    return (750 + parseInt(data.config_map.img_space * 2)) / data.config_map.container.col
  }
  calcCubesSize() {
    const data = this.props.data
    const size = this.size()
    const height = this.height()

    if (!data.business_obj.content.length) return
    return {
      height: `${height * size / 2}px`,
      width: `${data.config_map.container.col * size / 2}px`,
      margin: `-${data.config_map.img_space / 2}px`
    }
  }
  height() {
    const data = this.props.data
    if (!data.business_obj.content.length) return
    return Math.max.apply(null, data.business_obj.content.map(item => {
      return (item.top + item.height) / 2
    }))
  }
}

export default Cube