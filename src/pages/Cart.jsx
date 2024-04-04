import style from "./Styles/Cart.module.css"
import { useEffect } from "react"

function Cart({cartAmount}) {

useEffect() =(() => {

}, [cartAmount])

  return (
      <div className={style.componentContainer}>
        <div className={style.cartContainer}>
            {/* 1 */}
            <div className={style.cartTotalTitleContainer}>
              <h1 className={style.cartTotalTitle}>Cart ({carStAmount.length})</h1>
            </div>
            {/* 2 */}
            {cartAmount.map((item) => 
            <div key={item.id} className={style.individualItemContainer}>
              
              <div className={style.imgContainer}>
              <img src={item.img}/>   
              </div>
              
              <div className={style.itemNameAndPriceContainer}>
                <p className={style.itemName}>{item.itemName}</p>
                <p className={style.itemPrice}>{item.itemPrice}</p>
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
                    <p className={style.subtotalPrice}>$22.00</p>
                  </div>     
                  <div className={style.taxContainer}>
                    <p className={style.taxTitle}>Tax:</p>
                    <p className={style.taxPrice}> $20.00</p>
                  </div>
                  
                  <div className={style.totalContainer}>
                    <p className={style.totalTitle}>Total:</p>
                    <p className={style.totalPrice}>$22.00</p>
                  </div>

            </div> 
        </div>
      </div>
  )
}

export default Cart
