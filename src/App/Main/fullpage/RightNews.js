import React from "react";
import {Link} from 'react-router-dom'



const FullNews = () => {
    return(
    <div>
        <div className="col-1">
            <h1>Главные новости</h1>
                <div className="news-menu">
                    <div className="img-menu">
                    <Link to=''><img className="img-size1" src="images/google.jpg" alt=""/></Link>
                    </div>
                        <div className="text-menu">
                        <p><Link to=''>Google может разрешить пользователям ограничивать отслеживание в Chrome</Link></p>
                        </div>
                </div>
                <div className="news-menu">
                        <div className="img-menu">
                        <Link to=''><img className="img-size1" src="images/mnp.jpg" alt=""/></Link>
                        </div>
                            <div className="text-menu">
                            <p><Link to=''>Перенос номера: к какому оператору вы перейдете после запуска MNP? [опрос]</Link></p>
                            </div>
                </div>
                <div className="news-menu">
                        <div className="img-menu">
                        <Link to=''><img className="img-size1" src="images/airpods.jpg" alt=""/></Link>
                        </div>
                        <div className="text-menu">
                        <p><Link to=''>Спортивные AirPods: Apple представила беспроводные наушники Beats Powerbeats Pro</Link></p>
                        </div>
                </div>
                    
                
        </div>
    </div>

            
        )
    }

    
export default FullNews