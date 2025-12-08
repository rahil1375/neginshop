// src/components/Nav2s.jsx
import React from "react";
import imgl from '../assets/logo2.png';
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
function Nav2s(){
  const closeMenu=()=>{
    const menu=document.getElementById('nv2');
    if(menu){
      const bsOffConcas=offcanvas.getInstance(menu)||new
      offcanvas(menu,{toggle:false});
      bsOffConcas.hide();
    }
  }

    return(
        <div id="nv2" className="nv2 navbar">
        <div className="container-fluid">
          <div className="shpb"><span  style={{width:"20px",height:"20px",backgroundColor:"rebeccapurple",position:"absolute",left:"30px",borderRadius:"40px"}}></span><Link className="shop-bag" to="/shoppingBag"><BsCart3 className="shop-bag-icon"/></Link></div>
          <div className="imgl2"><img style={{width:"12vw",height:"12vw"}} src={imgl} alt="logo"/></div>
          <button className="hm-b navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" ></span>
          </button>
          
          <div className="mn-item" style={{marginRight:"4vw",direction:"rtl"}}>
            <Link className="mn-item" style={{color:"black",textDecoration:"none",padding:"0.5vw 1vw",borderRadius:"5vw",textAlign:"center",backgroundColor:"transparent",marginLeft:".7vw"}} to="/">خانه</Link>
            <Link className="mn-item" style={{color:"black",textDecoration:"none",padding:"0.5vw 1vw",borderRadius:"5vw",textAlign:"center",backgroundColor:"transparent",marginLeft:".7vw"}} to="/support">پشتیبانی</Link>
            <Link className="mn-item" style={{color:"black",textDecoration:"none",padding:"0.5vw 1vw",borderRadius:"5vw",textAlign:"center",backgroundColor:"transparent",marginLeft:".7vw"}} to="/seller">فروشنده شوید</Link>
          </div>
          
          
          <div  className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div  className="offcanvas-header">
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            <div className="wspace"></div>
            <div className="wspace"></div>
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">منو</h5>
              
            </div>
            <div dir="rtl" className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link onClick={closeMenu} className="nav-link active" aria-current="page" to="/">خانه</Link>
                </li>
                <li className="nav-item">
                  <Link onClick={closeMenu} className="nav-link active" aria-current="page" to="/login">ورود/عضویت</Link>
                </li>
                <li className="nav-item">
                  <Link onClick={closeMenu} className="nav-link active" aria-current="page" to="/support">پشتیبانی</Link>
                </li>
                <li className="nav-item">
                  <Link onClick={closeMenu} className="nav-link active" aria-current="page" to="/seller">فروشنده شوید</Link>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
        
    )
}

export default Nav2s