import React from 'react'
import {Link} from 'react-router-dom'
import './social-icon.css'



const SocialIcon = () => {
    return (
      
	<div className="social">
		<Link to="https://www.facebook.com/" target="_blank"><input type="submit" name="Facebook" value="" className="facebook"/></Link>
		<Link to="https://www.instagram.com/" target="_blank"><input type="submit" name="Instagram" value="" className="instagram"/></Link>
		<Link to="https://twitter.com/" target="_blank"><input type="submit" name="Twitter" value="" className="twitter"/></Link>
		<Link to="https://telegram.org/" target="_blank"><input type="submit" name="Telegram" value="" className="telegram"/></Link>
		<Link to="https://www.viber.com/ru/" target="_blank"><input type="submit" name="Viber" value="" className="viber"/></Link>
</div>

    )
  }
  export default SocialIcon