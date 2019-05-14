import React from 'react'
//import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'

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
<div>
	<p>Соц. сети :</p>
	</div>
	<div className="social">
		<a href="https://www.facebook.com/" target="_blank"><input type="submit" name="Facebook" value="" class="facebook"/></a>
		<a href="https://www.instagram.com/" target="_blank"><input type="submit" name="Instagram" value="" class="instagram"/></a>
		<a href="https://twitter.com/" target="_blank"><input type="submit" name="Twitter" value="" class="twitter"/></a>
		<a href="https://telegram.org/" target="_blank"><input type="submit" name="Telegram" value="" class="telegram"/></a>
		<a href="https://www.viber.com/ru/" target="_blank"><input type="submit" name="Viber" value="" class="viber"/></a>
</div>
</div>
</div>
</footer>
    )
  }

  export default Footer