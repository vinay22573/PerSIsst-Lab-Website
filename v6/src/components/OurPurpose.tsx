"use client";
// main h- is at hero hightlight .tsc
import React from 'react'
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { AnimatePresence, motion } from "framer-motion";
import { OurPrpose } from "@/data/positions";
import '@/styles/purpose-card.css';
import Image from "next/image";
const Purpose = () => {
    return (
        <main className=" bg-slate-950 antialiased bg-grid-white/[0.02] ">

            
            <div className='w-full flex  flex-col justify-center  gap-20'>
            {/* <OurPurpose /> */}
            {/* Card_div Replaced by OurPurposeCard */}
            <OurPurposeCard />
            </div>
        </main>
    )
}


const OurPurpose = () => {
    const words = [
        {
            text: " ",
            className: "text-purple-500",
        },
        {
            text: "Our",
        },
        {
            text: "Purpose",
            className: "text-purple-500",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center">
            {/* 15 to 5 rem height */}
            <TypewriterEffectSmooth words={words} />
            <p className=" pt-3 font-normal text-white text-sm text-center md:text-lg  max-w-screen-lg mx-auto max-md:px-4">
                The Lab aims at facilitating cutting-edge research in the field of Ubiquitous Computing, Pervasive Sensing, Artificial Intelligence and allied domains to solve real-world problems in the interdisciplinary domains of Cognitive Psychology, Health & Wellness, Smart Space, Inclusive and Accessible Assistive System design, and related areas.
            </p>
        </div>
    );
}




interface IconCardProps {
    iconSrc: string; // Source for the icon image
    title: string;   // Title of the card
    description: string; // Description text for the card
}

const IconCard: React.FC<IconCardProps> = ({ iconSrc, title, description }) => {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, card: HTMLDivElement) => {
        const { left, top } = card.getBoundingClientRect();
        const x = e.clientX - left; // Mouse X relative to card
        const y = e.clientY - top;  // Mouse Y relative to card
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    };

    return (
        <div className="iconcard">
            <div className="icontainer">
                <div
                    className="icard"
                    onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                >
                    <div className="icontent">
                        <img className="iicon" src={iconSrc} alt={`${title} Icon`} />
                        <h3 className="ititle">{title}</h3>
                        <p className="idescription">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};



const OurPurposeCard = () => {
    return (

        <div className="py-5 flex flex-col lg:flex-row items-center justify-center bg-slate-950  w-full gap-10 pb-10 mx-auto px-20">
            {OurPrpose.map((item, index) => (
                <IconCard
                    key={index}
                    iconSrc={item.iconSrc}
                    title={item.title}
                    description={item.description} />
            ))
            }
        </div>
    )
}















export default Purpose;
