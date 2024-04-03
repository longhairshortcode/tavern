import style from "./Styles/Cart.module.css"

function Cart({cartAmount}) {
  return (
      <div className={style.componentContainer}>
        <div className={style.cartContainer}>
            <div className={style.cartTotalTitleContainer}>
              <p className={style.carTotalTitle}>Cart(total)</p>
            </div>
            {cartAmount.map((item) => 
            <div key={item.id} className={style.individualItemContainer}>
              <div className={style.itemNameAndPriceContainer}>
                <p>Name</p>
                <p>Price</p>
              </div>            
              <p>Description</p>
              <button>Delete</button>
            </div>        
         )}
            <div className={style.cartSummaryContainer}>
                <p className={style.cartSummaryTitle}>Cart Summary</p>
                <div className={style.subtotalAndTaxContainer}>
                  <div className={style.subtotalTitleAndPrice}>
                    <p>subtotal</p>
                    <p>Price</p>
                  </div>
                  <div className={style.totalTitleAndPrice}>
                    <p>total</p>
                    <p>Price</p>
                  </div>
                </div>
            </div> 
        </div>
      </div>
  )
}

export default Cart
