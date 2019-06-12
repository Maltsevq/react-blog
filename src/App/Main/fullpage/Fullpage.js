import React from 'react';

import './fullpage.css';

import FullNews from './FullNews';
import RightNews from './RightNews';
import news from '../News/news'

const Fullpage = (
 {match}
) => {
  console.log(match)
    return (
      
    <main className="main">
        
          <div className="col-10">
            <div className="row">
            {
                        news.map(({
                        id,
                        
                        fullnews,
                        author,
                            }) => (
                            <div key={id}>
                            <FullNews
                            
                            fullnews={fullnews}
                            author={author}
                            />
                            
                            </div>
                            
                        ))
                    }
            </div>
          </div>
          <div className="col-4">
              <RightNews/>
          </div>
    </main>
    

    )
  }
  export default Fullpage
 