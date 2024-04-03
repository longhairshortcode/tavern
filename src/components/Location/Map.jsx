import style from "./Map.module.css"
// below
function Map() {
  return (
    <div className={style.componentContainer}>
      <div className={style.restaurantTitle}>Tavern Restaurant</div>
      <div className={style.googleMapContainer}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6601.008462022845!2d-118.32367620642087!3d34.184591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29544dce957fd%3A0xb8a1bcab58a30253!2sCalifornia%20Pizza%20Kitchen%20at%20Burbank!5e0!3m2!1sen!2sus!4v1711391697508!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          className={style.googleMap}
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  )
}

export default Map
