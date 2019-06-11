import React from 'react';

import './fullpage.css';

import FullNews from './FullNews';
import RightNews from './RightNews';



const Fullpage = () => {
    return (
    <main className="main">
        
          <div className="col-10">
            <div className="row">
            <FullNews
            />
            </div>
          </div>
          <div className="col-4">
              <RightNews/>
          </div>
    </main>
    

    )
  }
  export default Fullpage
 