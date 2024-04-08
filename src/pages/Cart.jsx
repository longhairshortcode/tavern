import style from "./Styles/Cart.module.css"
import { useEffect, useState } from "react"


function Cart({cartAmount}) {
  console.log("cartAmount prop in Cart component:", cartAmount);
  const [subtotal, setSubtotal] = useState([])
  const [tax, setTax] = useState([])
  const [total, setTotal] = useState([])

useEffect(() => {
  const newSubtotal = cartAmount.reduce((total, item) => total + (item.itemPrice * item.quantity), 0);
  setSubtotal(newSubtotal.toFixed(2))
  const newTax = newSubtotal * .10;
  setTax(newTax.toFixed(2));
  const newTotal = newSubtotal + newTax;
  setTotal(newTotal.toFixed(2));
}, [cartAmount])

  return (
      <div className={style.componentContainer}>
        <div className={style.cartContainer}>
            {/* 1 */}
            <div className={style.cartTotalTitleContainer}>
              <h1 className={style.cartTotalTitle}>Cart ({cartAmount.length})</h1>
            </div>
            {/* 2 */}
            {cartAmount.map((item) => 
            <div key={item.id} className={style.individualItemContainer}> 
              <div className={style.imgContainer}>
              <img src={item.img}/>   
              </div>
              
              <div className={style.itemNameAndPriceContainer}>
                <p className={style.itemName}>{item.quantity} x {item.itemName}</p>
                <p className={style.itemPrice}>${(item.itemPrice * item.quantity).toFixed(2)}</p>
              </div>
          
              <p className={style.itemDescription}>{item.itemDescription}</p>
              <button className={style.removeButton}>Remove</button>
            </div> 
         )}
          {/* 3 */}
            <div className={style.cartSummaryContainer}>
                  <p className={style.cartSummaryTitle}>Cart Summary</p>
                  <div className={style.subtotalContainer}>
                    <p className={style.subtotalTitle}>Subtotal:</p>
                    <p className={style.subtotalPrice}>${subtotal}</p>
                  </div>     
                  <div className={style.taxContainer}>
                    <p className={style.taxTitle}>Tax:</p>
                    <p className={style.taxPrice}>${tax}</p>
                  </div>
                  
                  <div className={style.totalContainer}>
                    <p className={style.totalTitle}>Total:</p>
                    <p className={style.totalPrice}>${total}</p>
                  </div>

            </div> 
        </div>
      </div>
  )
}

export default Cart
