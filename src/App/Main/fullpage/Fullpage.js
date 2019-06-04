import React from 'react'

import './fullpage.css'
import Breadcrumbs from './Breadcrumbs/Breadcrumbs'


const Fullpage = () => {
    return (
    <main className="main">
        <div className="row">
          <div>
              <Breadcrumbs/>
          </div>
        </div>
          <div className="col-10">
            <div className="row">
              <FullNews/>
            </div>
          </div>
          <div className="col-4">
              <RightNews/>
          </div>
    </main>
    

    )
  }
  export default Fullpage