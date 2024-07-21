ssssssssssassssssssssssssimport style from "./Footer.module.css"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterLine } from "react-icons/ri";
import { RiFacebookBoxFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className={style.componentContainer}>
      <div className={style.topInfoContainer}>
        <div className={style.oneNameAndMission}>
        <Link to={"/"}><img className={style.logo} src={logo} alt="company logo"></img></Link>
          <p>A multi-cultural plant-based organic restaurant with elevated flavors.</p>
          <p className={`${style['bold']} ${style['tagLine']}`}>Taste The World.</p>
        </div>
        <div className={style.twoExplore}>
          <ul className={style.exploreContainer}>
            <li className={`${style['bold']} ${style['explore']}`}>Explore</li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/menu"}>Menu</Link></li>
            <li><Link to={"/catering"}>Catering</Link></li>
            <li><Link to={"/location"}>Location</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
          </ul>
        </div>
        <div className={style.threeVisit}>
          <address className={style.tavernAddress}>
            <p className={`${style['bold']} ${style['visit']}`}>Visit</p>
            <p className={style.actualAddress}>Tavern</p>
            <p className={style.actualAddress}>123 Green Street</p>
            <p className={style.actualAddress}>Los Angeles, CA</p>
          </address>
          <ul  className={style.contactContainer}>
            <li className={`${style['bold']} ${style['contactUs']}`}>Contact Us</li>
            <li><a className={style.email} href="mailto:contact@tavern.com">contact@tavern.com</a></li>
            <li><a className={style.num} href="tel:818-555-1234">818-555-1234</a></li>
          </ul>
        </div>
        <div className={style.fourFollow}>
          <ul className={style.followContainer}>
            <li className={`${style['bold']} ${style['follow']}`}>Follow</li>
            <li><a><IoLogoInstagram /></a></li>
            <li><a><RiTwitterLine /> </a></li>
            <li><a><RiFacebookBoxFill /></a></li>
          </ul>
        </div>
        <div className={style.fiveLegal}>
          <ul className={style.legalContainer}>
            <li className={`${style['bold']} ${style['legal']}`}>Legal</li>
            <li><a className={style.terms}>Terms</a></li>
            <li><a className={style.privacy}>Privacy</a></li>
          </ul>
        </div>
        
      </div>
      <div className={style.botCopyrightContainer}>
        <p>&copy; {new Date().getFullYear()} Tavern. All Rights Reserved</p>        
      </div>
    </footer>
  )
}

export default Footer
