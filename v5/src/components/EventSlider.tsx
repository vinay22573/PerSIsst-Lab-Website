'use client';
import { button, div } from 'framer-motion/client'
import { CircleChevronLeft, CircleChevronRight ,CircleDot,Circle} from 'lucide-react';
import '@/styles/img-slider-img.css';
import React,{useState} from 'react'
import Image from 'next/image'


type Event = {
    type: string,
    title: string,
    description: string,
    date: string,
    location: string,
    background_image_url: string
}

type EventsProps = {
    events: Event[]
}

function Events({events = []}: EventsProps) {
    const [eventIndex, setEventIndex] = useState(0);
    
    function nextSlide() {
        setEventIndex((eventIndex + 1) % events.length);
    }
    
    function prevSlide() {
        setEventIndex((eventIndex - 1 + events.length) % events.length);
    }

    if (events.length === 0) {
        return <div>No events available</div>;
    }

    return (
        <section aria-label='Carousel' style={{ width: "100%", height: "100%", position: 'relative' }}>
            <div style={{ width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
                {/* Change Required here. */}
                {events.map(({ background_image_url, title, description, date, location, type }, index) => (
                    
                    <div
                        key={background_image_url}
                        aria-hidden={eventIndex !== index}
                        style={{
                            transform: `translateX(${-100 * eventIndex}%)`,
                            width: "100%",
                            height: "100%",
                            flexShrink: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundImage: `url(${background_image_url})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '10px',
                            padding: '20px',
                            color: 'white',
                            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.9)'
                        }}
                    >
                        <h2 style={{ fontSize: '2rem', textAlign: 'center' }}>{title}</h2>
                        <p style={{ maxWidth: '80%', textAlign: 'center', marginBottom: '1rem' }}>{description}</p>
                        <p><strong>Date:</strong> {date}</p>
                        <p><strong>Location:</strong> {location}</p>
                        <p><strong>Type:</strong> {type}</p>
                    </div>
                ))}
            </div>

            {/* Things that are not required to be changed. */}
            <button onClick={prevSlide} className='img-slider-btn' style={{ left: 0 }} aria-label={`View Prev Slide `}><CircleChevronLeft /> </button>
            <button onClick={nextSlide} className='img-slider-btn' style={{ right: 0 }} aria-label="View Next Slide"><CircleChevronRight /></button>
            <div style={{
                position: 'absolute',
                bottom: "0.5rem",
                left: "50%", transform: "translateX(-50%)",
                translate: "(-50%,0)",
                display: 'flex',
                gap: '0.5rem',
            }}>
                {/* Change Required here. */}
                {events.map((_, index) => (
                    <button key={index} aria-label={`View Slide ${index + 1}`} className='img-slider-dot-btn' onClick={() => setEventIndex(index)}>
                        {index === eventIndex ? <CircleDot aria-hidden /> : <Circle aria-hidden />}
                    </button>
                ))}
            </div>
        </section>
    )
}

export default Events;

