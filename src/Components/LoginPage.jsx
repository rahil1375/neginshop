import React, { useState } from "react";
function LoginPage(){
    const [isFirstVisible,setIsFirstVisible]=useState(true);
    const [isSecondVisible,setIsSecondVisible]=useState(false);
    const toggleShow=()=>{
        setIsFirstVisible((prev)=>!prev);
        setIsSecondVisible((prev)=>!prev);
    }
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
                    
                <input type="button" value={"ثبت نام"} 
                onClick={()=>{document.getElementById('waves').classList.remove("fle");toggleShow()}}/>
                </div>
              

                
              }
              {isFirstVisible && <input type="button" value={"ورود"} 
              onClick={()=>{document.getElementById('waves').classList.add("fle");toggleShow()}}/>
              }
              </div>
            </div>
            
            <div id="form1" className="log" style={{zIndex:"0"}} >
                <span><label htmlFor="">ایمیل</label><input type="email" /></span>
                <span><label htmlFor="">پسورد</label><input type="password" /></span>
                <span><button type="submit">ورود</button></span>
            </div>
            <div id="form2" className="sign" style={{zIndex:"0"}} >
                <span><label htmlFor="">نام</label><input type="text" /></span>
                <span><label htmlFor="">ایمیل</label><input type="email" /></span>
                <span><label htmlFor="">پسورد</label><input type="password" /></span>
                <span><button type="submit">ثبت نام</button></span>
            </div>
            </div>
       </div>
    )
}

export default LoginPage