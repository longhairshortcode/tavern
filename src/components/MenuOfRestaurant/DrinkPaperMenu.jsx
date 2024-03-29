import style from "./DrinkPaperMenu.module.css"
import Drinks from "../Home/Drinks/Drink.js"

function DrinkPaperMenu() {
  return (
    <div className={style.componentContainer}>
      {Drinks.map((item) => (
          <div key={item.id} className={style.itemSingleContainer}>
            <div className={style.nameAndPriceContainer}>
              <p className={style.itemName}>
                {item.drinkName}
              </p>
              <p className={style.itemPrice}>
                {item.drinkPrice}
              </p>
            </div>
            <p className={style.itemDescription}>
              {item.drinkDescription}
            </p>  
            </div>
      ) )}
      </div>
  )
}

export default DrinkPaperMenu
