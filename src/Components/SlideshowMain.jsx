// src/components/SlideshowMain.jsx
import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import image1 from "../images/header-1.jpg"
import image2 from "../images/header-2.jpg"
import { IoIosArrowForward } from "react-icons/io";    
import { IoIosArrowBack } from "react-icons/io";
const images = [
    image1,
    image2
  ];
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  };
function SlideshowMain(){
    const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const imageIndex = ((page % images.length) + images.length) % images.length;

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        paginate(1);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [page, isHovered]);

  return (
    
        <div className="scontainer">
      <button className="next" onClick={() => paginate(1)}><IoIosArrowForward style={{fontSize:"4vw"}} /></button>
      <div className="gallery"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode={'wait'} initial={false} custom={direction}>
          <motion.img
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1}}
            delay={0.9}
            className="item"
          />
        </AnimatePresence>
      </div>
      
      <button className="prev" onClick={() => paginate(-1)}><IoIosArrowBack style={{fontSize:"4vw"}}/></button>
      
    </div>
    
  );
}

export default SlideshowMain;