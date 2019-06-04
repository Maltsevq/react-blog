import React from 'react'
import {Link} from 'react-router-dom'
import './infopanel.css'



const Infopanel = () => {
    return(

<div className="footext">
		<div className="col-7">
		<p><Link to=''>О проекте</Link></p>
		<p><Link to=''>Обратная связь</Link></p>
		<p><Link to=''>Вакансии</Link></p>
	</div>
		<div className="col-7">
		<p><Link to=''>Условия предоставления информации</Link></p>
		<p><Link to=''>Отказ от ответственности</Link></p>
		<p><Link to=''>Сотрудничество</Link></p>
	</div>
		<div className="col-7">
		<p><Link to=''>Размещение рекламы</Link></p>
		<p><Link to=''>Для правообладателей</Link></p>
	</div>
</div>

    )
}
export default Infopanel