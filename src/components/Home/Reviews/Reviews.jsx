import style from "./Reviews.module.css"
import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import ReviewsCarousel from "./ReviewsCarousel";

function Reviews() {
  return (
    <section className={style.componentContainer}>
        <div className={style.reviewsContainer}>
          <div className={style.titleAndArrowsContainer} >
            <h2 className={style.title}>What Our Customers Say?</h2>
            <div className={style.arrowsContainer} >  
              <button className={style.leftArrowIcon}><MdArrowBack /></button>
              <button className={style.rightArrowIcon}><MdArrowForward /></button>
        </div>
        </div>
              <ReviewsCarousel/>
          </div>
    </section>
  )
}

export default Reviews
