// src/components/Nav1.jsx
import React, { useEffect, useState ,useRef} from "react";
import { FaSearch } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import imgl from '../assets/logo2.png'
import { data, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {buildAvatarUrl} from "../utils/avatar"
function Nav1(){
  //   const buildAvatarUrl = (avatar) => {
  //   const base = "http://localhost:5000";
  //   if (!avatar || avatar === "avatar" || avatar === "undefined" || avatar === "null") {return `${base}/avatars/default.png`;}
  //   if (avatar.startsWith("http")) return avatar;
  //   if (avatar.startsWith("/")) return `${base}${avatar}`;
  //   return `${base}/avatars/${avatar}`;
  // };

    const[open,setOpen]=useState(false);
    const navigate=useNavigate();
    // const userr=JSON.parse(localStorage.getItem("user"));
    const menuRef=useRef();
    const handleLogout=()=>{
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate('/');
      window.location.reload();
    }
    useEffect(()=>{
      const handleClickOutside=(event)=>{
        if(menuRef.current && !menuRef.current.contains(event.target)){
          setOpen(false);
        }
      }
      document.addEventListener("mousedown",handleClickOutside);
      return()=>{
        document.removeEventListener("mousedown",handleClickOutside);
      }

    
    },[])
    
   

    const [user,setUser]=useState(null);
    useEffect(()=>{
     const token=localStorage.getItem("token");
     if(token){
      fetch("http://localhost:5000/api/auth/me",{
        headers: { "Authorization": `Bearer ${token}` },}).then((res)=>res.json())
      .then((data)=>setUser(data))
      .catch((err)=>console.log(err));}
    },[]);

     useEffect(()=>{
        const handleUserUpdate=()=>{
        const updatedUser=JSON.parse(localStorage.getItem("user") || "{}");
        setUser(updatedUser);
      };
      window.addEventListener("userUpdated",handleUserUpdate);
      return()=>window.removeEventListener("userUpdated",handleUserUpdate);
    },[])
    return(
    
        <div className="nav1" style={{position:"sticky",top:"0px",zIndex:"1004"}}>
        <div className="logoContainer">
          <a className="navbar-brand" href="#" style={{marginRight:"6vw",cursor:"pointer"}}>
            <img className="logoimg" src={imgl} alt="logo"/>
          </a>
          
        </div>
        <div className="wspace"></div>
        <div className="left-nav1">
          <div className="search-box"><input placeholder="جستجو محصول..." className="search-bar" type="search"></input><FaSearch style={{fontSize:"20px"}} /></div>

          {user ? (
            <div className="user-menu-wrapper" ref={menuRef}
            onClick={()=>setOpen(!open)} style={{display:"flex",alignItems:"center",gap:"10px",width:"15vw",whiteSpace:"nowrap",margin:"3vw"}}>
              <div className="user-avatar">
                <img src={buildAvatarUrl(user?.avatar)} alt="avatar" style={{width:"3.3vw",height:"3.3vw",borderRadius:"50%"}} />
              <span  >{user.name}</span>
              </div>
              
              {open && (
                <div className="user-dropdown">
                  <button onClick={()=>navigate('dashboard/manageProfile')}>مدیریت حساب</button>
                  <button onClick={handleLogout}>خروج</button>
                </div>
              )}
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