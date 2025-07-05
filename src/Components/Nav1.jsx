import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import imgl from '../assets/logo2.png'
import { data, Link } from "react-router-dom";
function Nav1(){

    const [user,setUser]=useState(null);
    useEffect(()=>{
     const token=localStorage.getItem("token");
     if(token){
      fetch("http://localhost:5000/api/auth/me",{
        headers: { "Authorization": `Bearer ${token}` },}).then((res)=>res.json())
      .then((data)=>setUser(data))
      .catch((err)=>console.log(err));}
    },[]);

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

          {user ? (
            <div className="" style={{display:"flex",alignItems:"center",gap:"10px",width:"15vw",whiteSpace:"nowrap",margin:"3vw"}}>
              <img src={`http://localhost:5000/avatars/${user.avatar}`} alt="profile" style={{width:"3.3vw",height:"3.3vw",borderRadius:"50%"}} />
              <span  >{user.name}</span>
            </div>
          ):(
            <Link className="btn-login" to="/login">ثبت نام / ورود</Link>
          )}
          <div className="" style={{position:"relative",display:"flex",alignItems:"center",flexWrap:"nowrap",whiteSpace:"nowrap"}}>
         
            <Link  className="shop-bag" to="/shoppingBag">
            <BsCart3  className="shop-bag-icon"/></Link>
            </div>
        </div>
      </div>
    
    )
}

export default Nav1