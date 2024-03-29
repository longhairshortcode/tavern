import style from './FoodPaperMenu.module.css'
import MenuData from "../Home/Menu/MenuData.js"


function FoodPaperMenu() {
  return (
        <div className={style.componentContainer}>
          { MenuData.map((item) => (
            <div key={item.id} className={style.itemSingleContainer}>
              <div className={style.nameAndPriceContainer}>
                <p className={style.itemName}>
                  {item.dishName}
                </p>
                <p className={style.itemPrice}>
                  {item.dishPrice}
                </p>
              </div>
              <p className={style.itemDescription}>
                {item.dishDescription}
              </p>  
            </div>
          ))
          
          }
        </div>
  )
}

export default FoodPaperMenu
