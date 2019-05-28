import React from 'react'

import './infopanel.css'



const Infopanel = () => {
    return(

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

    )
}
export default Infopanel