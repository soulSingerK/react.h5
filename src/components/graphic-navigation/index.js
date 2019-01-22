import React from 'react'
import PropTypes from 'prop-types'

import './index.scss'

class GraphicNavigation extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render() {
    console.log(this.props.data)
    const businessObj = this.props.data.business_obj
    const configMap = this.props.data.config_map
    return (
      <ul className='navigation-items'>
        {
          businessObj.content.map((item, index) => (
            <li className='navigation-item' key={index}>
              <a href="javascript: void 0" className='navigation-wrap'>
                <img src={item.img_url} alt=""/>
                <p className="navigation-title">{item.title}</p>
              </a>
            </li>
          ))
        }
      </ul>
    )
  }
}

export default GraphicNavigation