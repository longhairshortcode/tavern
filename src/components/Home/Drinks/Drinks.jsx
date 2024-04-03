import style from "./Drinks.module.css"
import { RiStarSLine } from "react-icons/ri";
import { LiaWalkingSolid } from "react-icons/lia";
import DrinksData from "./Drink";  
import { useState } from "react"

function Drinks({addToCart}) {

    const [zoomImage, setZoomImage] = useState("")

  return (
    <>
        { zoomImage &&
        <div className={style.zoomGrandPContainer}>
            <div className={style.zoomParentContainer}>
                <img className={style.zoomImage} src={zoomImage}/>
            </div>
        </div>
        }
        <section className={style.drinksContainer}>        
            <h2 className={style.drinksTitle}>Popular Drinks</h2>
            <div className={style.allDrinksPicsNTexContainer}>
                {/* map here */}
            
                {DrinksData.map((drink)=>{
                    return(
                        <div key={drink.id} className={style.drinkImgAndTxtSingle}>
                    
                        <div className={style.drinkPicTopContainer}>
                            <img  onClick={()=>setZoomImage(drink.img)} className={style.drinkImage} src={drink.img} alt="a margarita"/> 
                            <h3 className={style.drinkTitle}>{drink.drinkName}</h3>
                            <p className={style.drinkTypeAndTime}>
                                <span className={style.drinkType}>{drink.drinkType}</span><span className={style.drinkTime}><LiaWalkingSolid className={style.enlargeMan} /> {drink.drinkTime}</span>
                            </p>
                        </div>
        
                        <div className={style.drinkBelowPicContainer}>
                            <div className={style.stars}>
                                <RiStarSLine /> <RiStarSLine /> <RiStarSLine /> <RiStarSLine /> <RiStarSLine />
                            </div>
                            <p className={style.drinkDescription}>{drink.drinkDescription}</p>
                            <div className={style.priceNButtonContainer} >
                                <p className={style.drinkPrice}>{drink.drinkPrice}</p>
                                <button onClick={() => addToCart(drink)} className={style.drinkAddButton}>Add To Cart</button>
                            </div>
                            </div>
                    </div> 
                    )
                })
                }
                
            </div>
        </section>
    </>
        

   
)
}

export default Drinks
   











   