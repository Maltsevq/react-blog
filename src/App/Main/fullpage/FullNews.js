import React, {Component} from "react";
import PropTypes from 'prop-types';

import './fullpage.css'


class FullNews extends Component{
    
	static propTypes = {
		fullnews: PropTypes.string.isRequired,

	}
	render() {
		const {

			fulln='No news'
		 } = this.props

    return(
	
            <div>
               {fulln}
            </div>
           
        )
    }
}
    
export default FullNews
