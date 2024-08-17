// src/SideBar.js
import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { RxCross1 } from "react-icons/rx";
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import { BiBorderBottom } from 'react-icons/bi';
import SecureImage from '../SecureImage';
import img from '../../assets/i2.jpeg'

const Sidebar = ({open,setOPen}) => {
  const params = useLocation().pathname
  
  useEffect(()=>{
    setOPen(false);
  },[params])
  const handleToggle = () => {
    setOPen(false);
  };
  return (
    <div className={`sidebar-container ${!open ? 'closed' : ''}`}>
      <div className="sidebar-content">
        <button className="close-button" onClick={handleToggle}>
        <RxCross1 id='rxcross' style={{margin:"10px 0px 0px 20px"}} size={40}/>
        </button>
        <div className='content'>
        <div className="profile-section">
<SecureImage src={img}  className='profile-image'/>
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
        </div>
        <div className="nav-links">
          <Link to="/" className='link' >
          <h1 style={params=='/'?{position:"static",textDecoration:"underline" ,color:"black"}:{}}>Home</h1>
          </Link>
          <Link to="/about" className='link' >
          <h1 style={params=='/about'?{position:"static",textDecoration:"underline"  ,color:"black"}:{}}>About</h1>
          </Link>
          <Link to="/portfolio" className='link' >
          <h1 style={params=='/portfolio'?{position:"static",textDecoration:"underline" ,color:"black"}:{}}>Portfolio</h1>
          </Link>
         
        </div>
        <footer className="footerr">
          <p>Copyright © 2023 Rama ❤ You.</p>
        </footer>
        </div>
        
      </div>
    </div>
  );
}

export default Sidebar;
