'use client';
import { button, div } from 'framer-motion/client'
import { CircleChevronLeft, CircleChevronRight ,CircleDot,Circle} from 'lucide-react';
import '@/styles/img-slider-img.css';
import React,{useState} from 'react'
type ImageSliderProps = {
    images: {
        url: string
        alt: string
    }[]
}

function ImageSlider({images}:ImageSliderProps) {
    const [imageIndex,setImageIndex] = useState(0)
    function nextSlide(){
        setImageIndex((imageIndex + 1) % images.length);
    }
    function prevSlide(){
        setImageIndex((imageIndex - 1 + images.length) % images.length);
    }
  return (
   
    <section aria-label='Carousel' style={{width:"100%", height:"100%", position:'relative'}}>
        <div style={{width:"100%", height:"100%",display:"flex", overflow:"hidden" }}>
            {/* Change Required here. */}
            {images.map(({url,alt},index) => (
                <img key={url} src={url} alt={alt} aria-hidden={imageIndex!=index} className='img-slider-img' style={{translate:`${-100*imageIndex}%`, borderRadius: '10px' }}/>
            ))}
        </div>

        {/* Things that are not required to be changed. */}
        <button onClick={prevSlide} className='img-slider-btn' style={{left:0}} aria-label={`View Prev Slide `}><CircleChevronLeft/> </button>
        <button onClick={nextSlide} className='img-slider-btn' style={{right:0}} aria-label="View Next Slide"><CircleChevronRight/></button>
        <div style={{
            position: 'absolute',
            bottom: "0.5rem",
            left: "50%",
            translate: "(-50%,0)",
            display: 'flex',
            gap: '0.5rem',
        }}>
            {/* Change Required here. */}
            {images.map((_,index) => (
                <button key={index} aria-label={`View Prev Slide ${index+1}`} className='img-slider-dot-btn' onClick={()=> setImageIndex(index)}>
                    {index ==imageIndex? <CircleDot aria-hidden/>: <Circle aria-hidden/>}  
                </button>
            ))}
        </div>
    </section>
  )
}


export default ImageSlider;