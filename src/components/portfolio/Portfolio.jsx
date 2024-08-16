import React from 'react'
import './Portfolio.css'
import { Link } from 'react-router-dom'
const Portfolio = () => {
  return (
    <div className='portfolio'>
      <h1 className='h1'>
        Portfolio
      </h1>
     <div className="fopy-container">
      <div className="fopy-logo">
        <img src="https://images-platform.99static.com//KlBLMX8dQrcq6hZGnxf5HSnG29I=/8x543:525x1060/fit-in/500x500/99designs-contests-attachments/123/123360/attachment_123360235" alt="Fopy logo" />
      </div>
      <div className="fopy-content">
        <h1>CCourses</h1>
        <p>A web-based application to store the best courses from YouTube or from your device in a single place.</p>
        <div className="tech-stacks">
          <span>Tech Stacks:</span> 
          <p>React, Express JS, Nodejs, MongoDB, MaterialUI .</p>
        </div>
        <Link to={'https://ccourses.vercel.app/'} target='_blank'>
        <button  className="demo-button">Demo</button>
        </Link>
       
      </div>
    </div>
    <div className="fopy-container">
      <div className="fopy-logo">
        <img src="https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_400x400.jpg" alt="X logo" />
      </div>
      <div className="fopy-content">
        <h1>Twitter Clone</h1>
        <p>A web-based twitter clone application</p>
        <div className="tech-stacks">
          <span>Tech Stacks:</span> 
          <p>React, Express JS, Nodejs, MongoDB.</p>
        </div>
        <Link to={'https://tweeet-two.vercel.app/'} target='_blank'>
        <button  className="demo-button">Demo</button>
        </Link>
       
      </div>
    </div>
    <div className="fopy-container">
      <div className="fopy-logo">
        <img src="https://images-platform.99static.com//KlBLMX8dQrcq6hZGnxf5HSnG29I=/8x543:525x1060/fit-in/500x500/99designs-contests-attachments/123/123360/attachment_123360235" alt="Fopy logo" />
      </div>
      <div className="fopy-content">
        <h1>CCourses</h1>
        <p>A web-based application to store the best courses from YouTube or from your device in a single place.</p>
        <div className="tech-stacks">
          <span>Tech Stacks:</span> 
          <p>React, Express JS, Nodejs, MongoDB, MaterialUI .</p>
        </div>
        <Link to={'https://ccourses.vercel.app/'} target='_blank'>
        <button  className="demo-button">Demo</button>
        </Link>
       
      </div>
    </div>
    </div>
  )
}

export default Portfolio