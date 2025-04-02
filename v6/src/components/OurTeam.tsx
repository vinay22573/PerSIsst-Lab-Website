"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';




function OurTeam() {
    return (
        <section>
            <div className="mb-8">
                <h1 className="py-5 text-white text-center font-poppins text-4xl md:text-5xl font-medium leading-normal self-stretch bg-gray-950">
                    Our <span className="text-purple-500"> Team</span>
                </h1>
            </div>
            <div className="w-full px-2 md:w-[1280px] mx-auto rounded-lg overflow-hidden bg-gray-950 slate-100 relative z-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 place-items-center justify-items-center">
                    
                    {/* Card Component */}
                    <div className="w-[300px] h-[450px] bg-transparent rounded-2xl group perspective">
                        <div className="relative preserve-3d group-hover:vinay-flip-180 w-full h-full duration-1000">
                            {/* Front Side */}
                            <div className="absolute backface-hidden border-2 border-purple-500 w-full h-full p-4 rounded-2xl">
                                <Image
                                    src="/assets/prof_with_bg.png"
                                    alt="main_image"
                                    className="object-cover"
                                    width={300}
                                    height={450}
                                />
                                <div className="font-poppins text-center">
                                    <h3 className="text-lg font-medium text-white leading-normal pt-2">Pragma kar</h3>
                                    <p className="text-base font-medium tracking-tight text-purple-500">Lab director</p>
                                </div>
                            </div>
                            {/* Back Side */}
                            <div className="absolute vinay-flip-180 backface-hidden w-full h-full bg-slate-200 rounded-xl">
                                <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                                    <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-[5px] border-purple-500 p-1 mt-6">
                                        <Image
                                            src="/assets/prof_without_bg.png"
                                            alt="profile_image"
                                            className="object-cover rounded-full"
                                            width={150}
                                            height={150}
                                        />
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-1">
                                        <h2 className="text-xl font-bold text-purple-700 pt-2">Pragma kar</h2>
                                        <p className="text-base text-purple-500 text-center py-1 px-4 font-semibold tracking-wider">
                                            Lab Director PerSisst | Professor IIITD | PhD, Jadavpur
                                        </p>
                                        <p className="text-sm text-slate-500 font-medium text-center py-1 px-4 tracking-wide">
                                            Loves tosolve HCI based problems which impact millions positively.
                                        </p>
                                    </div>
                                    {/* Social Links */}
                                    <div className="bg-slate-100 px-6 py-1 font-semibold cursor-pointer text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-12 scale-0 group-hover:scale-125 flex justify-center items-center gap-2 shadow-md">
                                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                            <Image
                                                src="/assets/in-filled.svg"
                                                alt="linkedin"
                                                className="rounded-full"
                                                width={24}
                                                height={24}
                                            />
                                        </Link>
                                        <Link href="https://behance.net" target="_blank" rel="noopener noreferrer">
                                            <Image
                                                src="/assets/behance-fill.svg"
                                                alt="behance"
                                                className="rounded-full"
                                                width={24}
                                                height={24}
                                            />
                                        </Link>
                                        <Link href="https://x.com" target="_blank" rel="noopener noreferrer">
                                            <Image
                                                src="/assets/x-filled.svg"
                                                alt="x"
                                                className="rounded-full"
                                                width={24}
                                                height={24}
                                            />
                                        </Link>
                                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                                            <Image
                                                src="/assets/githubfilled.svg"
                                                alt="github"
                                                className="rounded-full"
                                                width={24}
                                                height={24}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Repeat Card Component if needed */}
                </div>
            </div>
        </section>
    );
}

export default OurTeam;
