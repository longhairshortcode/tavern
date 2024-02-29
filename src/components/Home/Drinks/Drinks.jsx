import style from "./Drinks.module.css"
import pizza from "../../../assets/pizza.jpg"
import { RiStarSLine } from "react-icons/ri";
import { LiaWalkingSolid } from "react-icons/lia";  


function Drinks() {
  return (
    <section className={style.drinksContainer}>        
        <h2 className={style.drinksTitle}>Popular Drinks</h2>
        <div className={style.allDrinksPicsNTexContainer}>
            {/* map here */}
            {/* return () */}
            <div className={style.drinkImgAndTxtSingle}>
                
                <div className={style.drinkPicTopContainer}>
                    <img className={style.drinkImage} src={pizza}/> 
                    <h3 className={style.drinkTitle}>Drink</h3>
                    <p className={style.drinkTypeAndTime}>
                        <span className={style.drinkType}>Cocktail</span><span className={style.drinkTime}><LiaWalkingSolid className={style.enlargeMan} /> 1 min</span>
                    </p>
                </div>

                <div className={style.drinkBelowPicContainer}>
                    <div className={style.stars}>
                        <RiStarSLine /> <RiStarSLine /> <RiStarSLine /> <RiStarSLine /> <RiStarSLine />
                    </div>
                    <p className={style.drinkDescription}>This is a classic margarita made with lemon, lime, and coconut sap.</p>
                    <div className={style.priceNButtonContainer} >
                        <p className={style.drinkPrice}>$8.00</p>
                        <button className={style.drinkAddButton}>Add To Cart</button>
                    </div>
                    
                </div>
            </div>
        
        
        
        </div>
    </section>

        

   
)
}

export default Drinks
   











   