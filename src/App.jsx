import { Routes,Route } from "react-router-dom"
import AmazingOffer from "./Components/AmazingOffer"
import Categories from "./Components/Categories"
import Footer from "./Components/Footer"
import Nav1 from "./Components/nav1"
import Nav2s from "./Components/Nav2S"
import Newest from "./Components/Newest"
import Products from "./Components/Products"
// import Slideshow from "./Components/Slideshow"
import SlideshowMain from "./Components/SlideshowMain"
import { BrowserRouter } from 'react-router-dom'
import LogSignPage from "./Components/LogSignPage"
function App() {

  return (
    <BrowserRouter> 
    <div>
    <Nav1/>
    <Nav2s/>
    <Routes>
    <Route path="/" element={<div><SlideshowMain/>
    <Products/>
    <Categories/>
    <AmazingOffer/>
    <Newest/></div>}/>
    <Route path="/login" element={<LogSignPage/>}/>
    </Routes>
     <Footer/>
      
    </div>
    </BrowserRouter>
  )
}

export default App
