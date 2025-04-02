
"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
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

export function EventCard({ event }: EventCardProps) {
    return (
        // bg-container bg-container-overlay
        <>
            <div className="h-[20vh]">
                This is a dummy div just for the sake of space filling
            </div>
            <div className="p-2  lg:mx-0">


                <div className=" w-full 2xl:max-w-[1280px] mx-auto  relative p-4 border-2 bg-container bg-container-overlay border-violet-500 flex flex-col   rounded-[25px]" style={{ backgroundImage: `url(https://info.smartevals.com/wp-content/uploads/2024/01/image-6-1024x683.jpeg)`, }}>
                    <div className="absolute w-full h-full top-0 left-0 bg-black/50 z-1 border-1 border-violet-500 rounded-[25px]"></div>
                    {/* Upcoming Events Section */}
                    {/* relative z-2 on every component to make them above this black film */}
                    <div className="w-full relative z-2  py-3 xl:py-2">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 h-full">
                            <div className="flex justify-center items-center col-span-1 lg:col-span-1 md:col-span-1">
                                <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-semibold rounded-lg text-xl px-5 py-2.5 text-center me-2 lg:mb-2">
                                    Upcoming Events
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Section */}
                    <div className="flex flex-col gap-1 text-left justify-center items-start lg:max-w-5xl px-3 mx-auto py-2 m-2 relative z-2">
                        <h2 className="text-4xl font-bold mb-3 text-white">Workshop on Cognitive Assistive Technologies</h2>
                        <p className="mb-6 text-white text-base lg:text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi totam distinctio quo corporis nesciunt debitis similique quaerat expedita pariatur. Laboriosam hic recusandae est cum nemo!
                        </p>
                        <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-semibold rounded-lg text-xl px-5 py-2.5 mb-2">
                            <Link href="https://letsbesingle.com">Learn more</Link>
                        </button>
                    </div>

                    {/* Bottom Section */}
                    <div className="w-full pt-2 pb-1 relative z-2">
                        <div className="grid grid-cols-1  md:grid-cols-2 2xl:grid-cols-3 gap-4">
                            <div className="hidden md:block"></div>
                            <div className="hidden 2xl:block"></div>
                            <div className="col-span-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-1 ">
                                <div className="text-white border-[3px] border-white font-normal rounded-full text-xs lg:text-sm px-5 lg:px-3 py-1 text-center inline-flex items-center md:ml-1 mr-1 whitespace-nowrap">
                                    <CalendarRange className="w-6 h-6 me-2" />
                                    12th January 2025
                                </div>
                                <div className="text-white border-[3px] border-white font-normal rounded-full text-xs lg:text-sm px-5 lg:px-3 py-1 text-center inline-flex items-center md:ml-1 mr-1 whitespace-nowrap">
                                    <MapPin className="w-6 h-6 me-2" />
                                    A403 Rnd Buidling IIITD
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="p-2  lg:mx-0">
                {/* This given above div is just used to  */}
                <div className=" bg-blue-600 w-full 2xl:max-w-[1280px] mx-auto relative p-4 border-2 flex flex-col gap-2 rounded-2xl">
                    <div className="w-full relative z-2  py-3 xl:py-2">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 h-full">
                            <div className="flex justify-center items-center col-span-1 lg:col-span-1 md:col-span-1">
                                <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-semibold rounded-lg text-xl px-5 py-2.5 text-center me-2 lg:mb-2">
                                    Upcoming Events
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 text-left justify-center items-start lg:w-[80%] px-3 mx-auto py-2 m-2">
                        <h2 className="text-4xl font-bold mb-3 text-white">Workshop on Cognitive Assistive Technologies</h2>
                        <p className="mb-6 text-white text-base lg:text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi totam distinctio quo corporis nesciunt debitis similique quaerat expedita pariatur. Laboriosam hic recusandae est cum nemo!
                        </p>
                        <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-semibold rounded-lg text-xl px-5 py-2.5 mb-2">
                            <Link href="https://letsbesingle.com">Learn more</Link>
                        </button>
                    </div>
                    <div className="w-full pt-2 pb-1 relative z-2">
                        <div className="grid grid-cols-1  md:grid-cols-2 2xl:grid-cols-3 gap-4">
                            <div className="hidden md:block"></div>
                            <div className="hidden 2xl:block"></div>
                            <div className="col-span-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-1 ">
                                <div className="text-white border-[3px] border-white font-normal rounded-full text-xs lg:text-sm px-5 lg:px-3 py-2 text-center inline-flex items-center md:ml-1 mr-1 whitespace-nowrap">
                                    <CalendarRange className="w-6 h-6 me-2" />
                                    12th January 2025
                                </div>
                                <div className="text-white border-[3px] border-white font-normal rounded-full text-xs lg:text-sm px-5 lg:px-3 py-2 text-center inline-flex items-center md:ml-1 mr-1 whitespace-nowrap">
                                    <MapPin className="w-6 h-6 me-2" />
                                    A403 Rnd Buidling IIITD
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default EventCard;
