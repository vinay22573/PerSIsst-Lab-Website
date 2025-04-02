"use client";
// main h- is at hero hightlight .tsc

import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils"
import { Spotlight } from "@/components/ui/Spotlight";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



const FAQ = () => {
    return (
        <div
            className="h-auto bg-gray-900  bg-grid-white/[0.02] md:h-[50rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 z-5"
        >

            <Spotlight
                className="-top-24 left-0 md:left-60 md:-top-20"
                fill="fuchsia"
            />

            <img
                src="/bg/Ellipse_Left.png"
                alt="ellipse-left"
                className="absolute bottom-0 left-0 z-10"
            />
            <img
                src="/bg/Ellipse_Right.png"
                alt="ellipse-right"
                className="absolute bottom-0 right-0 z-10"
            />
            <img
                src="/bg/Ellipse_down.png"
                alt="ellipse-down"
                className="absolute bottom-0 left-0 w-full h-auto z-10"
            />

            <div className="p-4 relative z-10 w-full text-left" >
                <h1
                    className="mt-10 lg:mt-20 text-center md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                >FAQs</h1>

                <Accordion type="single" collapsible className="max-md:px-4 lg:mx-60  ">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What is the main focus of the PerSIsst Lab?</AccordionTrigger>
                        <AccordionContent>
                            The PerSIsst Lab focuses on developing intelligent assistive systems for smart living. Our research spans pervasive sensing, artificial intelligence, cognitive psychology, and inclusive system design to solve real-world challenges in health, wellness, and daily living.  
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Who founded the PerSIsst Lab?</AccordionTrigger>
                        <AccordionContent>
                            The lab was founded by <Link href={"/OurTeam"} style={{ color: 'pink' }}>Dr. Pragma Kar</Link>, with a vision to innovate human-centric solutions that integrate smart technologies into everyday life.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>What kind of research is conducted at the lab?</AccordionTrigger>
                        <AccordionContent>
                            The PerSIsst Lab specializes in pervasive sensing, ubiquitous computing, artificial intelligence, cognitive psychology, and developing inclusive assistive technologies for smart living.        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Can I visit the PerSIsst Lab?</AccordionTrigger>
                        <AccordionContent>
                            Yes, visits can be arranged by appointment. Please contact us through the <Link href={"/ContactUs"} style={{ color: 'pink' }}>Contact Us</Link> section to schedule a visit.   </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger> I would like to connect with a lab member for a talk/interview at my institution. How can I schedule a meeting?</AccordionTrigger>
                        <AccordionContent>
                            Please reach out through the <Link href={"/Connect/ContactUs"} style={{ color: 'pink' }}>Contact Us</Link> section with your request, and we will connect you with the appropriate lab member for scheduling.      </AccordionContent>   </AccordionItem>
                </Accordion>


            </div>

        </div>

    )
}





export default FAQ





