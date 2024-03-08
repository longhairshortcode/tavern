import style from "./ReviewsCarousel.module.css"
import ReviewsData from "./ReviewsData"
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/pagination';



//why is swiperRef passed here?, does is automatically make a swiperRef ref?
function ReviewsCarousel({swiperRef}) {
    return(
        <>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          breakpoint = {  {
            // this is mobile, meaning screens starting at 320 (and up to 479 since the next break is 480)
            320: {
              slidesPerView: 1.3,
              spaceBetween: 20
            },
            //tablet
            480: {
              slidesPerView: 2,
              spaceBetween: 10
            },
           //desktop
            640: {
              slidesPerView: 3,
              spaceBetween: 10
            }
          }} 
          className="mySwiper"
          style={{width: "100%", border: "2px red solid"}}
          ref={swiperRef}
          >
{/* what does slideNext/Prev actaully do / touch in this? */}
            {ReviewsData.map((review)=>{
                return(
                    <SwiperSlide style={{ width:"275px", border: "2px solid blue"}} key={review.id}>
                        <div key={review.id} className={style.reviewSingleContainer}>
                            <p className={style.customerMessage}>{review.message}</p>
                            <div className={style.customerPicContainer}>
                                <img className={style.customerPic} src={review.image} alt="pic of customer"/>
                            </div>
                            <p className={style.customerName}>{review.name}</p>
                        </div>
                    </SwiperSlide>
                )})
            }
        </Swiper>
        </>
    )
}

export default ReviewsCarousel






