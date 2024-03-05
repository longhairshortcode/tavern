import style from "./ReviewsCarousel.module.css"

function ReviewsCarousel() {
  return (
    <div className={style.reviewSingleContainer}>
      <p className={style.customerMessage}>Hello this is my message</p>
      <img className={style.customerPic} alt="pic of customer"/>
      <p className={style.customerName}>Bob Boberson</p>
    </div>
  )
}

export default ReviewsCarousel
