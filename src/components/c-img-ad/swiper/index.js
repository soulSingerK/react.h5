import React from 'react'
import PropTypes from 'prop-types'

import swiper from 'swiper'
import './index.scss'

const swiperConfig = {
  speed: 400,
  autoplay: true,
  loop: true
}

class Swiper extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.cmsSwiper = new swiper('.swiper-container', swiperConfig)
  }

  render() {
    const data = this.props.data
    return (
      <div className='swiper-container'>
        <div className='swiper-wrapper' style={{width: (data.length + 2) * 375}}>
          { data.map((item, index) => (
            <div className='swiper-slide' key={index}>
              <a href="javascript: void 0">
                <img src={item.img_url} className='swiper-img'/>
              </a>
            </div>
          )) }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
}

export default Swiper