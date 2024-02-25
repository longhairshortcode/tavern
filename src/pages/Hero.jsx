import StartOrder from "../common/StartOrder"
import style from "./Hero.module.css"


function Hero() {
  return (
    <div className={style.componentContainer}>
        <div className={style.h1Container}>
            <h1 className={style.h1Large}>Food That o Tastes Like A Revelation o</h1>
        </div>
        <div className={style.imageAndTextContainer}>
            <div className={style.imgContainer}>
                <img></img>
            </div>

            <div className={style.rightOfImgContainer}>
                <div className={style.bestPlaceAll3}>
                    <p className={style.hashBestPlace}>#best place</p>
                    <p>We specialize in chef-inspired fast casual cuisine from all over the Mediterranean. Our unieuw menu features Greek classics.</p>
                    <StartOrder/>
                </div>     
                <div className={style.customerContainer}>
                
                </div>
                <p>icon</p>         
            </div>
        </div>
    </div>
  )}

export default Hero
