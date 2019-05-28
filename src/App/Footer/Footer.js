import React from 'react'


import './footer.css'
import SocialIcon from './Social-icon/Social-icon';
import Infopanel from './Infopanel/Infopanel';

const Footer = () => {
    return (
			
				<footer className="footer">
					<div className="row">
								<div className="col-8">
								<Infopanel/>
							</div>
							<div className="col-11">
								<p>© Copiright 2019</p>
								</div>
								<div className="col-11">
									<p>Соц. сети :</p>
									<SocialIcon/>
									</div>
					</div>
				</footer>
    )
  }

  export default Footer