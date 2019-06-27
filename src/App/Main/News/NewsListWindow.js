import React, { Component } from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './news.css';
import {connect} from 'react-redux'



class NewsListWindow extends Component{
    
      static propTypes = {
          text: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          categorydevice: PropTypes.string.isRequired,
          categorybrand: PropTypes.string.isRequired,
          
         
      }
      changeLikeState = () => {
          if(this.props.isLiked){
              this.props.removeLike(this.props.id)

          }else{
              this.props.addLike(this.props.id)
          }

      }

      render() {
          const {
               id,
              text="No text...",
              image="images/no_photo.jpg",
              categorydevice="no device...",
              categorybrand="no brand...",
              isLiked= false,
           } = this.props

return (
     
          <div>
               
               <div className="col-6">
               <button className="button" onClick={()=>this.changeLikeState()}>{isLiked ? <span className="heartlike"></span> : <span className="heartunlike"></span>}</button>
                    <div className="news-window">
                         <div className="img-window">
                              
                         <Link to={`/news/${id}`}><img className="img-size" src={image} alt="" target='_blank'/></Link>
                         </div>
                              <div className="text-window">
                              <h2><Link to={`/news/${id}`}>{text}</Link></h2>
                              </div>
                                   <div className="category-window">
                                   <Link to=''>{categorydevice} </Link><Link to=''>{categorybrand}</Link>
                                   </div>
                    </div>
               </div>
               
          </div>
         
       )
   }
}

const mapStateToProps = (state,props)=>({
     isLiked:state[props.id]
 })
 const mapDispatchToProps = (dispatch) =>({

     addLike: (id) => dispatch({
         type: 'LIKE',
         id:id,
     }) ,
     removeLike: (id) => dispatch({
         type: 'DISLIKE',
         id:id,
     })


})


export default connect(mapStateToProps,mapDispatchToProps)(NewsListWindow)