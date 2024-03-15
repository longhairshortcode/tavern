import style from "./OrderHeroCarousel.module.css"
import OrderData from "./OrderData.js"
import Slider from "react-slick"

function OrderHeroCarousel({sliderRef}) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
  return (
    <div className={style.carouselContainer}>
      <Slider 
          ref={sliderRef}
          {...settings}
          > 
            {OrderData.map((orderItem)=>{
                return(
               
                        <div key={orderItem.id} className={style.orderItemSingleContainer}>
                                <div className={style.picContainer}>
                                  <img className={style.orderItemPic} src={orderItem.image} alt={orderItem.name}/>
                                </div>
                        </div>
                    
                )})
            }
        </Slider>
    </div>
  )}

  export default OrderHeroCarousel