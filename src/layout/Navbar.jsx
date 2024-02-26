import style from './Navbar.module.css'
import { NavLink } from "react-router-dom"
import { useState } from "react"
import StartOrder from '../common/StartOrder'
import logo from '../assets/logo.png'
import { HiMenu } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"


function Navbar() {

    //Need State, toggleLinks, and closeLinkMenu  for @media q nav links

    //State - this allows for links in nav to show or not show during media q, correct? Need more explanation
    //showlinks is what item exactly? Just the other name in css for rightLinks?
    const [showLinks, setShowLinks] = useState(false)
    
    // toggleLinks - this allows to chagee the state back and forth (when clicking burger and x) 
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    
    }
    // closeLinkMenu - allows the showlinks to go away when click on a column link
    const closeLinkMenu = () => {
        setShowLinks(false)
    }


    return (
   <nav className={style.componentContainer}> 
    <div className={style.navbarContainer}>
        <div className={style.leftLogo}>
            <NavLink to="/"><img className={style.logo} src={logo} alt="company logo"></img></NavLink>
        </div>
    {/* First put the state here, if state is true, put state's class name to render the class' css style */}
        <div className={`${style['centerLinks']} ${showLinks ? style['showLinks'] : ""}`}>
            <NavLink to="/about" onClick={closeLinkMenu}>About</NavLink>
            <NavLink to="/menu" onClick={closeLinkMenu}>Menu</NavLink>
            <NavLink to="/catering" onClick={closeLinkMenu}>Catering</NavLink>
            <NavLink to="/location" onClick={closeLinkMenu}>Location</NavLink>
            <NavLink to="/contact" onClick={closeLinkMenu}>Contact</NavLink>
        </div>
        <div className={style.rightButtonComponent}>
           <StartOrder/>
        </div>
    {/* add toggleLink on onclick, and when want to have showLinks state being true/show the css styling for it
    then put the X icons to close out of it, if don't want that, put the burger */}
        <div className={style.burgerOrXIcon} onClick={toggleLinks}>
            {showLinks ? <AiOutlineClose size={15}/> : <HiMenu size={15} />}
        </div>
    </div>
   </nav>
  )
}

export default Navbar
