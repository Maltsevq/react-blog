import React from 'react';

import './fullpage.css';


import RightNews from './RightNews';
import news from '../News/news'

const Fullpage = ({match}) => {

    return (
      
    <main className="main">
        
          <div className="col-10">
            <div className="row">
             <div >
             {news[match.params.productid -1 ].fullnews}
              </div>
                            
                    
            </div>
          </div>
          <div className="col-4">
              <RightNews/>
          </div>
    </main>
    
   
    
    )
  }
  export default Fullpage
 