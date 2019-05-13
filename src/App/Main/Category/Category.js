import React from 'react'



import './category.css'


const Category = () => {
    return (
<div class="category">
            <div><h1>Категории</h1>
            <p><a href="">Мобильные телефоны</a></p>
            <p><a href="">Планшеты</a></p>
            <p><a href="">Ноутбуки</a></p>
            <p><a href="">Умные часы</a></p>
            <p><a href="">Цифровые фотоаппараты</a></p>
        </div>
            <div>
            <h1>Темы</h1>
            <p><a href="">Игры</a></p>
            <p><a href="">Что купить?</a></p>
            <p><a href="">Умный дом</a></p>
            <p><a href="">IFA</a></p>
            <p><a href="">Как это работает</a></p>
        </div>

        <div>
            <h1>Производители</h1>
            <p><a href="">LG</a></p>
            <p><a href="">Apple</a></p>
            <p><a href="">Samsung</a></p>
            <p><a href="">Meizu</a></p>
            <p><a href="">Xiaomi</a></p>
        </div>
        </div>
    )
}

export default Category