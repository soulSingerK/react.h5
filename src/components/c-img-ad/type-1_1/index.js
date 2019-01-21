import React from 'react'
import PropTypes from 'prop-types'

import './index.scss'

class Type11 extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }
  
  constructor(props) {
    super(props)
  }
  render() {
    const data = this.props.data
    const business_obj = data.business_obj
    const config_map = data.config_map
    const styles = {marginTop: config_map.interval, marginBottom: config_map.interval}
    return (
      <ul>
        {
          business_obj.content.map((item, index) => (
            <li className='ad-item'
              style={styles}
              key={index}
            >
              <a href="javascript:void 0" className='img-wrap'>
                <img src={item.img_url} alt=""/>
              </a>
            </li>
          ))
        }
      </ul>
    )
  }
}

export default Type11