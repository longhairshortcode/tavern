import Hero from "../components/Home/Hero/Hero"
import Menu from "../components/Home/Menu/Menu"
import Drinks from "../components/Home/Drinks/Drinks"
import Reservations from "../components/Home/Reservations/Reservations"
import Reviews from "../components/Home/Reviews/Reviews"

function Home({addToCart}) {
  return (
    <>
      <Hero/>
      <Menu addToCart={addToCart}/>
      <Drinks addToCart={addToCart}/>
      <Reservations/>
      <Reviews/>
    </>
  )
}

export default Home
