import { RiStarSLine } from "react-icons/ri";
import { LiaWalkingSolid } from "react-icons/lia";   
import style from "./Menu.module.css"
import MenuData from "./MenuData";
import { useState } from "react"

function Menu() {

    const [zoomDish, setZoomDish] = useState("")

  return (
    <>
        { zoomDish &&
        <div className={style.zoomGrandPContainer}>
            <div className={style.zoomParentContainer}>
                <img className={style.zoomDish} src={zoomDish}/>
            </div>    
        </div>
        }   
        <section className={style.popularContainer}>
            <h2 className={style.popularTitle}>Popular Dishes</h2>
            <div className={style.allPopPicsAndTextContainer}>
                {    MenuData.map((menu)=>{
                        return(
                              <div key={menu.id} className={style.popImgAndTxtSingle}>
                            
                                <div className={style.popImgOnTop}>
                                    <img onClick={()=>setZoomDish(menu.img)} className={style.popImg} src={menu.img} alt={menu.dishName}/>
                                    <h3 className={style.dishName}>{menu.dishName}</h3>
                                    <p className={style.typeAndTime}>
                                        <span  className={style.type}>{menu.dishType}</span>
                                        <span  className={style.time}><LiaWalkingSolid className={style.enlargeMan} />{menu.dishTime}</span>
                                    </p>
                                </div>
                        
                                <div className={style.popTextBelow}>
                                    <div className={style.dishStars}>
                                        <RiStarSLine /> <RiStarSLine /> <RiStarSLine /> <RiStarSLine /> <RiStarSLine />
                                    </div>
                                    <p className={style.dishDescription}>{menu.dishDescription}</p>
                                    <div className={style.priceNButContainer}>
                                        <p className={style.dishPrice}>{menu.dishPrice}</p>
                                        <button className={style.dishAddButton}>Add To Cart</button>
                                    </div>
                                </div>
                              </div>
                             )
                })
                    
                }
            </div>
        </section>
    </>
  )
}

export default Menu
