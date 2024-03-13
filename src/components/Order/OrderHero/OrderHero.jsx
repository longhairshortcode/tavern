import style from "./OrderHero.module.css"
import OrderHeroCarousel from "./OrderHeroCarousel"
import { useRef } from "react";
import Slider from "react-slick";

function OrderHero() {

  const sliderRef = useRef(null);

  return (
    <div className={style.orderHeroComponentContainer}>
      <div className={style.carouselContainer} >
        <OrderHeroCarousel sliderRef={sliderRef}/>
      </div>
    </div>
  )
}

export default OrderHero
