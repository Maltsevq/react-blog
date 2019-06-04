import React from 'react'
import {Link} from 'react-router-dom'
import './menu.css'

const Menu = () => {
    return ( 
      <ul className="menu container">
          <li><Link to=''>Форум</Link></li>
          <li><Link to=''>Игры</Link></li>
          <li><Link to=''>Программы</Link></li>
          <li><Link to=''>Обзоры</Link></li>
          <li><Link to=''>Статьи</Link></li>
          <li><Link to=''>Новости</Link></li>
    </ul>
       )
    
    }
    export default Menu