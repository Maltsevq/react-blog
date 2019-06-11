import React from "react";
import {Link} from 'react-router-dom'
import './fullpage.css'


const FullNews = () => {
    return(
	
            <div>
                <div className="row">
                <h1>Складной Samsung Galaxy Fold во всех деталях и со всех сторон на видео</h1>
	<p>Автор: username, 23 марта 2019, 22:41</p>
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
			<p>Напомним, сегодня у Galaxy Fold появился конкурент - <Link to='' style={{ textDecoration: 'none' }}>складной Mate X от Huawei.</Link></p>
		</div>
	<div className="text-window1">
	<h3>Источник: <Link to=''>Samsung</Link></h3>
	
    </div>
                  
                </div>
            </div>
           
        )
    }

    
export default FullNews
