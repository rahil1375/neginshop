import React from 'react'
import { IoIosArrowForward } from "react-icons/io";    
import { IoIosArrowBack } from "react-icons/io";
import img1 from'../images/shapetkhf.png'
function Newest() {
const buttonRight = document.getElementById('slideRight');
    const buttonLeft = document.getElementById('slideLeft');
    function  scrollLeft() {
        document.getElementById('containn').scrollLeft -= document.getElementById('slideItem').offsetWidth-30;
        
      };
      function scrollright () {
        document.getElementById('containn').scrollLeft += document.getElementById('slideItem').offsetWidth+30;
      };
    return (
        <div style={{padding:"0 4vw 2vw 4vw",display:"flex",flexDirection:"column"}}>
         <div style={{padding:"2vw 0vw 0vw 0vw"}}>
         
             <div className="fos head" style={{textAlign:"center",backgroundColor:"#a566ff",padding:"3vw 0vw 4vw 0vw",objectFit:"cover"}}>
             جدید ترین محصولات
             </div>
            
         </div>
        <div style={{display:"flex",alignItems:"center"}}>
      <div onClick={scrollLeft} id="Left" style={{cursor:"pointer",textAlign:"center",backgroundColor:"#a566ff",height:"27vw",display:"flex",alignItems:"center",justifyContent:"center"}}><IoIosArrowBack style={{fontSize:"4vw"}}/></div>
    <div id="containn" className='amazoffer' >
      <div className="" style={{position:"relative"}}>
        <img src={img1} style={{position:"absolute",width:"11vw",height:"9.5vw",left:"12.87vw",top:"-2.8vw"}} alt="" />
      
        <p style={{position:"absolute",width:"7vw",height:"2.5vw",borderRadius:"1.5vw 1vw 1vw 1.5vw",left:"15vw",display:"flex",alignItems:"center",justifyContent:"center",direction:"rtl",fontSize:"1.2vw"}}>50%تخفیف</p>
        
        <img id='slideItem' style={{width:"21vw",height:"21.5vw",margin:"0 1vw 0 1vw",borderRadius:"1vw"}}  src='../src/images/h1.jpg'/>
        </div>  
        <div className="" style={{position:"relative"}}>
        <img src={img1} style={{position:"absolute",width:"11vw",height:"9.5vw",left:"12.87vw",top:"-2.8vw"}} alt="" />
      
        <p style={{position:"absolute",width:"7vw",height:"2.5vw",borderRadius:"1.5vw 1vw 1vw 1.5vw",left:"15vw",display:"flex",alignItems:"center",justifyContent:"center",direction:"rtl",fontSize:"1.2vw"}}>50%تخفیف</p>
        
        <img style={{width:"21vw",height:"21.5vw",margin:"0 1vw 0 1vw",borderRadius:"1vw"}}  src='../src/images/h1.jpg'/>
        </div>
        <div className="" style={{position:"relative"}}>
        <img src={img1} style={{position:"absolute",width:"11vw",height:"9.5vw",left:"12.87vw",top:"-2.8vw"}} alt="" />
      
        <p style={{position:"absolute",width:"7vw",height:"2.5vw",borderRadius:"1.5vw 1vw 1vw 1.5vw",left:"15vw",display:"flex",alignItems:"center",justifyContent:"center",direction:"rtl",fontSize:"1.2vw"}}>50%تخفیف</p>
        
        <img style={{width:"21vw",height:"21.5vw",margin:"0 1vw 0 1vw",borderRadius:"1vw"}}  src='../src/images/h1.jpg'/>
        </div>
        <div className="" style={{position:"relative"}}>
        <img src={img1} style={{position:"absolute",width:"11vw",height:"9.5vw",left:"12.87vw",top:"-2.8vw"}} alt="" />
      
        <p style={{position:"absolute",width:"7vw",height:"2.5vw",borderRadius:"1.5vw 1vw 1vw 1.5vw",left:"15vw",display:"flex",alignItems:"center",justifyContent:"center",direction:"rtl",fontSize:"1.2vw"}}>50%تخفیف</p>
        
        <img style={{width:"21vw",height:"21.5vw",margin:"0 1vw 0 1vw",borderRadius:"1vw"}}  src='../src/images/h1.jpg'/>
        </div>
        <div className="" style={{position:"relative"}}>
        <img src={img1} style={{position:"absolute",width:"11vw",height:"9.5vw",left:"12.87vw",top:"-2.8vw"}} alt="" />
      
        <p style={{position:"absolute",width:"7vw",height:"2.5vw",borderRadius:"1.5vw 1vw 1vw 1.5vw",left:"15vw",display:"flex",alignItems:"center",justifyContent:"center",direction:"rtl",fontSize:"1.2vw"}}>50%تخفیف</p>
        
        <img style={{width:"21vw",height:"21.5vw",margin:"0 1vw 0 1vw",borderRadius:"1vw"}}  src='../src/images/h1.jpg'/>
        </div>
        <div className="" style={{position:"relative"}}>
        <img src={img1} style={{position:"absolute",width:"11vw",height:"9.5vw",left:"12.87vw",top:"-2.8vw"}} alt="" />
      
        <p style={{position:"absolute",width:"7vw",height:"2.5vw",borderRadius:"1.5vw 1vw 1vw 1.5vw",left:"15vw",display:"flex",alignItems:"center",justifyContent:"center",direction:"rtl",fontSize:"1.2vw"}}>50%تخفیف</p>
        
        <img style={{width:"21vw",height:"21.5vw",margin:"0 1vw 0 1vw",borderRadius:"1vw"}}  src='../src/images/h1.jpg'/>
        </div>
        <div className="" style={{position:"relative"}}>
        <img src={img1} style={{position:"absolute",width:"11vw",height:"9.5vw",left:"12.87vw",top:"-2.8vw"}} alt="" />
      
        <p style={{position:"absolute",width:"7vw",height:"2.5vw",borderRadius:"1.5vw 1vw 1vw 1.5vw",left:"15vw",display:"flex",alignItems:"center",justifyContent:"center",direction:"rtl",fontSize:"1.2vw"}}>50%تخفیف</p>
        
        <img style={{width:"21vw",height:"21.5vw",margin:"0 1vw 0 1vw",borderRadius:"1vw"}}  src='../src/images/h1.jpg'/>
        </div>
        <div className="" style={{position:"relative"}}>
        <img src={img1} style={{position:"absolute",width:"11vw",height:"9.5vw",left:"12.87vw",top:"-2.8vw"}} alt="" />
      
        <p style={{position:"absolute",width:"7vw",height:"2.5vw",borderRadius:"1.5vw 1vw 1vw 1.5vw",left:"15vw",display:"flex",alignItems:"center",justifyContent:"center",direction:"rtl",fontSize:"1.2vw"}}>50%تخفیف</p>
        
        <img style={{width:"21vw",height:"21.5vw",margin:"0 1vw 0 1vw",borderRadius:"1vw"}}  src='../src/images/h1.jpg'/>
        </div>
        <div className="" style={{position:"relative"}}>
        <img src={img1} style={{position:"absolute",width:"11vw",height:"9.5vw",left:"12.87vw",top:"-2.8vw"}} alt="" />
      
        <p style={{position:"absolute",width:"7vw",height:"2.5vw",borderRadius:"1.5vw 1vw 1vw 1.5vw",left:"15vw",display:"flex",alignItems:"center",justifyContent:"center",direction:"rtl",fontSize:"1.2vw"}}>50%تخفیف</p>
        
        <img style={{width:"21vw",height:"21.5vw",margin:"0 1vw 0 1vw",borderRadius:"1vw"}}  src='../src/images/h1.jpg'/>
        </div>
        <div className="" style={{position:"relative"}}>
        <img src={img1} style={{position:"absolute",width:"11vw",height:"9.5vw",left:"12.87vw",top:"-2.8vw"}} alt="" />
      
        <p style={{position:"absolute",width:"7vw",height:"2.5vw",borderRadius:"1.5vw 1vw 1vw 1.5vw",left:"15vw",display:"flex",alignItems:"center",justifyContent:"center",direction:"rtl",fontSize:"1.2vw"}}>50%تخفیف</p>
        
        <img style={{width:"21vw",height:"21.5vw",margin:"0 1vw 0 1vw",borderRadius:"1vw"}}  src='../src/images/h1.jpg'/>
        </div>
        <div className="" style={{position:"relative"}}>
        <img src={img1} style={{position:"absolute",width:"11vw",height:"9.5vw",left:"12.87vw",top:"-2.8vw"}} alt="" />
      
        <p style={{position:"absolute",width:"7vw",height:"2.5vw",borderRadius:"1.5vw 1vw 1vw 1.5vw",left:"15vw",display:"flex",alignItems:"center",justifyContent:"center",direction:"rtl",fontSize:"1.2vw"}}>50%تخفیف</p>
        
        <img style={{width:"21vw",height:"21.5vw",margin:"0 1vw 0 1vw",borderRadius:"1vw"}}  src='../src/images/h1.jpg'/>
        </div>
        <div className="" style={{position:"relative"}}>
        <img src={img1} style={{position:"absolute",width:"11vw",height:"9.5vw",left:"12.87vw",top:"-2.8vw"}} alt="" />
      
        <p style={{position:"absolute",width:"7vw",height:"2.5vw",borderRadius:"1.5vw 1vw 1vw 1.5vw",left:"15vw",display:"flex",alignItems:"center",justifyContent:"center",direction:"rtl",fontSize:"1.2vw"}}>50%تخفیف</p>
        
        <img style={{width:"21vw",height:"21.5vw",margin:"0 1vw 0 1vw",borderRadius:"1vw"}}  src='../src/images/h1.jpg'/>
        </div>
        <div className="" style={{position:"relative"}}>
        <img src={img1} style={{position:"absolute",width:"11vw",height:"9.5vw",left:"12.87vw",top:"-2.8vw"}} alt="" />
      
        <p style={{position:"absolute",width:"7vw",height:"2.5vw",borderRadius:"1.5vw 1vw 1vw 1.5vw",left:"15vw",display:"flex",alignItems:"center",justifyContent:"center",direction:"rtl",fontSize:"1.2vw"}}>50%تخفیف</p>
        
        <img style={{width:"21vw",height:"21.5vw",margin:"0 1vw 0 1vw",borderRadius:"1vw"}}  src='../src/images/h1.jpg'/>
        </div>
    </div>
    <div onClick={scrollright} id="Right" style={{cursor:"pointer",backgroundColor:"#a566ff",height:"27vw",display:"flex",alignItems:"center",justifyContent:"center"}}><IoIosArrowForward style={{fontSize:"4vw"}} /></div>
    </div>
</div>
    )
}
export default Newest