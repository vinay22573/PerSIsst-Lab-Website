"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion2,
  AccordionContent2,
  AccordionItem2,
  AccordionTrigger2,
} from "@/components/ui/accordianNav"
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-white">The Navbar will show on top of the page</p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div
        className={cn("fixed top-4 lg:top-10 inset-x-0 w-full md:w-[80vw] mx-auto z-[101] max-md:p-1", className)}
      >
        {/* <div className="justify-around"></div> */}
        <Menu setActive={setActive}>

          <Link href="/" className="flex flex-1 gap-2 flex-center max-md:w-[120px] relative z-[102] max-md:h-[35px]">
            <Image className="logo"
              src="/images/logo-text.svg"
              alt="persisst logo"
              // layout="responsive"
              width={200}
              height={60}
            />
          </Link>

          {/* for Smaller Screens */}
          <div className="block md:hidden">
            {/* <Image src="/assets/hamburger.svg" alt="hamburger" width={30} height={30} /> */}
            <button
              className="bg-transparent"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <Image src="/assets/close.svg" alt="hamburger-close" width={30} height={30} />
              ) : (
                <Image
                  src="/assets/hamburger.svg"
                  alt="open-hamburger"
                  width={30}
                  height={30}
                  className=""
                />
              )}
            </button>
          </div>


          <div className="flex flex-1 text-lg justify-between max-lg:hidden">

            {/* About */}
            <MenuItem setActive={setActive} active={active} item="About Us">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/About/Lab">Our Lab</HoveredLink>
                <HoveredLink href="/About/Director">Our Director</HoveredLink>
                <HoveredLink href="/OurTeam">Our Team</HoveredLink>
              </div>
            </MenuItem>

            {/* Research */}
            <MenuItem setActive={setActive} active={active} item="Research">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/Research">Projects & Publication</HoveredLink>
                <HoveredLink href="/NotFound">Blogs</HoveredLink>
              </div>
            </MenuItem>

            {/* Resources */}
            <MenuItem setActive={setActive} active={active} item="Resources">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/JoinUs/FAQs">FAQs</HoveredLink>
                <HoveredLink href="/NotFound">Internal Resources</HoveredLink>
                <HoveredLink href="/NotFound">External Resources</HoveredLink>
              </div>
            </MenuItem>

            {/* Let's Connect */}
            <MenuItem setActive={setActive} active={active} item="Let's Connect">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/JoinUs">Join Us</HoveredLink>
                <HoveredLink href="/ContactUs">Contact Us</HoveredLink>
              </div>
            </MenuItem>

          </div>

        </Menu>
      </div>


      <div className={`fixed bg-slate-950 bg-grid-white/[0.02] min-h-screen w-full h-auto z-[100] flex flex-col  justify-center  mx-auto ${navbar ? 'p-12 block' : 'hidden'}`}>
        <div className='relative '>
          <Accordion2 type="single" collapsible className=" ">
            <AccordionItem2 value="item-1">
              <AccordionTrigger2>About Us</AccordionTrigger2>
              <AccordionContent2>
                
                  <ul>
                    <li className="pb-2 text-xl py-2  text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900   ">
                    <Link href="/About/Lab" onClick={() => setNavbar(!navbar)}>
                      Lab
                    </Link>
                    </li>
                    <li className="pb-2 text-xl py-2  text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900   ">
                    <Link href="/About/Director" onClick={() => setNavbar(!navbar)}>
                      Director
                    </Link>
                    </li>
                    <li className="pb-2 text-xl py-2  text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900   ">
                    <Link href="/OurTeam" onClick={() => setNavbar(!navbar)}>
                      Our Team
                    </Link>
                    </li>
                  </ul>
              </AccordionContent2>
            </AccordionItem2>
            <AccordionItem2 value="item-2">
              <AccordionTrigger2>Research</AccordionTrigger2>
              <AccordionContent2>
                
                  <ul>
                    <li className="pb-2 text-xl py-2  text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900   ">
                    <Link href="/Research" onClick={() => setNavbar(!navbar)}>
                      Project & Publication
                    </Link>
                    </li>
                    <li className="pb-2 text-xl py-2  text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900   ">
                    <Link href="/NotFound" onClick={() => setNavbar(!navbar)}>
                      Blogs
                    </Link>
                    </li>
                  </ul>
              </AccordionContent2>
            </AccordionItem2>
            <AccordionItem2 value="item-3">
              <AccordionTrigger2>Resources</AccordionTrigger2>
              <AccordionContent2>
                
                  <ul>
                    <li className="pb-2 text-xl py-2  text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900   ">
                    <Link href="/JoinUs/FAQs" onClick={() => setNavbar(!navbar)}>
                      FAQs
                    </Link>
                    </li>
                    <li className="pb-2 text-xl py-2  text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900   ">
                    <Link href="/NotFound" onClick={() => setNavbar(!navbar)}>
                      Internal Resources
                    </Link>
                    </li>
                    <li className="pb-2 text-xl py-2  text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900   ">
                    <Link href="/NotFound" onClick={() => setNavbar(!navbar)}>
                      External Resources
                    </Link>
                    </li>
                  </ul>
              </AccordionContent2>
            </AccordionItem2>
            <AccordionItem2 value="item-4">
              <AccordionTrigger2>Let's Connect</AccordionTrigger2>
              <AccordionContent2>
                  <ul>
                    <li className="pb-2 text-xl py-2  text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900   ">
                    <Link href="/JoinUs" onClick={() => setNavbar(!navbar)}>
                      Join Us
                    </Link>
                    </li>
                    <li className="pb-2 text-xl py-2  text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900   ">
                    <Link href="/ContactUs" onClick={() => setNavbar(!navbar)}>
                      Contact Us
                    </Link>
                    </li>
                   
                  </ul>
              </AccordionContent2>
            </AccordionItem2>
          
          </Accordion2>
        </div>
      </div>
    </>





  );
}

export default Navbar;
