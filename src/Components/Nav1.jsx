import React from "react";
import { FaSearch } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import imgl from '../assets/logo2.png'
import { Link } from "react-router-dom";
function Nav1(){
    return(
    
        <div className="nav1" style={{position:"sticky",top:"0px",zIndex:"1000"}}>
        <div className="logoContainer">
          <a className="navbar-brand" href="#" style={{marginRight:"6vw",cursor:"pointer"}}>
            <img className="logoimg" src={imgl} alt="logo"/>
          </a>
          
        </div>
        <div className="wspace"></div>
        <div className="left-nav1">
          <div className="search-box"><input placeholder="جستجو محصول..." className="search-bar" type="search"></input><FaSearch style={{fontSize:"20px"}} /></div>
          <Link className="btn-login" to="/login">ثبت نام / ورود</Link>
          <span style={{width:"20px",height:"20px",backgroundColor:"rebeccapurple",position:"absolute",left:"2.2vw",top:"2.1vw",borderRadius:"40px",zIndex:"1"}}></span><Link style={{position:"relative"}} className="shop-bag" to="/shoppingBag"><BsCart3 className="shop-bag-icon"/></Link>
        </div>
      </div>
    
    )
}

export default Nav1