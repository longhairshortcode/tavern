import { Routes, Route } from "react-router-dom"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Catering from "./pages/Catering"
import Locations from "./pages/Locations"
import Contact from "./pages/Contact"

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/about"} element={<About/>}></Route>
      
        <Route path={"/catering"} element={<Catering/>}></Route>
        <Route path={"/locations"} element={<Locations/>}></Route>
        <Route path={"/contact"} element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
