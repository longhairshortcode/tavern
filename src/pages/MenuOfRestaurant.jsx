import style from "./Styles/MenuOfRestaurant.module.css"
import {Link, Outlet} from "react-router-dom"
// import { useState } from "react"


function MenuOfRestaurant() {

// const [showMenu, setShowMenu] = useState(true)

  return (
    <div className={style.componentContainer}>
      <div className={style.menuLeftAndRightContainer}>
        <div className={style.menuLeftContainer}>
          <p className={style.restaurantLeftTitle}>TAVERN RESTAURANT</p>
          <img className={style.menuImage} alt="restaurant logo"/>
        </div>
        <div className={style.menuRightContainer}>
          <h2 className={style.menuRightTitle}>Food And Beverage Menu</h2>
          <div className={style.buttonsContainer}>
            <Link className={style.foodButton} to= "food-menu">Food</Link>
            <Link className={style.drinkButton} to="drink-menu">Drink</Link>
          </div>

            <Outlet/>
  
        </div>
        
      </div>
    </div>
  )
}

export default MenuOfRestaurant
