import style from "./Styles/MenuOfRestaurant.module.css"

function MenuOfRestaurant() {
  return (
    <div className={style.componentContainer}>
      <div className={style.menuTopAndBottomContainer}>
        <div className={style.menuTopContainer}>
          <p className={style.restaurantTopTitle}>TAVERN RESTAURANT</p>
          <img className={style.menuImage} alt="restaurant logo"/>
        </div>
        <div className={style.menuBottomContainer}>
          <p className={style.menuBottomTitle}>Food And Beverage Menu</p>
            <div className={style.foodsLeftContainer}>
              <div className={style.foodSingleContainer}>
        
              </div>
            </div>
            <div className={style.drinksRightContainer}>
              <div className={style.drinkSingleContainer}>
        
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MenuOfRestaurant
