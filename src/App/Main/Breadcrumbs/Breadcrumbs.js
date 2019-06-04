import React from 'react'
import {Link} from 'react-router-dom'


import './breadcrumbs.css'


const Breadcrumbs = () => {
    return (
<div className="breadcrumbs">
			<Link to=''>Home page</Link> /
			<Link to=''> Статьи</Link> /
			<Link to=''> Обзоры </Link>
</div>
    )
}

export default Breadcrumbs