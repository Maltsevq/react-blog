import React from 'react'


import './footer.css'

const Footer = () => {
    return (
      <footer className="footer">
	<div className="row">
	
		<div className="footext">
		<div className="col-7">
		<p><a href="">О проекте</a></p>
		<p><a href="">Обратная связь</a></p>
		<p><a href="">Вакансии</a></p>
	</div>
		<div className="col-7">
		<p><a href="">Условия предоставления информации</a></p>
		<p><a href="">Отказ от ответственности</a></p>
		<p><a href="">Сотрудничество</a></p>
	</div>
		<div className="col-7">
		<p><a href="">Размещение рекламы</a></p>
		<p><a href="">Для правообладателей</a></p>
	</div>
</div>
<div className="col-8">
	<p>© Copiright 2019</p>
</div>
<div className="col-8">
	<p>Соц. сети :</p>
<div className="icon-cont">
  <ul className="social-icon">
    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
  </ul>
</div>
</div>
</div>
</footer>
    )
  }

  export default Footer