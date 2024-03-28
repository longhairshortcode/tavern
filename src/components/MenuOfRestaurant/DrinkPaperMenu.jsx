import style from "./DrinkPaperMenu.module.css"

function DrinkPaperMenu() {
  return (
            <div className={style.bothFoodAndDrinkColumnContainer}> 
              <div className={style.foodsLeftContainer}>
                <div className={style.foodSingleContainer}>
                  <div className={style.foodNameAndPriceContainer}>
                    <p className={style.foodName}>Food Name 1</p>
                    <p className={style.foodPrice}>$10.00</p>
                  </div>
                  <p className={style.foodDescription}>This is the description of the food item in great detail of all ingredients.</p>        
                </div>
              </div>
              <div className={style.drinksRightContainer}>
                <div className={style.drinkSingleContainer}>
                  <div className={style.drinkNameAndPriceContainer}>
                    <p className={style.drinkName}>Drink Name 1</p>
                    <p className={style.drinkPrice}>$10.00</p>
                  </div>
                  <p className={style.foodDescription}>This is the description of the drink item in great detail of all ingredients.</p>        
                </div>
              </div>
             </div> 
  )
}

export default DrinkPaperMenu
