import style from "./ReviewsCarousel.module.css"
import ReviewsData from "./ReviewsData"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


function ReviewsCarousel() {
    return(
        <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          >

            {ReviewsData.map((review)=>{
                return(
                    <SwiperSlide>
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




// Responsive breakpoints
// breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 20
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 3,
//       spaceBetween: 30
//     },
//     // when window width is >= 640px
//     640: {
//       slidesPerView: 4,
//       spaceBetween: 40
//     }
//   }