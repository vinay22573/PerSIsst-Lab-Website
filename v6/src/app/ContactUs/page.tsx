'use client';
import React from 'react';
import Image from 'next/image';

function ContactUs() {
  return (
    <section className="w-full bg-gray-900 px-2">
      <div className='bg-gray-950 h-[10vh] lg:h-[20vh]'></div>
      <div className="mb-8">
          <h1 className="py-5 text-white text-center font-poppins text-4xl md:text-5xl font-medium leading-normal self-stretch bg-gray-950">
            Contact  <span className="text-[#9961D9]">Us</span>
          </h1>
      </div>

      {/* Main Section */}
      <main className="lg:max-w-[1280px] mx-auto grid place-items-center lg:grid-cols-2 bg-gray-900 p-6 ">
        
        <div className="flex flex-col justify-start gap-2 font-poppins text-left p-6 order-2 md:order-1 ">
          <div className="p-6">
            <h1 className="text-4xl font-bold py-2 text-white">
              Get in <span className="text-purple-500">Touch</span>
            </h1>
            <p className="text-base leading-normal text-white">
              Whether you're a passionate researcher, an eager student, or someone interested in learning more about our work, we invite you to explore opportunities to join our mission.
            </p>
          </div>
          <div className="flex flex-col gap-5 p-6">
            <h1 className="text-4xl font-bold py-2 text-white">
              Follow <span className="text-purple-500 py-2">Us</span>
            </h1>
            <div className="flex gap-5 justify-start py-2">
              <div className="w-10 h-10 rounded-full">
                <Image src="/assets/in-filled.svg" alt="LinkedIn" width={40} height={40} />
              </div>
              <div className="w-10 h-10 rounded-full">
                <Image src="/assets/facebook-circle-fill.svg" alt="Facebook" width={40} height={40} />
              </div>
              <div className="w-10 h-10 rounded-full">
                <Image src="/assets/x-filled.svg" alt="Twitter" width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-1 order-1 md:order-2">
          {/* Address */}
          <div className="flex items-center gap-4 font-poppins p-4">
            <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-full bg-purple-500 text-white p-3 lg:p-4">
              <Image src="/assets/map-pin-line.svg" alt="Map Icon" width={80} height={80} />
            </div>
            <div className="text-left flex-1">
              <h3 className="text-xl text-purple-500 font-bold">Address</h3>
              <p className="text-white text-xs lg:text-sm font-normal">
                PerSIst Labs, A-413 (R&D block),<br />
                Department of Human Centered Design,<br />
                Indraprastha Institute of Information Technology Delhi,<br />
                New Delhi, Delhi 110020
              </p>
            </div>
          </div>
          {/* Contact */}
          <div className="flex items-center gap-4 font-poppins p-4">
            <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-full bg-purple-500 text-white p-3 lg:p-4">
              <Image src="/assets/phone-fill.svg" alt="Phone Icon" width={80} height={80} />
            </div>
            <div className="text-left flex-1">
              <h3 className="text-xl text-purple-500 font-bold">Contact</h3>
              <p className="text-white text-sm font-normal">
                +91 9876543210<br />
              </p>
            </div>
          </div>
          {/* Mail */}
          <div className="flex items-center gap-4 font-poppins p-4">
            <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-full bg-purple-500 text-white p-3 lg:p-4">
              <Image src="/assets/mail-fill.svg" alt="Mail Icon" width={80} height={80} />
            </div>
            <div className="text-left flex-1">
              <h3 className="text-xl text-purple-500 font-bold">Mail</h3>
              <p className="text-white text-sm font-normal">
                persistlab@iiitd.ac.in<br />
              </p>
            </div>
          </div>
        </div>
        
      </main>
      {/* Maps iframe Section */}
      <div className='rounded-2xl w-full lg:w-[1280px] lg:h-[300px] bg-gray-900 flex flex-col items-center justify-center mx-auto  relative'>
      <iframe
    className="rounded-2xl lg:w-[1000px] lg:h-[400px] lg:absolute lg:-bottom-[60%] z-30"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.827615231125!2d77.26982302618208!3d28.544900738053585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e45d85d3e3%3A0x691393414902968e!2sIIIT-Delhi%20R%26D%20Building!5e0!3m2!1sen!2sin!4v1726605696874!5m2!1sen!2sin"
    width="400"
    height="350"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
          {/* <img src="/assets/Maps.svg" alt="map iframe"  className='lg:w-[1000px] lg:h-[400px] lg:absolute lg:-bottom-[60%] z-30'/> */}
      </div>
      {/* to give the background the maps section */}
      <div className="max-lg:hidden w-full lg:h-[250px] bg-gray-900 relative z-20 mx-auto overflow-hidden">
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
      </div>
    </section>
  );
};

export default ContactUs;
