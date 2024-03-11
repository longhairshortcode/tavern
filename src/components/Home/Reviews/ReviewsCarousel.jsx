import style from "./ReviewsCarousel.module.css"
import ReviewsData from "./ReviewsData"
// import { Pagination } from 'swiper/modules';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import 'swiper/css/pagination';



//why is swiperRef passed here?, does is automatically make a swiperRef ref?
function ReviewsCarousel({sliderRef}) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
        }
      }
    ]
  };
    return(
        <>
        <Slider 
          ref={sliderRef}
          {...settings}
          > 
            {ReviewsData.map((review)=>{
                return(
               
                        <div key={review.id} className={style.reviewSingleContainer}>
                            <p className={style.customerMessage}>{review.message}</p>
                            <div className={style.customerPicContainer}>
                                <img className={style.customerPic} src={review.image} alt="pic of customer"/>
                            </div>
                            <p className={style.customerName}>{review.name} {review.id}</p>
                        </div>
                    
                )})
            }
        </Slider>
        </>
    )
}

export default ReviewsCarousel






