
"use client"
import React from "react";
import Link from "next/link";
import "@/styles/event-card.css";
import { CalendarRange, MapPin } from 'lucide-react';
type EventCardProps = {
    event: {
        type: string;
        title: string;
        description: string;
        date: string;
        location: string;
        background_image_url: string;
        learn_more_link: string;
    };
};

export function CardEvent({ event }: EventCardProps) {
    return (

        <>


            <div className=" w-full xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto  relative p-4 border-2 bg-container bg-container-overlay border-violet-500 border-t-2 border-t-violet-500  flex flex-col   rounded-2xl"
              style={{
                backgroundImage: `url(${event.background_image_url || "/fallback-image.jpg"})`,
              }}
             >
                <div className="absolute w-full h-full top-0 left-0 bg-black/50 z-1 border-1 border-violet-500 rounded-3xl"></div>
                {/* Upcoming Events Section */}
                {/* relative z-2 on every component to make them above this black film */}
                <div className="w-full relative z-32  py-3 xl:py-2">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 h-full">
                        <div className="flex justify-center items-center col-span-1 lg:col-span-1 md:col-span-1">
                            <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-semibold rounded-lg text-xl px-5 py-2.5 text-center me-2 lg:mb-2">
                                {event.type}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="flex flex-col gap-1 text-left justify-center items-start lg:max-w-7xl  mx-auto py-2 m-2 relative z-32">
                    <h2 className="text-4xl font-bold mb-3 text-white">{event.title}</h2>
                    <p className="mb-6 text-white text-base max-md:pl-4 max-md:max-w-xs lg:text-lg">
                        {event.description}
                    </p>
                    <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-semibold rounded-lg text-xl px-5 py-2.5 mb-2">
                        <Link href={event.learn_more_link}>Learn more</Link>
                    </button>
                </div>

                {/* Bottom Section */}
                <div className="w-full pt-2 pb-1 relative z-32">
                    <div className="grid grid-cols-1  md:grid-cols-2 2xl:grid-cols-3 gap-4">
                        <div className="hidden md:block"></div>
                        <div className="hidden 2xl:block"></div>
                        <div className="col-span-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-1 ">
                            <div className="text-white border-[3px] border-white font-normal rounded-full text-xs lg:text-sm px-5 lg:px-3 py-1 text-center inline-flex items-center md:ml-1 mr-1 whitespace-nowrap">
                                <CalendarRange className="w-6 h-6 me-2" />
                                {event.date}
                            </div>
                            <div className="text-white border-[3px] border-white font-normal rounded-full text-xs lg:text-sm px-5 lg:px-3 py-1 text-center inline-flex items-center md:ml-1 mr-1 whitespace-nowrap">
                                <MapPin className="w-6 h-6 me-2" />
                                {event.location}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default CardEvent;
