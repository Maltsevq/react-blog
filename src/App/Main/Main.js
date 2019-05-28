import React from 'react'

import './main.css'

import Breadcrumbs from './Breadcrumbs/Breadcrumbs'
import Category from './Category/Category';
import NewsList from './News/NewsList'

const Main = () => {
    return (
    <main className="main">
        <div className="row">
          <div>
              <Breadcrumbs/>
          </div>
        </div>
          <div className="col-4">
              <Category/>
          </div>
          <div className="col-5">
            <div className="row">
              <NewsList/>
            </div>
          </div>
    </main>
    

    )
  }
  export default Main