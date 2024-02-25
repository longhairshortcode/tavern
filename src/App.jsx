import { Routes, Route } from "react-router-dom"
import Navbar from "./layout/Navbar"
import Hero from "./pages/Hero"

function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      {/* <Routes>
        <Route path={"/herohome"} element={<Hero/>}></Route>
      </Routes> */}
    </>
  )
}

export default App
