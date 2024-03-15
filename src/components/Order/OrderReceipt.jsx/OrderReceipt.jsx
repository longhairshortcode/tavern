import style from "./OrderReceipt.module.css"
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

//give receiptContainer (showReceipt) initial state of false
//onclick of icon, switch showReceipt to false


function OrderReceipt() {
  const [showReceipt, setShowReceipt] = useState(true)

  const handleCloseClick = () => {
    setShowReceipt(false)
  }
  return (
    <>
    {showReceipt && (  
    <div className={style.componentContainer}>
      <div className={style.receiptContainer}>
        <div className={style.topSectionContainer}>
            <h2 className={style.successful}>Order Successfully Placed!</h2>
            <p className={style.tavernOrderBold}>Tavern Order -</p>
            <p>March 15, 2024</p>
            <p>Receipt Number: 123</p>
        </div>
        <div className={style.middleItemsPricesContainer}>
            <div className={style.itemsContainer}>
                <p className={style.itemsTitle}>Items:</p>
                <ul>
                  <li>Pizza</li>
                  <li>Pizza</li>  
                </ul>
            </div>
            <div className={style.pricesContainer}>
                <p className={style.pricesTitle}>Prices:</p>
                <ul>
                  <li>$10.00</li>  
                  <li>$10.00</li>  
                </ul>
            </div>
        </div>
        <div className={style.bottomSectionContainer}>
            <div className={style.subtotalContainer}>
                <p className={style.subtotalTitle}>Subtotal:</p>
                <p className={style.subtotalPrice}>$20.00</p>
            </div>
            <div className={style.taxContainer}>
                <p className={style.taxTitle}>Tax:</p>
                <p className={style.tax}>$2.00</p>
            </div>
            <div className={style.totalContainer}>
                <p className={style.totalTitle}>Total:</p>
                <p className={style.total}>$22.00</p>
            </div>
        </div>
      </div>
        <div className={style.closeIconContainer}>
          <IoIosClose onClick={handleCloseClick} className={style.closeIcon} />
        </div>
      </div>
    )}
    </>
  )
}

export default OrderReceipt
