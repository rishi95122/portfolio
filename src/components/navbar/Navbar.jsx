import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import './Navbar.css'
import Sidebar from '../sidebar/Sidebar';
const Navbar = () => {
  const [open,setOPen]=useState(false)
  const [head,setHead]=useState('U')

  return (
    <div className='navbar'>
        <h1 className='nav-icon' onMouseEnter={()=>setHead("K")} onMouseLeave={()=>setHead("U")}>{head}</h1>
        <AiOutlineMenu size={40} onClick={()=>setOPen(true)}/>
        <Sidebar open={open} setOPen={setOPen}/>
    </div>
  )
}

export default Navbar