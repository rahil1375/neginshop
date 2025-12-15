// App.jsx
import { Routes,Route } from "react-router-dom"
import AmazingOffer from "./Components/AmazingOffer"
import Categories from "./Components/Categories"
import Footer from "./Components/Footer"
import Nav1 from "./Components/nav1"
import Nav2s from "./Components/Nav2S"
import Newest from "./Components/Newest"
import Products from "./Components/Products"
import SlideshowMain from "./Components/SlideshowMain"
import { BrowserRouter } from 'react-router-dom'
import LogSignPage from "./Components/LogSignPage"
import AdminPanel from "./Components/AdminPanel"
import Dashboard from "./Components/Dashboard"
import EditProfile from "./Components/EditProfile"
import MyOrders from "./Components/MyOrders"
import ManageProfile from "./Components/ManageProfile"
import Favorites from "./Components/Favorites"
import Markups from "./Components/Markups"
import Views from "./Components/Views"
import Tickets from "./Components/Tickets"
import Support from "./Components/Support"
import Seller from "./Components/Seller"
import ProductDetails from "./Components/ProductDetails"
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
    <Route path="/dashboard" element={<Dashboard/>}>
      <Route path="manageProfile" element={<ManageProfile/>}/>
      <Route path="editProfile" element={<EditProfile/>}/>
      <Route path="myOrders" element={<MyOrders/>}/>
      <Route path="favorites" element={<Favorites/>}/>
      <Route path="markups" element={<Markups/>}/>
       <Route path="views" element={<Views/>}/>
        <Route path="tickets" element={<Tickets/>}/>
    </Route>
    <Route path="/admin" element={<AdminPanel/>}/>
    <Route path="/support" element={<Support/>}/>
    <Route path="/seller" element={<Seller/>}/>
    <Route path="/product/:id" element={<ProductDetails/>}/>
    </Routes>
     <Footer/>
    </div>
    </BrowserRouter>
  )
}
export default App
