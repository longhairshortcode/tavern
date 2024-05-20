import style from './FoodPaperMenu.module.css'
import MenuData from "../Home/Menu/MenuData.js"


function FoodPaperMenu() {
  return (
        <div className={style.componentContainer}>
          { MenuData.map((item) => (
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
          ))
          
          }
        </div>
  )
}

export default FoodPaperMenu
