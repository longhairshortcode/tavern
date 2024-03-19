import style from "./OrderForm.module.css"
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import OrderReceipt from "../OrderReceipt.jsx/OrderReceipt";
import OrderData from "../OrderHero/OrderData.js"
import { useEffect } from "react";

function OrderForm() {
const [orderData, setOrderData] = useState(OrderData)
const [showReceipt, setShowReceipt] = useState(false)
const [showFood, setShowFood] = useState(false)
const [showDrink, setShowDrink] = useState(false)
const [showSelection, setShowSelection] = useState([])
const [subtotal, setSubtotal] = useState(0)
const [tax, setTax] = useState(0)
const [total, setTotal] = useState(0)
const [quantity, setQuantity] = useState(0)


const increaseQuantity = (item) => {
    setOrderData(prevData => {
        const theData = prevData.map((data) => {
            if (data.id == item.id){
                return{...data, quantity: data.quantity + 1}
            } 
            return data;
        })
        return theData;
    })
}

const handleSelection = (item) => {
    setShowSelection([...showSelection, item ])
}

const handleFoodClick = () => {
    setShowFood(!showFood);
    setShowDrink(false);
};

const handleDrinkClick = () => {
    setShowDrink(!showDrink);
    setShowFood(false);
};

const handleSubmitOrder = () => {
    setShowReceipt(true);
};

const handleReceiptClose = () => {
    setShowReceipt(false); // Close the receipt when close button is clicked
  };



  useEffect(() =>{

  }, [quantity]);

 //USING REDUCE
  useEffect(() => {
    const newSubtotal = showSelection.reduce((total, item) => total + item.price, 0)
    setSubtotal(newSubtotal);
    const newTax = newSubtotal* 0.1; 
    setTax(newTax); 
    const newTotal = newSubtotal + newTax;
    setTotal(newTotal)
}, [showSelection]);

//Using for loop
// useEffect(() => {
//     let newSubtotal = 0
//     for (let i = 0; i < showSelection.length; i++){
//         newSubtotal = showSelection[i].price
//     }
//     setSubtotal(newSubtotal);
//     const newTax = newSubtotal* 0.1; 
//     setTax(newTax); 
//     const newTotal = newSubtotal + newTax;
//     setTotal(newTotal)
// }, [showSelection]);


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
                        <div className={style.choices}>
                        {orderData.filter((item) => item.id <= 6).map((item) =>(
                            <p onClick={() => handleSelection(item)} key={item.id}>{item.name}</p>
                        ))}   
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
                        {orderData.filter((item) => item.id>= 7).map((item) =>(
                           <p 
                              onClick={() =>{ 
                                increaseQuantity(item);
                                handleSelection(item); 
                                
                              }} 
                           key={item.id}>{item.name}</p>     
                        ))}
                        </div>
                        }
                    </div>
                </div>
                <div className={style.selectionListContainer}>
                        {showSelection.map((item) => (
                            <>
                                <p className={style.quantityNamePrice}>
                                    <span className={style.dishQuantity}>{item.quantity} x </span>
                                    <span className={style.dishName}>{item.name}</span>
                                    <span className={style.dishPrice}>${item.price}.00</span> 
                                </p>
                            </>
                       ) )} 
                </div>
                <div className={style.totalAndPriceContainer}>
                    {/* {showSelection.map((item) => ( */}
                    <div className={style.subTotalContainer}>
                        <p className={style.subTotal}>Subtotal:</p>
                        <p className={style.subTotalPrice}>${subtotal.toFixed(2)}</p>
                    </div>
                    {/* ))} */}
                    {/* {showSelection.map((item) => ( */}
                    <div className={style.taxContainer}>
                        <p className={style.tax}>Tax:</p>
                        <p className={style.taxPrice}>${tax.toFixed(2)}</p>
                    </div>
                    {/* ))} */}
                    {/* {showSelection.map((item) => ( */}
                    <div className={style.priceContainer}>
                        <p className={style.totalTitle}>Total:</p>
                        <p className={style.totalPrice}>${total.toFixed(2)}</p>
                    </div>
                    {/* ))} */}
                </div>
                <div className={style.submitOrderContainer}>
                    <button onClick={handleSubmitOrder} className={style.submitButton}>
                        Submit Order
                    </button>
                </div>
                <OrderReceipt
            showReceipt={showReceipt}
            handleReceiptClose={handleReceiptClose}
                />
                {/* {showReceipt && <OrderReceipt handleReceiptClose={setShowReceipt} />}   */}
            </div>
        </div>
    </div>
  )
}

export default OrderForm 

