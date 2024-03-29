import StartOrder from "../../../common/StartOrder"
import style from "./Hero.module.css"
import chefHand from "../../../assets/chefHand.png"
import bread from "../../../assets/bread.png"
import cheese from "../../../assets/cheese.png"
import mouse from "../../../assets/mouse.png"
import customerPic from "../../../assets/customerPic.png"
import {Link} from 'react-router-dom' 

function Hero() {
  return (
    <div className={style.componentContainer}>
        <div className={style.h1Container}>
            <h1 className={style.h1Large}>Food That <img className={style.bread} src={bread}></img> Tastes Like A Revelation <img className={style.cheese} src={cheese}></img></h1>
            <p className={style.bothMobile}> <img className={style.breadMobile} src={bread}></img><img className={style.cheeseMobile} src={cheese}></img></p>
        </div>
        <div className={style.imageAndTextContainer}>
            <div className={style.imgContainer}>
                <img className={style.chefHand} src={chefHand} alt="chef hands sprinkling salt onto food"></img>
            </div>

            <div className={style.rightOfImgContainer}>
                <div className={style.bestPlaceAllContainer}>
                    <p className={style.bestPlaceHash}>#best place</p>
                    {/* do i put br or css (shorten width) to make the para cut at the correct spots? 2) should elemements width be 100% or fit the content? */}
                    <p className={style.bestPlacePara}>We specialize in chef-inspired fast casual cuisine from all over the Mediterranean. Our unique menu features Greek classics.</p>
                    <div className={style.heroButtonComponentContainer}>
                    <Link className={style.orange} to={"/order"}><StartOrder hoverBgColor={"rgb(240, 177, 59)"} bgColor={"orange"}/></Link>
                    </div>   
                </div>    

                <div className={style.customerContainer}>
                    <div className={style.leftCustomerContainer}>
                        <p className={style.bigNum}>24K+</p>
                        <p className={style.bigNumWords}>Happy <br/> Customer</p>
                    </div>
                    <div className={style.rightCustomerContainer}>
                        <img className={style.customerPic} src={customerPic} alt="pic of customer"></img>
                        <p className={style.customerPicWords}>"best ever place to eat your favorite delicious food"</p>
                    </div>
                </div>
                <div className={style.mouseContainer}>
                        <img className={style.mousePic} src={mouse} alt="mouse icon"></img>
                </div>
            </div>
        </div>
    </div>
  )}

export default Hero
