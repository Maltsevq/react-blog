import React from "react";
import {Link} from 'react-route-dom'



const FullNews = () => {
    return(
    <div>
        <div class="col-1">
            <h1>Главные новости</h1>
                <div class="news-menu">
                    <div class="img-menu">
                    <Link to=''><img class="img-size1" src="images/google.jpg" alt=""/></Link>
                    </div>
                        <div class="text-menu">
                        <p><Link to=''>Google может разрешить пользователям ограничивать отслеживание в Chrome</Link></p>
                        </div>
                </div>
                <div class="news-menu">
                        <div class="img-menu">
                        <Link to=''><img class="img-size1" src="images/mnp.jpg" alt=""/></Link>
                        </div>
                            <div class="text-menu">
                            <p><Link to=''>Перенос номера: к какому оператору вы перейдете после запуска MNP? [опрос]</Link></p>
                            </div>
                </div>
                <div class="news-menu">
                        <div class="img-menu">
                        <Link to=''><img class="img-size1" src="images/airpods.jpg" alt=""/></Link>
                        </div>
                        <div class="text-menu">
                        <p><Link to=''>Спортивные AirPods: Apple представила беспроводные наушники Beats Powerbeats Pro</Link></p>
                        </div>
                </div>
                    
                
        </div>
    </div>

            
        )
    }

    
export default FullNews