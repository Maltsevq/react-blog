import React from 'react';

import './fullpage.css';

import FullNews from './FullNews';
import RightNews from './RightNews';
import news from '../News/news'

const Fullpage = (
<<<<<<< HEAD
 match,
) => {
console.log(match)
=======
 {match}
) => {
  console.log(match)
>>>>>>> 1717862778222c82ae6f84bc1c0622752bbefb27
    return (
      
    <main className="main">
        
          <div className="col-10">
            <div className="row">
            {
                        news.map(({
                        id,
<<<<<<< HEAD
                        fullnews,
                        
                            }) => (
                            <div key={id}>
                            <FullNews
                           
                            
                            fullnews={fullnews}
                            
=======
                        
                        fullnews,
                        author,
                            }) => (
                            <div key={id}>
                            <FullNews
                            
                            fullnews={fullnews}
                            author={author}
>>>>>>> 1717862778222c82ae6f84bc1c0622752bbefb27
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
 