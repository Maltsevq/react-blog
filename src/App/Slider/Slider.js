
// import Apple from './apple.jpg'
// import Samsung from './Samsung-Main.jpg'
// import Huawei from './huawei.jpg'

import './slider.css'
import React from "react";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}
// //import Slick from './slick/slick.min.js'
// import './slider.css'
// import './slick/slick.css'
// import './slick/slick-theme.css'


// const Slider = () => {
//     return (
        
//         <div className="slider-block container slider">
//           <div><img src={Apple}/></div>
//           <div><img src={Samsung}/></div>
//           <div><img src={Huawei}/></div>
//         </div>
        
//      )
//     }
  export default Slider