import React from 'react'

import '../common/style/reset.css'
import '../common/style/base.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Slider from './Slider/Slider'

const App = () => {
  return (
  <div>
    <Header/>
    <Main/>
    <Footer/>
    {/* <Slider/> */}
  </div>
   )
  }
export default App