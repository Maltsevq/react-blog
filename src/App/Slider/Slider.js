import React from 'react'
import Apple from './apple.jpg'
import Samsung from './Samsung-Main.jpg'
import Huawei from './huawei.jpg'

//import Slick from './slick/slick.min.js'
import './slider.css'
import './slick/slick.css'
import './slick/slick-theme.css'


const Slider = () => {
    return (
        
        <div className="slider-block container slider">
          <div><img src={Apple}/></div>
          <div><img src={Samsung}/></div>
          <div><img src={Huawei}/></div>
        </div>
        
     )
    }
  export default Slider