import style from "./OrderForm.module.css"
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import OrderReceipt from "../OrderReceipt.jsx/OrderReceipt";



function OrderForm() {

const [showFood, setShowFood] = useState(false)
const [showDrink, setShowDrink] = useState(false)

const handleFoodClick = () => {
    setShowFood(!showFood);
    setShowDrink(false);
}

const handleDrinkClick = () => {
    setShowDrink(!showDrink);
    setShowFood(false);
}

    return (
    <div className={style.componentContainer}>
        <div className={style.titleDirectionsFormContainer}>
            <h2 className={style.title}>Tavern Restaurant</h2>
            <p className={style.directions}>Make your food and drink selection by clicking 
            on the orange food and drink buttons below and choose your desired item 
            that will be made fresh for you! Click on the submit order button to place your order.</p>
            <div className={style.formContainer}>
                <div className={style.foodAndDrinkDropContainer}>
                    <div className={style.foodDropContainer}>
                        <button onClick={handleFoodClick} className={ showFood ? style.noBottomBorder : style.foodButtonContainer}>
                            <span className={style.food}>Food</span>
                            <span className={style.dropIcon}><IoMdArrowDropdown /></span>
                        </button>
                        { showFood &&  
                        <div  className={style.choices}>
                            <p>Pizza</p>
                            <p>Pasta</p>
                            <p>Salad</p>    
                        </div>
                        }                       
                    </div>
                    <div className={style.drinkDropContainer}>
                        <button onClick={handleDrinkClick} className={ showDrink ? style.noBottomBorder : style.drinkButtonContainer}>
                            <span className={style.drink}>Drink</span>
                            <span className={style.dropIcon}><IoMdArrowDropdown /></span>
                        </button>
                        { showDrink && 
                        <div className={style.choices}> 
                            <p>Lemon Tea</p>
                            <p>Margarita</p>
                            <p>Green Juice</p>
                        </div>
                        }
                    </div>
                </div>
                <div className={style.selectionListContainer}>
                    <p className={style.quantityNamePrice}>
                        <span className={style.dishQuantity}>2 - </span>
                        <span className={style.dishName}>Pizza</span>
                        <span className={style.dishPrice}>$6.00</span>
                    </p>
                    <p className={style.quantityNamePrice}>
                        <span className={style.dishQuantity}>2 - </span>
                        <span className={style.dishName}>Pizza</span>
                        <span className={style.dishPrice}>$6.00</span>
                    </p>
                </div>
                <div className={style.totalAndPriceContainer}>
                    <span className={style.totalTitle}>Total:</span>
                    <span className={style.totalPrice}>$0.00</span>
                </div>
                <div className={style.submitOrderContainer}>
                    <button className={style.submitButton}>Submit Order</button>
                </div>
                <OrderReceipt/>    
            </div>
        </div>
    </div>
  )
}

export default OrderForm 

