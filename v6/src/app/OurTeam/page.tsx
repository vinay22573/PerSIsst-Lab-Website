"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { teamMembers } from '@/data/positionsData';
import PeopleCard from '@/components/PeopleCard';
function OurTeam() {
    return (
        <section className='bg-slate-950'>
            <div className=' h-[25vh]'></div>
            <div className="mb-8">
                <h1 className="py-5 text-white text-center font-poppins text-4xl md:text-5xl font-medium leading-normal self-stretch bg-gray-950">
                    Our <span className="text-purple-500"> Team</span>
                </h1>
            </div>
            <div className="w-full px-2 md:w-[1280px] mx-auto rounded-lg overflow-hidden  relative z-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 place-items-center justify-items-center">

                    {/* Card Component */}
                    {teamMembers.map((member, index) => (
                        <PeopleCard key={index} {...member} />
                    ))}

                    {/* Repeat Card Component if needed */}
                </div>
            </div>
        </section>
    );
}

export default OurTeam;
