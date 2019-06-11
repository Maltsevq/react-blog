import React, { Component } from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import './news.css'



class NewsListWindow extends Component{
    
      static propTypes = {
          text: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          categorydevice: PropTypes.string.isRequired,
          categorybrand: PropTypes.string.isRequired,
          author: PropTypes.string.isRequired
         
      }
      render() {
          const {
              text="No text...",
              image="images/no_photo.jpg",
              categorydevice="no device...",
              categorybrand="no brand...",
              author='No author',
              
           } = this.props

return (
     
          <div>
               <div className="col-6">
                    <div className="news-window">
                         <div className="img-window">
                            
                         <Link to='/Fullpage'><img className="img-size" src={image} alt="" target='_blank'/></Link>
                         </div>
                              <div className="text-window">
                              <h2><Link to=''>{text}</Link></h2>
                              </div>
                                   <div className="category-window">
                                   <Link to='/categoryPage'>{categorydevice} </Link><Link to=''>{categorybrand}</Link>
                                   </div>
                    </div>
               </div>
          </div>
         
       )
   }
}
export default NewsListWindow