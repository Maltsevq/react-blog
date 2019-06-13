import React, {Component} from "react";

import './fullpage.css'


class FullNews extends Component{
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
