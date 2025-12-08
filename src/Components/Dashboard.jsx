import React,{useEffect,useState} from "react";
import imgdash from "../images/dash.jpg"
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {buildAvatarUrl} from "../utils/avatar"
function Dashboard(){

  //   const buildAvatarUrl = (avatar) => {
  //   const base = "http://localhost:5000";
  //   if (!avatar || avatar === "avatar" || avatar === "undefined" || avatar === "null") {return `${base}/avatars/default.png`;}
  //   if (avatar.startsWith("http")) return avatar;
  //   if (avatar.startsWith("/")) return `${base}${avatar}`;
  //   return `${base}/avatars/${avatar}`;
  // };

    const[user,setUser]=useState(JSON.parse(localStorage.getItem("user")));
    useEffect(()=>{
      const handleUserUpdate=()=>{
        const updatedUser=JSON.parse(localStorage.getItem("user"));
        setUser(updatedUser);
      };
      window.addEventListener("userUpdated",handleUserUpdate);
      return()=>window.removeEventListener("userUpdated",handleUserUpdate);
    },[]);
    
    return(
        <div className="">
            <div className="" style={{width:"100%"}}>
                <img src={imgdash} style={{position:"absolute",width:"100%",height:"40vh"}} alt="" />
             <div className="user-avatar" style={{zIndex:"1000",fontSize:"30px",fontWeight:"bold",direction:"rtl",position:"relative",top:"170px",right:"40px"}}>
                <img src={buildAvatarUrl(user?.avatar)} alt="avatar" style={{width:"120px",height:"120px",borderRadius:"50%",border:"2px solid #000000"}} />
              <span  style={{color:"#000000"}}>{user.name}</span>
              </div>
             <div id="mnudash" style={{width:"100%",backgroundColor:"white",height:"10vh",borderRadius:"0 0 50px 50px",display:"flex",gap:"50px",flexDirection:"row-reverse",alignItems:"center",paddingRight:"300px",position:"relative",top:"130px",boxShadow:"0px 9px 37px 3px rgba(225,61,125,0.49)"}}>
                <Link className="mnuditem" to="myOrders" style={{zIndex:"1000",textDecoration:"none",color:"#000000",fontSize:"18px"}}>سفارشات من</Link>
                <Link className="mnuditem" to="editProfile" style={{zIndex:"1000",textDecoration:"none",color:"#000000",fontSize:"18px"}}>ویرایش حساب</Link>
                <Link className="mnuditem" to="favorites" style={{zIndex:"1000",textDecoration:"none",color:"#000000",fontSize:"18px"}}>علاقه مندی ها</Link>
                <Link className="mnuditem" to="markups" style={{zIndex:"1000",textDecoration:"none",color:"#000000",fontSize:"18px"}}>نشانه ها</Link>
                <Link className="mnuditem" to="views" style={{zIndex:"1000",textDecoration:"none",color:"#000000",fontSize:"18px"}}>دیدگاه ها</Link>
                <Link className="mnuditem" to="tickets" style={{zIndex:"1000",textDecoration:"none",color:"#000000",fontSize:"18px"}}>تیکت ها</Link>
                <Link className="mnuditem" to="manageProfile" style={{zIndex:"1000",textDecoration:"none",color:"#000000",fontSize:"18px"}}>مدیریت حساب</Link>
              </div>
            </div>
           <Outlet/>
        </div>
    )
}

export default Dashboard