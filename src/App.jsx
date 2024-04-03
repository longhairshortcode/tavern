import { Routes, Route } from "react-router-dom"
import { register } from 'swiper/element/bundle';
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Catering from "./pages/Catering"
import Locations from "./pages/Locations"
import Contact from "./pages/Contact"
import Order from "./pages/Order"
import MenuOfRestaurant from "./pages/MenuOfRestaurant"
import FoodPaperMenu from "./components/MenuOfRestaurant/FoodPaperMenu"
import DrinkPaperMenu from "./components/MenuOfRestaurant/DrinkPaperMenu"
import Cart from "./pages/Cart"
import { useState } from "react";
import { useEffect } from "react";
//this is for swiper to initiate it but currently not using it
register();


function App() {

const [cartAmount, setCartAmount] = useState([])

// useEffect(() =>{
//   console.log(cartAmount)
// }, [cartAmount])

const addToCart = (item) => {
  setCartAmount([...cartAmount, item ])
}

  return (
    <>
      <Navbar 
      cartAmountLength={cartAmount.length}
      />
      <Routes>
        <Route path={"/"} element={<Home addToCart={addToCart}/>}/>  
        <Route path={"about"} element={<About/>}/> 
        <Route path={"menu"} element={<MenuOfRestaurant/>}>
          <Route index element={<FoodPaperMenu/>}/> 
          <Route path={"food-menu"} element={<FoodPaperMenu/>}/> 
          <Route path={"drink-menu"} element={<DrinkPaperMenu/>}/>  
        </Route>      
        <Route path={"catering"} element={<Catering/>}/>
        <Route path={"locations"} element={<Locations/>}/>
        <Route path={"contact"} element={<Contact/>}/>
        <Route path={"order"} element={<Order/>}/>
        <Route path={"cart"} element={<Cart cartAmount={cartAmount}/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
