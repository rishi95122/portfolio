import React, { useEffect, useState } from 'react'
import './Mainpage.css'
import { RiInstagramFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Mainpage = () => {
  
    const [fade, setFade] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setFade(!fade);
      }, 3000); // Change the delay as needed (3000ms = 3 seconds)
  
      return () => clearTimeout(timer);
    });
   
  return (
    <div className='mainpage'>
        {
            fade ? <h1 className={`fade-out ${fade ? 'fade' : ''}`}>Uditya, K.</h1> :<h1 className={`fade-out1 ${fade ? 'fade1' : ''}`}>Uditya, K.</h1>
        }
       
        <div className='icons'>
        <Link target='_blank' className='link' to='https://github.com/rishi95122'>
        <FaGithub className='btn' size={30}/>
        </Link>
        <Link target='_blank' className='link' to='https://www.linkedin.com/in/uditya-kumar-9500b52a7/'>
        <FaLinkedin className='btn' size={30} />
        </Link>
        <Link target='_blank' className='link' to='https://instagram.com/uditya_8'>
        <RiInstagramFill className='btn' size={30}/>
        </Link>
        <Link target='_blank' className='link' to='https://x.com/udityakumar19'>
        <FaSquareXTwitter className='btn'  size={30}/>
        </Link>
        </div>
        <div className='buttons'>
          <Link to='https://mail.google.com/mail/?view=cm&fs=1&to=udityakumar2000@gmail.com' target='_blank'>
          <button className='getinbtn'>GET IN TOUCH </button>
          </Link>
           
            < Link target='_blank' to='https://drive.google.com/file/d/1aPSTYjkrqxthdLBeiahMPhITZIqARcu-/view'>
            <button  className='getdownbtn'>DOWNLOAD CV</button>
            </Link>
            
        </div>
    </div>
  )
}

export default Mainpage