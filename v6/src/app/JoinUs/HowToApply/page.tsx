"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
function HowToApply() {
    return (
        <section>
            <div className="bg-red-300 min-h-screen "></div>
            <div className="lg:max-w-[1280px] mx-auto  bg-gray-950 p-6">
                <div className="flex flex-col justify-center items-center gap-2 font-poppins text-left p-6">
                    <div className="">
                        <div className="mb-4">
                            <h1 className="py-5 text-white text-center font-poppins text-4xl md:text-5xl font-medium leading-normal self-stretch bg-gray-950">
                                How to
                                <span className="text-[#9961D9] block sm:inline"> Apply </span> ?
                            </h1>
                        </div>
                        <div className="max-container flex flex-col items-center justify-center">
                            <p className="text-center max-w-3xl max-sm:text-sm sm:text-base font-poppins text-white max-sm:px-6 py-2">
                                We're excited that you're interested in joining PerSisst Lab! Follow the steps below to apply for our open positions.          </p>
                            <div className="w-full lg:w-[1280px] flex justify-center items-center mt-5">
                                <Link href="https://lets-be-single.com" legacyBehavior>
                                    <a className="p-[2px] relative mb-3">
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-2xl" />
                                        <div className="text-base font-poppins font-semibold px-4 py-2 bg-[#10072B] rounded-[15px] relative group transition duration-200 text-white">
                                            View Open Positions
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div className="flex items-center gap-4 font-poppins p-4">
                            <div className="w-20 h-20 flex items-center justify-center rounded-full border-[5px] border-purple-600 text-white p-3">
                                <Image src="/assets/review-line.svg" alt="Map Icon" width={80} height={80} />
                            </div>
                            <div className="text-left">
                                <h3 className="text-xl text-purple-500 font-bold">Review Open Positions</h3>
                                <p className="text-white text-sm font-normal">
                                    Explore available roles and find the best match for your skills
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 font-poppins p-4">
                            <div className="w-20 h-20 flex items-center justify-center rounded-full border-[5px] border-purple-600 text-white p-3">
                                <Image src="/assets/review-line.svg" alt="Map Icon" width={80} height={80} />
                            </div>
                            <div className="text-left">
                                <h3 className="text-xl text-purple-500 font-bold">Prepare Your Application</h3>
                                <p className="text-white text-sm font-normal">
                                    Include<br />
                                    <ul>
                                        <li>Updated CV/Resume</li>
                                        <li>Brief cover letter</li>
                                        <li>(If applicable) Research proposal/portfolio (for PhD or research roles)</li>
                                        <li>Contact info for two references</li>

                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 font-poppins p-4">
                            <div className="w-20 h-20 flex items-center justify-center rounded-full border-[5px] border-purple-600 text-white p-3">
                                <Image src="/assets/review-line.svg" alt="Map Icon" width={80} height={80} />
                            </div>
                            <div className="text-left">
                                <h3 className="text-xl text-purple-500 font-bold">Submit Your Application</h3>
                                <p className="text-white text-sm font-normal">
                                    Click "Apply Now" or send your documents to: apply@persisstlab.org
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 font-poppins p-4">
                            <div className="w-20 h-20 flex items-center justify-center rounded-full border-[5px] border-purple-600 text-white p-3">
                                <Image src="/assets/review-line.svg" alt="Map Icon" width={80} height={80} />
                            </div>
                            <div className="text-left">
                                <h3 className="text-xl text-purple-500 font-bold">Submit Your Application</h3>
                                <p className="text-white text-sm font-normal">
                                    Click "Apply Now" or send your documents to: apply@persisstlab.org
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 font-poppins p-4">
                            <div className="w-20 h-20 flex items-center justify-center rounded-full border-[5px] border-purple-600 text-white p-3">
                                <Image src="/assets/review-line.svg" alt="Map Icon" width={80} height={80} />
                            </div>
                            <div className="text-left">
                                <h3 className="text-xl text-purple-500 font-bold">Wait for Results</h3>
                                <p className="text-white text-sm font-normal">
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