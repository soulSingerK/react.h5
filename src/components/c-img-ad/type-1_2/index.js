import React from 'react'
import PropTypes from 'prop-types'

import './index.scss'

class Type12 extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }
  render() {
    const data = this.props.data
    const businessObj = data.business_obj
    const config_map = data.config_map
    const styles = {marginTop: config_map.interval, marginBottom: config_map.interval}
    
    return (
      <div>
        { businessObj.content.map((item, index) => (
          <a
            href="javascipt: void 0"
            key={index}
            className="img-item"
            style={styles}
          >
            <img src={item.img_url} alt=''/>
          </a>
        )) }
      </div>
    )
  }
}

export default Type12