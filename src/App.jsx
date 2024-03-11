import { Routes, Route } from "react-router-dom"
import { register } from 'swiper/element/bundle';
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Catering from "./pages/Catering"
import Locations from "./pages/Locations"
import Contact from "./pages/Contact"

register();

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/about"} element={<About/>}/>
      
        <Route path={"/catering"} element={<Catering/>}/>
        <Route path={"/locations"} element={<Locations/>}/>
        <Route path={"/contact"} element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
