import React from "react"
import h1 from "../images/header-1.jpg"
import h2 from "../images/header-2.jpg"
function Slideshow(){
    return(

        <div className="" style={{padding:"2vw 4vw 2vw 4vw"}}>
       <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators" style={{display:"flex",alignItems:"center",marginBottom:"3vw"}}>
    <button style={{width:"1vw",height:"1vw",border:"1px solid transparent",borderRadius:"50px"}}  type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button style={{width:"1vw",height:"1vw",border:"1px solid transparent",borderRadius:"50px"}} type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
    
  </div>
  <div className="carousel-inner" style={{borderRadius:"2vw"}}>
    <div style={{transition: "2s ease-in-out"}} className="carousel-item active" data-bs-interval="4000">
      <img src={h1} className="d-block w-100" alt="..."/>
     
    </div>
    <div style={{transition: "2s ease-in-out"}} className="carousel-item" data-bs-interval="4000">
      <img src={h2} className="d-block w-100" alt="..."/>
      
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span style={{width:"3vw",height:"3vw"}} className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button  className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span  style={{width:"3vw",height:"3vw"}} className="carousel-control-next-icon" aria-hidden="true"></span>
    <span  className="visually-hidden">Next</span>
  </button>
</div>
</div>
    )
}

export default Slideshow