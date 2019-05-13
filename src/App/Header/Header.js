import React from 'react'

import './header.css'

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
//import Cart from './Search/Search'

const Header = () => {
    return (
    <header className="header">
      <div className="container">
        <div className="row">
            <div className="col-3 logo">
              <Logo/>
               </div>
            {/* <div className="col-3">
              <Search/>
          </div>  */}
        </div>
      </div>
          <div>
            <nav class="row">
              <Menu/>
            </nav>
          </div>  
    </header>
)
    
}
    export default Header