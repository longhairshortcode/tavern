import Hero from "../components/Home/Hero"
import Menu from "../components/Home/Menu/Menu"
import Drinks from "../components/Home/Drinks/Drinks"
import Reservations from "../components/Home/Reservations/Reservations"
import Reviews from "../components/Home/Reviews/Reviews"

function Home() {
  return (
    <>
      <Hero/>
      <Menu/>
      <Drinks/>
      <Reservations/>
      <Reviews/>
    </>
  )
}

export default Home
