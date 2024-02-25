import style from './Navbar.module.css'
import { NavLink } from "react-router-dom"
// import { useState } from "react"
import StartOrder from '../common/StartOrder'
import logo from '../assets/logo.png'


function Navbar() {
  return (
   <div className={style.componentContainer}> 
    <div className={style.navbarContainer}>
        <div className={style.leftLogo}>
            <NavLink to="/herohome"><img className={style.logo} src={logo} alt="company logo"></img></NavLink>
        </div>

        <div className={style.centerLinks}>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/catering">Catering</NavLink>
            <NavLink to="/location">Location</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className={style.rightButtonComponent}>
           <StartOrder/>
        </div>
    </div>
   </div>
  )
}

export default Navbar
