import style from "./OrderReceipt.module.css";
import { IoIosClose } from "react-icons/io";

function OrderReceipt({ showReceipt, handleReceiptClose, subtotal, tax, total, selectedItems}) {
  // No need for state for the receipt component itself if doing click from form troggers thos

  const handleCloseClick = () => {
    handleReceiptClose(); // Call handler function from props to close the receipt
  };

  const day = new Date().getDate()
  const year = new Date().getFullYear() 
  let monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
  const month = monthsArr[new Date().getMonth()]
  const receiptDate = month + " " + day + ", " + year


  return (
    <>
      {showReceipt && (
        <div className={style.componentContainer}>
          <div className={style.receiptContainer}>
          <div className={style.closeIconContainer}>
              <IoIosClose onClick={handleCloseClick} className={style.closeIcon} />
            </div>
            <div className={style.allExceptXContainer}>
              <div className={style.topSectionContainer}>
                <h2 className={style.successful}>Order Successfully Placed!</h2>
                <p className={style.tavernOrderBold}>Tavern Order -</p>
                <p>{receiptDate}</p>
                <p>Receipt Number: 123</p>
              </div>
              <div className={style.middleItemsPricesContainer}>
                {selectedItems}
                {/* <div className={style.itemsContainer}>
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
                </div> */}
              </div>
              <div className={style.bottomSectionContainer}>
                <div className={style.subtotalContainer}>
                  <p className={style.subtotalTitle}>Subtotal:</p>
                  <p className={style.subtotalPrice}>${subtotal}</p>
                </div>
                <div className={style.taxContainer}>
                  <p className={style.taxTitle}>Tax:</p>
                  <p className={style.tax}>${tax}</p>
                </div>
                <div className={style.totalContainer}>
                  <p className={style.totalTitle}>Total:</p>
                  <p className={style.total}>${total}</p>
                </div>
              </div>
            </div>
          </div>
                
        </div>
      )}
    </>
  );
}

export default OrderReceipt;