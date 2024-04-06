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
const [cartQuantity, setCartQuantity] = useState(0)



const addToCart = (newItem) => {
  console.log("New item:", newItem);
  
  // Check if the newItem already exists in the cart
  const existingItem = cartAmount.find((item) => item.id === newItem.id);
  console.log("Existing item:", existingItem); // Log the existingItem
  
  if (existingItem) {
    // If the item exists in the cart, update its quantity
    const updatedCartAmount = cartAmount.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartAmount(updatedCartAmount);
    console.log("Cart amount updated:", updatedCartAmount);
  } else {
    // If the item doesn't exist in the cart, add it with quantity 1
    setCartAmount([...cartAmount, { ...newItem, quantity: 1 }]);
    console.log("Item added to cart:", [...cartAmount, { ...newItem, quantity: 1 }]);
  }
};

// const addToCart = (newItem) => {
//   console.log("New item:", newItem);
//   const existingItem = cartAmount.find((existingItem) => existingItem.id === newItem.id);
//   if (existingItem) {
//     const updatedCartAmount = cartAmount.map((existingItem) =>
//       existingItem.id === newItem.id ? {...existingItem, quantity: existingItem.quantity + 1 } : existingItem
//   );
//     setCartAmount(updatedCartAmount);
//     console.log("Cart amount updated:", updatedCartAmount);
//   } else {
//     setCartAmount([...cartAmount, {...newItem, quantity: 1 }]);
//   }
// };

// console.log("cartAmount in App component:", cartAmount);

useEffect(() =>{
    const updatedQuantity = cartAmount.reduce((total, item) => total + item.quantity, 0);
  setCartQuantity(updatedQuantity)
  console.log(cartQuantity)
}, [cartAmount])


// useEffect(() => {
//   const updatedQuantity = cartAmount.reduce((total, item) => total + item.quantity, 0);
//   setCartQuantity(updatedQuantity);
// }, [cartAmount]);

  return (
    <>
      <Navbar 
      cartQuantity={cartQuantity}
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
