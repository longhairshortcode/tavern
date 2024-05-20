import style from "./DrinkPaperMenu.module.css"
import Drinks from "../Home/Drinks/Drink.js"

function DrinkPaperMenu() {
  return (
    <div className={style.componentContainer}>
      {Drinks.map((item) => (
          <div key={item.id} className={style.itemSingleContainer}>
            <div className={style.nameAndPriceContainer}>
              <p className={style.itemName}>
                {item.itemName}
              </p>
              <p className={style.itemPrice}>
                ${item.itemPrice.toFixed(2)}
              </p>
            </div>
            <p className={style.itemDescription}>
              {item.itemDescription}
            </p>  
            </div>
      ) )}
      </div>
  )
}

export default DrinkPaperMenu
