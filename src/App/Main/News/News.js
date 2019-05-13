import React from 'react'
import mi from './mi.png'
import tabs5 from './tabs5.jpg'
import snapdragon from './snapdragon.jpg'
import asuszen13 from './asuszen13.jpg'
import asuszen14 from './asuszen14.jpg'
import acer from './acer.jpg'
import galaxys10 from './galaxys10.jpg'
import huaweip30 from './huaweip30.jpg'
import redmi7 from './redmi7.jpg'



import './news.css'



const News = () => {
return (
<div>
<div class="col-6">
<div class="news-window">
	<div class="img-window">
     <img class="img-size" src={mi} alt=""></img>
     </div>
<div class="text-window">
	<h2><a href="">Xiaomi готовит флагман с кодовым названием «Геркулес», тройной камерой, NFC и беспроводной зарядкой</a></h2>
</div>
<div class="category-window"><a href="">Мобильные телефоны, </a><a href="">Хiaomi</a></div>
</div>
</div>

<div class="col-6">
<div class="news-window">
	<div class="img-window">
     <img class="img-size" src={tabs5} alt=""></img>
     </div>
<div class="text-window">
	<h2><a href="">Samsung Galaxy Tab S5e в Украине: тонкий планшет с чипом Snapdragon 670 и ценником от 16 000 грн</a></h2>
</div>
<div class="category-window"><a href="">Планшеты, </a><a href="">Samsung</a></div>
</div>
</div>

<div class="col-6">
<div class="news-window">
	<div class="img-window">
     <img class="img-size" src={snapdragon} alt=""></img>
     </div>
<div class="text-window">
	<h2><a href="">Qualcomm Snapdragon 865 выйдет в двух версиях: со встроенным 5G-модемом и без него</a></h2>
</div>
<div class="category-window"><a href="">Qualcomm Snapdragon</a></div>
</div>
</div>

<div class="col-6">
<div class="news-window">
	<div class="img-window">
     <img class="img-size" src={asuszen13} alt=""></img>
     </div>
<div class="text-window">
	<h2><a href="">Обзор ASUS ZenBook 13 UX333FN: мобильность и производительность</a></h2>
</div>
<div class="category-window"><a href="">Ноутбуки, </a><a href="">Asus</a></div>
</div>
</div>

<div class="col-6">
<div class="news-window">
	<div class="img-window">
     <img class="img-size" src={acer} alt=""></img>
     </div>
<div class="text-window">
	<h2><a href="">Обзор Acer Swift 7 (2018): ультрабук толщиной со смартфон</a></h2>
</div>
<div class="category-window"><a href="">Ноутбуки, </a><a href="">Acer</a></div>
</div>
</div>

<div class="col-6">
<div class="news-window">
	<div class="img-window">
     <img class="img-size" src={asuszen14} alt=""></img>
     </div>
<div class="text-window">
	<h2><a href="">Обзор ASUS ZenBook 14 UX433FN: универсальный ультрабук на все случаи жизни</a></h2>
</div>
<div class="category-window"><a href="">Ноутбуки, </a><a href="">Asus</a></div>
</div>
</div>

<div class="col-6">
<div class="news-window">
	<div class="img-window">
     <img class="img-size" src={huaweip30} alt=""></img>
     </div>
<div class="text-window">
	<h2><a href="">Обзор Huawei P30 Pro: прибор ночного видения</a></h2>
</div>
<div class="category-window"><a href="">Мобильные телефоны, </a><a href="">Huawei</a></div>
</div>
</div>

<div class="col-6">
<div class="news-window">
	<div class="img-window">
     <img class="img-size" src={galaxys10} alt=""></img>
     </div>
<div class="text-window">
	<h2><a href="">Обзор Samsung Galaxy S10: универсальный флагман «Всё в одном»</a></h2>
</div>
<div class="category-window"><a href="">Мобильные телефоны, </a><a href="">Samsung</a></div>
</div>
</div>

<div class="col-6">
    <div class="news-window">
        <div class="img-window">
            <img class="img-size" src={redmi7} alt=""></img>
            </div>
                <div class="text-window">
                <h2><a href="">Обзор смартфона Redmi Note 7: лучшая камера и дисплей за скромные деньги</a></h2>
                </div>
            <div class="category-window"><a href="">Мобильные телефоны, </a><a href="">Redmi</a>
        </div>
    </div>
</div>





</div>
)
}

export default News