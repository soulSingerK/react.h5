import React from 'react'
import PropTyps from 'prop-types'

import './index.scss'

class Activity extends React.Component {
  static propTyps = {
    data: PropTyps.object.isRequired
  }

  render() {
    const businessObj = this.props.data.business_obj
    const configMap = this.props.data.config_map
    const styleType = configMap.style_type
    const styles = {
      width: `${businessObj.content.goods_list.length * 106 + 35}px`
    }
    
    return (
      <div className="preview-wrap">
        <ul className='activity-wrap' style={styles}>
          {
            businessObj.content.goods_list.map((item, index) => (
              <li
                className='commodity-item'
                key={index}
              >
                <div className="link">
                  <div className="img">
                    <img src={item.pic_url || item.img_url} alt=""/>
                  </div>
                  { 
                    styleType === 'ACTIVITY001' ? 
                    (
                      <div className='commodity-wrap'>
                        <p className='title aqhg-oneline'>{item.title}</p>
                        <p className='sub-title'>{item.sub_title}</p>
                        <p className='price'>
                          {item.price}
                          <span className='price-origin'>￥{item.retail_price}</span>
                        </p>
                      </div>
                    )
                    :
                    (
                      <div className='commodity-wrap'>
                        <p className='brand-title aqhg-oneline'>{item.title}</p>
                        <p className='brand-sub-title'>{item.sub_title}</p>
                      </div>
                    )
                  }
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Activity