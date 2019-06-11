import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import './fullpage.css'


class FullNews extends Component{
    
	static propTypes = {
		fullnews: PropTypes.string.isRequired,
	
		
	   
	}
	render() {
		const {
			
			
			fullnews='No news'
		 } = this.props

    return(
	
            <div>
               {fullnews}
            </div>
           
        )
    }
}
    
export default FullNews
