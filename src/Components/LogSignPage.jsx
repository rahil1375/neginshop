import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";


function LogSignPage(){

    const navigate=useNavigate();

    const [isFirstVisible,setIsFirstVisible]=useState(true);
    const [isSecondVisible,setIsSecondVisible]=useState(false);

    const[loginData,setLoginData]=useState({email:"",password:""});
    const[signupData,setSignupData]=useState({name:"",email:"",password:""});

    const toggleShow=()=>{
        setIsFirstVisible((prev)=>!prev);
        setIsSecondVisible((prev)=>!prev);
    }

    const handleLogin=async (e)=>{
        e.preventDefault();
        console.log("login");
        try{
            const res=await fetch("http://localhost:5000/api/auth/login",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(loginData),
            });
            const data=await res.json();
            if(res.ok){
                localStorage.setItem("token",data.token);
                
                // window.location.href= data.isAdmin ? "/admin" : "/dashboard";
                //دریافت اطلاعات کاربر
                const userRes = await fetch('http://localhost:5000/api/auth/me',{
                    headers: { 'Authorization':`Bearer ${data.token}`}
                });
                const userData=await userRes.json();

                if (userData.role === "admin" || userData.isAdmin){
                    // navigate('/admin');
                    localStorage.setItem("user",JSON.stringify(userData));
                    window.location.href="/dashboard";
                }else{
                    // navigate('/dashboard');
                    localStorage.setItem("user",JSON.stringify(userData));
                     window.location.href="/dashboard"
                }

                console.log(userData)
                // alert("ورود موفق");
                // window.location.href="/";
            }else{
                alert(data.message || "ورود ناموفق");
            }}catch(err){
                alert("خطا در اتصال به سرور");
            }
        };
        const handleSignup= async (e)=>{
            e.preventDefault();
            
            try{
                const res=await fetch("http://localhost:5000/api/auth/signup",{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(signupData),
                });
                const data=await res.json();
                if(res.ok){
                    alert("ثبت نام موفق");
                    document.getElementById('waves').classList.add('fle');
                    toggleShow();
                }else{
                    alert(data.message || "ثبت نام ناموفق");
                }
            }catch(err){
                alert("خطا در اتصال به سرور");
            }
        };
    return(
       <div className="lcnt">
        <div id="logsign" className="logsign" 
        style={{position:"relative",zIndex:"0"}}>
            
            <div className="waves" id="waves" 
            style={{position:"absolute",display:"flex",flexDirection:"row",
            width:"100%",height:"100%",zIndex:"1",visibility:"hidden"}}>
            <div className="wave1" id="wave1" >
              { isSecondVisible &&

                <div className="">
                    
                <input className="btnsign" type="button" value={"ثبت نام"} 
                onClick={()=>{document.getElementById('waves').classList.remove("fle");toggleShow();}}/>
                
                </div>
              

                
              }
              {isFirstVisible && <input className="btnlog" type="button" value={"ورود"} 
              onClick={()=>{document.getElementById('waves').classList.add("fle");toggleShow();}}/>
              }
              </div>
            </div>
            
           
            <form id="form1" className="log" style={{zIndex:"0"}} onSubmit={handleLogin}>
                <span><label htmlFor="">ایمیل</label>
                <input type="email" 
                       name="email"
                       value={loginData.email}
                       onChange={(e)=>setLoginData({...loginData,email:e.target.value})} required/></span>
                <span><label htmlFor="">پسورد</label>
                <input type="password" 
                       name="password"
                       value={loginData.password}
                       onChange={(e)=>setLoginData({...loginData,password:e.target.value})} required/></span>
                <span className="spb"><button type="submit">ورود</button></span>
                <span className="spb-mob btnsign-mobile"><button type="button" onClick={()=>{document.getElementById("form1").classList.remove("show");document.getElementById("form2").classList.remove("hide");document.getElementById("form1").classList.toggle("form-flipped");}}>ثبت نام</button></span>
            </form>
           
            <form id="form2" className="sign" style={{zIndex:"0"}} onSubmit={handleSignup}>
                <span><label htmlFor="">نام</label>
                <input type="text"
                       name="name"
                       value={signupData.name}
                       onChange={(e)=>setSignupData({...signupData,name:e.target.value})} required/></span>
                <span><label htmlFor="">ایمیل</label>
                <input type="email"
                       name="email"
                       value={signupData.email}
                       onChange={(e)=>setSignupData({...signupData,email:e.target.value})} required/></span>
                <span><label htmlFor="">پسورد</label>
                <input type="password"
                       name="password"
                       value={signupData.password}
                       onChange={(e)=>setSignupData({...signupData,password:e.target.value})} required/></span>
                <span className="spb"><button type="submit">ثبت نام</button></span>
                <span className="spb-mob btnlog-mobile"><button type="button" onClick={()=>{document.getElementById("form1").classList.add("show");document.getElementById("form2").classList.add("hide");document.getElementById("form1").classList.toggle("form-flipped");}} >ورود</button></span>
            </form>
            </div>
       </div>
    )
}

export default LogSignPage