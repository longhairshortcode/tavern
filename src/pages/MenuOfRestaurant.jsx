import style from "./Styles/MenuOfRestaurant.module.css"
import {NavLink, Outlet} from "react-router-dom"
import menulogo from "../assets/menulogo.jpeg"

// import { useState } from "react"


function MenuOfRestaurant() {

  function stylenav({isActive}) {
    return {
      backgroundColor: isActive ? "rgba(186, 153, 3, 0.557)": "orange",
      color: isActive ? "rgb(145, 95, 2)" : "black",
    }
  }
// const [showMenu, setShowMenu] = useState(true)

  return (
    <div className={style.componentContainer}>
      <div className={style.menuLeftAndRightContainer}>
        <div className={style.menuLeftContainer}>
          <p className={style.restaurantLeftTitle}>TAVERN RESTAURANT</p>
          <img className={style.menuImage} src="/menulogo.jpeg" alt="restaurant logo"/>
        </div>
        <div className={style.menuRightContainer}>
          <h2 className={style.menuRightTitle}>Food And Beverage Menu</h2>
          <div className={style.buttonsContainer}>
            <NavLink style={stylenav} className={style.foodButton} to= "food-menu">Food</NavLink>
            <NavLink style={stylenav} className={style.drinkButton} to="drink-menu">Drink</NavLink>
          </div>

            <Outlet/>
  
        </div>
        
      </div>
    </div>
  )
}

export default MenuOfRestaurant
