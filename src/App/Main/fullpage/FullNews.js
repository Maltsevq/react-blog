import React, {Component} from "react";

import './fullpage.css'


class FullNews extends Component{
render() {
	

    return(
	
        <div className="row">
        <h1>Игровой смартфон Asus ROG Phone 2 представят 23 июля</h1>
<p>Автор: Мирослав Тринько, вчера, 07:21</p>

<div className="img-window1">

<Link to=''><img className="img-size2" src="../../images/news/asusrog.jpg" alt=""/></Link>
</div>
    <div className="text-window1">
        <p>Компания Asus объявила официальную дату анонса своего следующего игрового смартфона.</p>

        <h2>Что известно</h2>
        <p> ROG Phone 2 представят уже в следующей месяце. Презентация пройдёт 23 июля в городе Пекин, Китай. 
            Как сообщает тайваньское издание Digitimes, новинка выйдет в двух версиях. За самую дешёвую придётся отдать около 640 долларов США. 
            Перед тем как начнутся продажи устройства, Asus планирует раздать смартфон киберспортсменам на выставке ChinaJoy 2019 в Шанхае.
        </p>
        <p> Напомним, Asus ROG Phone 2 разрабатывается совместно и компанией Tencent Games, которая занимается оптимизацией устройства под игры. 
            Смартфону приписывают флагманский 7-нанометровый процессор Qualcomm Snapdragon 855,
            8/12 ГБ оперативной памяти и дисплей с частотой обновления кадров 120 Гц, как у Razer Phone.
        </p>
    </div>
<div className="text-window1">
<h3>Источник: <Link to='https://www.digitimes.com.tw/tech/dt/n/shwnws.asp?CnlID=1&dtag=ptt_news&cat=70&id=0000562158_DUT02D9G6QX9Q87TQ4VMA'>Digitimes</Link></h3>

</div>
          
        </div>
           
        )
    }
}
    
export default FullNews
