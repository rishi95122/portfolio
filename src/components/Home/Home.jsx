import React from 'react'
import Navbar from '../navbar/Navbar'
import './Home.css'
import About from '../About/About'
import Footer from '../footer/Footer'
import Mainpage from '../Main/Mainpage'
import Portfolio from '../portfolio/Portfolio'
import { Route, Routes } from 'react-router-dom'
const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Routes>
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/' element={<Mainpage />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
       {/* <Mainpage /> */}
       {/* <Portfolio /> */}
        <Footer />
    </div>
  )
}

export default Home