import style from "./Reviews.module.css"
import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import ReviewsCarousel from "./ReviewsCarousel";
import { useRef } from "react";

function Reviews() {

  const swiperRef = useRef(null); 

  const prev = () => {
    if(swiperRef.current && swiperRef.current.swiper){
      swiperRef.current.swiper.slidePrev();
    } 
  }

  const next = () => {
    if(swiperRef.current && swiperRef.current.swiper){
      swiperRef.current.swiper.slideNext();
    }
  } 

  
  return (
    <section className={style.componentContainer}>
        <div className={style.reviewsContainer}>
          <div className={style.titleAndArrowsContainer} >
            <h2 className={style.title}>What Our Customers Say?</h2>
            <div className={style.arrowsContainer} >  
              <button onClick={prev} className={style.leftArrowIcon}><MdArrowBack /></button>
              <button onClick={next} className={style.rightArrowIcon}><MdArrowForward /></button>
            </div>
          </div>
          <ReviewsCarousel swiperRef={swiperRef}/>
        </div>
    </section>
  )
}

export default Reviews
