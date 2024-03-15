import style from "./OrderHero.module.css"
import OrderHeroCarousel from "./OrderHeroCarousel"
import { useRef } from "react";
import Slider from "react-slick";
import OrderForm from "../OrderForm/OrderForm";

function OrderHero() {

  const sliderRef = useRef(null);

  return (
    <div className={style.orderHeroComponentContainer}>
      <div className={style.carouselContainer} >
        <OrderHeroCarousel sliderRef={sliderRef}/>
        <OrderForm/>
      </div>
    </div>
  )
}

export default OrderHero
