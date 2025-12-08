// src/components/Footer.jsx
import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { PiNumberCircleSevenLight } from "react-icons/pi";
import { PiDesktopLight } from "react-icons/pi";
import logo from '../images/logo.png'
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
function Footer(){
    return(
        <div className="cntn">
            <div className=""  style={{border:"1px solid #cfcfcf", width:"100%",margin:"auto"}}></div>
            <div className="fl" >
           
           <div className="hp">
               <div className=""><BsBoxSeam className="ii"/></div>
               <div className="" style={{padding:"1vw"}}>
                   <div className="hh">ارسال فوری</div>
               <div className="dd">ارسال در کمترین زمان</div>
               </div>
          </div>
          <div className="hp">
               <div className=""><HiOutlineShieldCheck className="ii"/></div>
               <div className="" style={{padding:"1vw"}}>
                   <div className="hh">ضمانت کیفیت</div>
               <div className="dd">ضمانت محصولات</div>
           </div>
          
          </div>
          <div className="hp">
               <div className=""><PiNumberCircleSevenLight className="ii"/></div>
               <div className="" style={{padding:"1vw"}}>
                   <div className="hh">پشتیبانی</div>
               <div className="dd">7 روز هفته</div>
           </div>
          
          </div>
          <div className="hp" >
               <div className=""><PiDesktopLight className="ii"/></div>
               <div className="" style={{padding:"1vw"}}>
                   <div className="hh">طراحی خلاق</div>
               <div className="dd">بهترین قیمت طراحی</div>
           </div>
          
          </div>
       </div>
       <div className=""  style={{border:"1px solid #cfcfcf", width:"90vw",margin:"auto"}}></div>
       <div className="fl fl2">
           
           <div className="hp hp2">
               
               <div className="" >
                   <div className=""><img className="ld" src={logo}></img></div>
               <div className="" style={{fontSize:".9rem"}}>
                <p className="">به فروشگاه اینترنتی نگین خوش آمدید</p>
                <p className="" >اوقات خوشی را برای شما آرزومندیم.</p>
                
               </div>

               </div>
          </div>
          <div className="hp hp2">
               
               <div className="" style={{padding:"1vw"}}>
                   <div className="" style={{fontSize:"1.2rem",paddingBottom:"1vw"}}>ارتباط با ما</div>
               <div className="" style={{fontSize:"1vw"}}>
                <p style={{fontSize:".9rem",display:"flex",gap:"1vw"}}><BsFillTelephoneFill style={{ fontSize:"1.2rem"}}/>09217723950</p>
                <p style={{fontSize:".9rem",display:"flex",gap:"1vw"}}><FaWhatsapp style={{ fontSize:"1.5rem"}}/>09217723950</p>
                <p style={{fontSize:".9rem",display:"flex",gap:"1vw"}}><FaTelegramPlane style={{ fontSize:"1.5rem"}}/>09217723950</p>
               </div>
               <div className="br"  ></div>
               <div className="social">    
                <div className="ss" ><a href="https://t.me/Rkh7528" target="_blank" style={{color:"blue"}}><FaTelegram/></a></div>
                <div className="ss" ><a href="https://instagram.com/rahilkh751" target="_blank" style={{color:"red"}} ><SiInstagram /></a></div>
                <div className="ss" ><a href="https://wa.me/09217723950" target="_blank" style={{color:"green"}}><FaWhatsapp/></a></div>
               </div>
           </div>
          
          </div>
          <div className="hp hp2">
               
               <div className="" style={{padding:"1vw"}}>
                   <div className="" style={{fontSize:"1.2rem"}}>اعتماد الکترونیک</div>
               <div className="" style={{fontSize:"1rem"}}><img src="#" alt="اعتماد الکترونیک"></img></div>
           </div>
          
          </div>
          <div className="hp hp2" >
               
               <div className="" style={{padding:"1vw"}}>
                   <div className="" style={{fontSize:"1.2rem"}}>خدمات</div>
                   <div className="pb" style={{fontSize:"1rem"}}></div>
           </div>
          
          </div>
       </div>
        </div>
        
    )
}
export default Footer