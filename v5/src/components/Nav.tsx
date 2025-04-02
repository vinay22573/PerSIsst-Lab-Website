"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <div className={cn("fixed top-10 px-20 inset-x-0 max-w-screen mx-auto z-50", className)}>
    <Menu setActive={setActive}>
      <div className="w-full flex justify-between items-center px-5">
        {/* Logo on the left */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo-text.svg"
            alt="persisst logo"
            width={100}
            height={100}
          />
        </Link>

        {/* Menu items grouped on the right */}
        <div className="flex items-center gap-6">
          <MenuItem setActive={setActive} active={active} item="About Us">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/About/Lab">Our Lab</HoveredLink>
              <HoveredLink href="/About/Director">Lab Director</HoveredLink>
              <HoveredLink href="/About/Community">Community</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Research">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/Research/Blogs">Blogs</HoveredLink>
              <HoveredLink href="/Research/Projects">Projects</HoveredLink>
              <HoveredLink href="/Research/Publications">Publications</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Resources">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/Resources/FAQ">FAQ</HoveredLink>
              <HoveredLink href="/Resources/InternalResources">InternalResources</HoveredLink>
              <HoveredLink href="/Resources/ExternalResources">ExternalResources</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Let's Connect">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/Connect/Join">Join Us</HoveredLink>
              <HoveredLink href="/Connect/Contact">Contact Us</HoveredLink>
            </div>
          </MenuItem>
        </div>
      </div>
    </Menu>
  </div>
  );
}

export default Navbar;
