import { footer } from 'framer-motion/client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
<footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">          <Link href='/' className='flex gap-2 flex-center'>
            <Image
              src='/images/logo-text.svg'
              alt='persisst logo'
              width={100}
              height={100}
              
            />
          </Link></h2>

          <p className="mb-4">
          PerSIsst Lab develops intelligent, assistive solutions using advanced sensing to address challenges in cognition and smart living.
            </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="/"
                className="hover:text-purple-500 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/About/Lab"
                className="hover:text-purple-500 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/Resources/FAQ"
                className="hover:text-purple-500 transition-colors duration-300"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="/Connect/Join"
                className="hover:text-purple-500 transition-colors duration-300"
              >
                Join Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-purple-500 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="hover:text-purple-500 transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-purple-500 transition-colors duration-300"
            >
              Facebook
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>PerSIsst Labs</p>
          <p>A-413 (R&D block)</p>
          <p>Department of Human Centered Design, IIIT-Delhi </p>
            <p>Okhla Phase III, New Delhi, Delhi 110020</p>
          <p>Email: persisst[at]iiitd[dot]ac[dot]in</p>
        </div>
        </div>
        <p className="text-center text-xs pt-8">© 2024 PerSIsst Labs IIIT-Delhi. All rights reserved.</p>
    </footer>
  )
}

export default Footer