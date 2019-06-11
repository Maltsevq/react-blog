import React from 'react'
import {Link} from 'react-router-dom'


import './category.css'




const Category = () => {
    return (
<div className="category">
            <div><h1>Категории</h1>
            <p><Link to=''>Мобильные телефоны</Link></p>
            <p><Link to=''>Планшеты</Link></p>
            <p><Link to=''>Ноутбуки</Link></p>
            <p><Link to=''>Умные часы</Link></p>
            <p><Link to=''>Цифровые фотоаппараты</Link></p>
        </div>
            <div>
            <h1>Темы</h1>
            <p><Link to=''>Игры</Link></p>
            <p><Link to=''>Что купить?</Link></p>
            <p><Link to=''>Умный дом</Link></p>
            <p><Link to=''>IFA</Link></p>
            <p><Link to=''>Как это работает</Link></p>
        </div>

        <div>
            <h1>Производители</h1>
            <p><Link to=''>LG</Link></p>
            <p><Link to=''>Apple</Link></p>
            <p><Link to=''>Samsung</Link></p>
            <p><Link to=''>Meizu</Link></p>
            <p><Link to=''>Xiaomi</Link></p>
        </div>
        </div>
    )
}

export default Category