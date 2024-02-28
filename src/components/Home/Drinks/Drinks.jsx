import style from "./Drinks.module.css"
import pizza from "../../../assets/pizza.jpg"

function Drinks() {
  return (
    <section className={style.drinksContainer}>
        <h2 className={style.drinksTitle}></h2>
        <div className={style.allDrinksPicsNText}>
            {/* map here */}
            {/* return () */}
            <div className={style.drinkContainerSingle}>
                <div className={style.drinkPicContainer}>
                    <img className={style.drinkImage} src={pizza} />
                    <h3 className={style.drinkTitle}>Drink</h3>
                    <p className={style.drinkTypeAndTime}>
                        <span className={style.drinkType}>Cocktail</span><span className={style.drinkTime}>0 1 min</span>
                    </p>
                </div>
                <div className={style.drinkBelowPicContainer}></div>
            </div>
        
        
        
        </div>

        
    <section/>
   
)
export default Drinks
