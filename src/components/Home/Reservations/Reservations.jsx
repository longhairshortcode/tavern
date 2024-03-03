import style from "./Reservations.module.css"
import peopleEating from "../../../assets/peopleEating.jpeg"
function Reservations() {
  return (
    <section className={style.reservationsContainer}>
      <div className={style.textAndImgContainer}>
        <div className={style.leftTextContainer}>
            <h2 className={style.resTitle}>Do You Have Any Dinner Plans Today? Reserve Your Table</h2>
            <p className={style.resPara}>Make online reservations in advance for up to three months. Tables go fast, so just one click and you will have your table ready for you!</p>
            <button className={style.resButton}>Make Reservation</button>
        </div>
        <div className={style.rightImgContainer}>
            <img className={style.cheersImg} src={peopleEating} alt="bowl of food"/>
        </div>

      </div>
    </section>
  )
}

export default Reservations
