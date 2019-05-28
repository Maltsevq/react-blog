import React, { Component } from "react";
import PropTypes from 'prop-types';

import './news.css'

class NewsListWindow extends Component{
    

      static propTypes = {
          text: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          categorydevice: PropTypes.string.isRequired,
          categorybrand: PropTypes.string.isRequired,
         
      }
      render() {
          const {
              text,
              image,
              categorydevice,
              categorybrand,
           } = this.props

return (
          <div>
               <div className="col-6">
                    <div className="news-window">
                         <div className="img-window">
                         <a href=""><img className="img-size" src={image} alt=""/></a>
                         </div>
                              <div className="text-window">
                              <h2><a href="">{text}</a></h2>
                              </div>
                                   <div className="category-window">
                                   <a href="">{categorydevice} </a><a href="">{categorybrand}</a>
                                   </div>
                    </div>
               </div>
          </div>
       )
   }
}
export default NewsListWindow