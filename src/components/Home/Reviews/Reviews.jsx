import style from "./Reviews.module.css"
import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import ReviewsCarousel from "./ReviewsCarousel";
import { useRef } from "react";
import Slider from "react-slick";

function Reviews() {

  const sliderRef = useRef(null); 

  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  
  return (
    <section className={style.componentContainer}>
        <div className={style.reviewsContainer}>
          <div className={style.titleAndArrowsContainer} >
            <h2 className={style.title}>What Our Customers Say?</h2>
            <div className={style.arrowsContainer} >  
              <button onClick={previous} className={style.leftArrowIcon}><MdArrowBack /></button>
              <button onClick={next} className={style.rightArrowIcon}><MdArrowForward /></button>
            </div>
          </div>
          {/* // why swiperRef here and passed in ReviewsCarousel ? whis is swiperRef written twice? should is be ref={swiperRef?} */}
          <ReviewsCarousel sliderRef={sliderRef}/>
        </div>
    </section>
  )
}

export default Reviews
