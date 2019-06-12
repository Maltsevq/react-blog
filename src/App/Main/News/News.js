import React from "react";

import {Link} from 'react-router-dom'


const news = [
    {
        id: 1,
        text: 'Xiaomi готовит флагман с кодовым названием «Геркулес», тройной камерой, NFC и беспроводной зарядкой',
        image: "/images/news/mi.png",
        categorydevice: "Мобильные телефоны,",
        categorybrand: "Хiaomi",
        fullpage: '/Fullpage',
        author:'username, 23 марта 2019, 22:41',
        fullnews: <div className="row">
        <h1>Складной Samsung Galaxy Fold во всех деталях и со всех сторон на видео</h1>
<p></p>
<div className="img-window1">

<Link to=''><img className="img-size2" src="../../images/news/fold1.jpg" alt=""/></Link>
</div>
    <div className="text-window1">
        <p>На недавней презентации Galaxy Unpacked 2019 компания Samsung представила свой первый складной смартфон Galaxy Fold. Правда, журналистам «пощупать» и протестировать его не дали (возможно, приберегли для выставки MWC), зато Samsung выпустила ролик, на котором смартфон показан со всех сторон и ракурсов.</p>

        <h2>Что показали</h2>
        <p>На видео Galaxy Fold позирует и в сложенном состоянии, и в работе, в том числе и в качестве зарядки для наушников Galaxy Buds и смарт-часов Galaxy Active. Сразу видно, что это устройство высшего класса: о его премиальности говорят и материалы, из которых сделан гаджет, и дизайн (который для нас пока еще в диковинку), и какой-то особенный «лоск».

        Также Samsung показала все четыре цвета смартфона: серебристый, чёрный, зелёно-золотой и синий.</p>
    </div>
        <div className="img-window1">
        <Link to=''><img className="img-size2" src="../../images/news/fold2.gif" alt=""/></Link>
        </div>
        <div className="img-window1">
        <Link to=''><img className="img-size2" src="../../images/news/fold3.gif" alt=""/></Link>
        </div>
        <div className="img-window1">
        <Link to=''><img className="img-size2" src="../../images/news/fold4.gif" alt=""/></Link>
        </div>
<div className="text-window1">
    <p>Напомним, Galaxy Fold получил гибкий 7.3-дюймовый дисплей Infinity Flex Display (2152×1536 пикселей), второй 4.6-дюймовый экран (1960×840 точек) на внешней стороне, 12 ГБ оперативной памяти, 512 ГБ встроенной, 6 камер и два аккумулятора ёмкостью 4380 мАч. Цена будет соответствовать высокой планке складного гаджета — 1980 долларов США.</p>
    <p>Напомним, сегодня у Galaxy Fold появился конкурент - <Link to=''>складной Mate X от Huawei.</Link></p>
</div>
<div className="text-window1">
<h3>Источник: <Link to=''>Samsung</Link></h3>

</div>
          
        </div>,
    },
    {
        id: 2,
        text: 'Samsung Galaxy Tab S5e в Украине: тонкий планшет с чипом Snapdragon 670 и ценником от 16 000 грн',
        image: "/images/news/tabs5.jpg",
        categorydevice: "Планшеты,",
        categorybrand: "Samsung", 
        author:'username, 23 марта 2019, 22:41',
        fullnews: '<div className="row"></div>'
    },
    {
        id: 3,
        text: 'Qualcomm Snapdragon 865 выйдет в двух версиях: со встроенным 5G-модемом и без него',
        image: "/images/news/snapdragon.jpg",
        categorydevice: "",
        categorybrand: "Qualcomm Snapdragon",
        author:'username, 23 марта 2019, 22:41',
        fullnews: '<div className="row"></div>'
    },
    {
        id: 4,
        text: 'Обзор ASUS ZenBook 13 UX333FN: мобильность и производительность',
        image: "/images/news/asuszen13.jpg",
        categorydevice: "Ноутбуки,",
        categorybrand: "Asus",
        author:'username, 23 марта 2019, 22:41',
        fullnews: '<div className="row"></div>'
    },
    {
        id: 5,
        text: 'Обзор Acer Swift 7 (2018): ультрабук толщиной со смартфон',
        image: "/images/news/acer.jpg",
        categorydevice: "Ноутбуки,",
        categorybrand: "Acer",
        author:'username, 23 марта 2019, 22:41',
        fullnews: '<div className="row"></div>'
    },
    {
        id: 6,
        text: 'Обзор ASUS ZenBook 14 UX433FN: универсальный ультрабук на все случаи жизни',
        image: "/images/news/asuszen14.jpg",
        categorydevice: "Ноутбуки,",
        categorybrand: "Asus",
        author:'username, 23 марта 2019, 22:41',
        fullnews: '<div className="row"></div>'
    },
    {
        id: 7,
        text: 'Обзор Huawei P30 Pro: прибор ночного видения',
        image: "/images/news/huaweip30.jpg",
        categorydevice: "Мобильные телефоны,",
        categorybrand: "Huawei",
        author:'username, 23 марта 2019, 22:41',
        fullnews: '<div className="row"></div>'
    },
    {
        id: 8,
        text: 'Обзор Samsung Galaxy S10: универсальный флагман «Всё в одном»',
        image: "/images/news/galaxys10.jpg",
        categorydevice: "Мобильные телефоны,",
        categorybrand: "Samsung",
        author:'username, 23 марта 2019, 22:41',
        fullnews: '<div className="row"></div>'
    },
    {
        id: 9,
        text: 'Обзор смартфона Redmi Note 7: лучшая камера и дисплей за скромные деньги',
        image: "/images/news/redmi7.jpg",
        categorydevice: "Мобильные телефоны,",
        categorybrand: "Redmi",
        author:'username, 23 марта 2019, 22:41',
        fullnews: '<div className="row"></div>'
    },
]

export default news