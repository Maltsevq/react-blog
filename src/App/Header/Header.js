import React from 'react'

import './header.css'

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Search from './Search/Search'

const Header = () => {
    return (
    <header className="header">
      <div className="container">
        <div className="row">
            <div className="col-3">
              <Search/>
              <Logo/>
            </div> 
        </div>
      </div>
          <div>
            <nav className="row">
              <Menu/>
            </nav>
          </div>  
    </header>
)
    
}
    export default Header