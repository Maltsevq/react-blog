import React from 'react'
import {Route} from 'react-router-dom'
import './main.css'
import Fullpage from './Fullpage/Fullpage'
import Breadcrumbs from './Breadcrumbs/Breadcrumbs'
import Category from './Category/Category';
import NewsList from './News/NewsList'
import categoryPage from './News/categoryPage';

const Main = () => {
    return (
      <div className="row">
    <main className="main">
        <div className="row">
          <div>
              <Breadcrumbs/>
          </div>
        
          <div className="col-4">
            <div className="row">
              <Route exact path='/' component={Category}/>
          </div>
          </div>
          <div className="col-5">
            <div className="row">
              <Route exact path='/' component={NewsList}/>
              <Route exact path={'/news/:productid'} component={Fullpage}/>
              <Route exact path='/categoryPage' component={categoryPage}/>
            </div>
          </div>
          </div>
    </main>
    </div>
    

    )
  }
  export default Main