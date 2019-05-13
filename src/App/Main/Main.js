import React from 'react'

import './main.css'

import Breadcrumbs from './Breadcrumbs/Breadcrumbs'
import Category from './Category/Category';
import News from './News/News'

const Main = () => {
    return (
    <main className="main">
        <div class="row">
          <div>
              <Breadcrumbs/>
          </div>
        </div>
          <div class="col-4">
              <Category/>
          </div>
          <div class="col-5">
            <div class="row">
              <News/>
            </div>
          </div>
    </main>
    

    )
  }
  export default Main