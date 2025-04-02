"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
function HowToApply() {
    return (
        <section>

            <div className="lg:max-w-[1280px] mx-auto  bg-gray-950 lg:p-6">
                <div className="flex flex-col justify-center items-center gap-2 font-poppins text-left p-2 lg:p-6">
                    <div className="">
                        <div className="mb-4">
                            <h1 className="py-5 text-white text-center font-poppins text-4xl md:text-5xl font-semibold leading-normal self-stretch bg-gray-950">
                                How to <span className="text-[#9961D9] inline"> Apply </span>?
                            </h1>
                        </div>
                        <div className="max-container flex flex-col items-center justify-center">
                            <p className="text-center max-w-3xl max-sm:text-sm sm:text-base font-poppins text-white max-sm:px-6 py-2">
                                We're excited that you're interested in joining PerSisst Lab! Follow the steps below to apply for our open positions.          </p>
                            {/* <div className="w-full lg:w-[1280px] flex justify-center items-center mt-5">
                                <Link href="https://lets-be-single.com" legacyBehavior>
                                    <a className="p-[2px] relative mb-3">
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-2xl" />
                                        <div className="text-base font-poppins font-semibold px-4 py-2 bg-[#10072B] rounded-[15px] relative group transition duration-200 text-white">
                                            View Open Positions
                                        </div>
                                    </a>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="relative flex flex-col space-y-1 lg:left-16 ">
                        <div className="flex items-center gap-4 font-poppins p-4">
                            <div className="w-20 h-20 flex items-center justify-center rounded-full border-[5px] border-purple-600 text-white p-4 ">
                                <Image src="/assets/review-line.svg" alt="Map Icon" width={80} height={80} />
                            </div>
                            <div className="text-left flex-1">
                                <h3 className="text-xl text-purple-500 font-bold">Review Open Positions</h3>
                                <p className="text-white text-sm font-normal max-w-sm">
                                    Explore available roles and find the best match for your skills
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 lg:gap-4 font-poppins p-4 ">
                            <div className="w-20 h-20 flex items-center justify-center rounded-full border-[5px] border-purple-600 text-white p-5 lg:p-4 ">
                                <Image src="/assets/application-line.svg" alt="Map Icon" width={80} height={80} />
                            </div>
                            <div className="text-left flex-1">
                                <h3 className="text-xl text-purple-500 font-bold">Prepare Your Application</h3>
                                <p className="text-white text-sm font-normal max-w-sm">
                                    Include:
                                </p>
                                <ul className="text-white text-xs font-normal max-w-sm">
                                    <li>Updated CV/Resume</li>
                                    <li>Brief cover letter</li>
                                    <li>(If applicable) Research proposal/portfolio (for PhD or research roles)</li>
                                    <li>Contact info for two references</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 lg:gap-4 font-poppins p-4 ">
                            <div className="w-20 h-20 flex items-center justify-center rounded-full border-[5px] border-purple-600 text-white p-4 ">
                                <Image src="/assets/mail-line.svg" alt="Map Icon" width={80} height={80} />
                            </div>
                            <div className="text-left flex-1">
                                <h3 className="text-xl text-purple-500 font-bold">Submit Your Application</h3>
                                <p className="text-white text-sm font-normal max-w-sm">
                                    Applications should be submitted to persisst@iiitd.ac.in or in accordance with the instructions provided in the advertisement.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 lg:gap-4 font-poppins p-4 ">
                            <div className="w-20 h-20 flex items-center justify-center rounded-full border-[5px] border-purple-600 text-white p-5 lg:p-4 ">
                                <Image src="/assets/wait.svg" alt="Map Icon" width={80} height={80} />
                            </div>
                            <div className="text-left flex-1">
                                <h3 className="text-xl text-purple-500 font-bold">Wait for Results</h3>
                                <p className="text-white text-sm font-normal max-w-sm">
                                    We'll review your application, and if shortlisted, we'll contact you with next steps.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowToApply;