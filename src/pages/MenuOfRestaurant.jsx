import style from "./Styles/MenuOfRestaurant.module.css"
import {Link, Outlet} from "react-router-dom"
import { useState } from "react"


function MenuOfRestaurant() {

const [showMenu, setShowMenu] = useState(true)

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
            <Link onClick={() => setShowMenu(false)} className={style.foodButton} to= "food-menu">Food</Link>
            <Link onClick={() => setShowMenu(false)} className={style.drinkButton} to="drink-menu">Drink</Link>
          </div>
          { showMenu ? (
          <div className={style.allSingleContainer}>
          <div className={style.itemSingleContainer}>
            <div className={style.nameAndPriceContainer}>
              <p className={style.itemName}>
              Food Name
              </p>
              <p className={style.itemPrice}>
              $10.00
              </p>
            </div>
            <p className={style.itemDescription}>
            This is the description of the menu item in great detail of all ingredients.
            </p>  
          </div>
          </div>
          ) : (
            <Outlet/>
          )}
        </div>
        
      </div>
    </div>
  )
}

export default MenuOfRestaurant
