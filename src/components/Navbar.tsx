// components/Navbar.tsx
'use client'

import Link from 'next/link'
// import { useMobileMenu } from '@/hooks/useMobileMenu'
import Image from 'next/image'

export default function Navbar() {
  // const { isOpen, toggleMenu } = useMobileMenu()

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-lg bg-white/70 w-full  border-gray-200 dark:border-gray-700 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
        <Link href="/">
  <div className="relative w-[180px] md:w-[220px] lg:w-[200px] h-auto">
    <Image 
      src="/logo.svg" 
      alt="Lindapay" 
      width={150}
      height={150}
      className="w-full h-auto object-contain"
      priority
    />
  </div>
</Link>
          </div>

          {/* Desktop Navigation */}
          {/* <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/features" className={`px-3 py-2 rounded-md text-sm font-medium hover:text-primary-light dark:hover:text-primary-dark transition-colors `}>
                Products
              </Link>
              <Link href="/solutions" className={`px-3 py-2 rounded-md text-sm font-medium hover:text-primary-light dark:hover:text-primary-dark transition-colors`}>
                Solutions
              </Link>
       
              <Link href="/developers" className={`px-3 py-2 rounded-md text-sm font-medium hover:text-primary-light dark:hover:text-primary-dark transition-colors `}>
                Developers
              </Link>
              <Link href="/company" className={`px-3 py-2 rounded-md text-sm font-medium hover:text-primary-light dark:hover:text-primary-dark transition-colors`}>
                Resources
              </Link>
            </div>
          </div> */}

          {/* Right side buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
       
              {/* <Link
                href="/login"
                className={`px-4 py-2 rounded-md text-sm font-medium `}
              >
                Log in
              </Link> */}
              <Link
                href="/get-started"
                className="px-4 py-2 rounded-md text-sm font-medium bg-primary  text-white hover:bg-accent-light transition-colors"
              >
            Start Now
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          {/* <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md  focus:outline-none`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile menu */}
      {/* <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/features"
            className={`block px-3 py-2 rounded-md text-base font-medium`}
          >
            Features
          </Link>
          <Link
            href="/solutions"
            className={`block px-3 py-2 rounded-md text-base font-medium}`}
          >
            Solutions
          </Link>
          <Link
            href="/pricing"
            className={`block px-3 py-2 rounded-md text-base font-medium `}
          >
            Pricing
          </Link>
          <Link
            href="/developers"
            className={`block px-3 py-2 rounded-md text-base font-medium `}
          >
            Developers
          </Link>
          <Link
            href="/company"
            className={`block px-3 py-2 rounded-md text-base font-medium `}
          >
            Company
          </Link>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center px-5 space-x-4">

              <Link
                href="/login"
                className={`px-4 py-2 rounded-md text-base font-medium `}
              >
                Sign in
              </Link>
              <Link
                href="/get-started"
                className="px-4 py-2 rounded-md text-base font-medium bg-primary-light text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </nav>
  )
}