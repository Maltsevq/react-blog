import React, {Component} from "react";
<<<<<<< HEAD

=======
import PropTypes from 'prop-types';
>>>>>>> 1717862778222c82ae6f84bc1c0622752bbefb27

import './fullpage.css'


class FullNews extends Component{
<<<<<<< HEAD
render() {
		const {
			
			fullnews='No news'
=======
    
	static propTypes = {
		fullnews: PropTypes.string.isRequired,

	}
	render() {
		const {

			fulln='No news'
>>>>>>> 1717862778222c82ae6f84bc1c0622752bbefb27
		 } = this.props

    return(
	
            <div>
<<<<<<< HEAD
				
           {fullnews}
=======
               {fulln}
>>>>>>> 1717862778222c82ae6f84bc1c0622752bbefb27
            </div>
           
        )
    }
}
    
export default FullNews
