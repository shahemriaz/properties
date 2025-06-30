'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { data: session, status } = useSession()
  const user = session?.user as { role?: string } | undefined

  let dashboardLink = null
  if (user?.role === 'buyer') dashboardLink = '/dashboard/buyer'
  if (user?.role === 'agent') dashboardLink = '/dashboard/agent'
  if (user?.role === 'builder') dashboardLink = '/dashboard/builder'
  if (user?.role === 'admin') dashboardLink = '/dashboard/admin'

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white/80 backdrop-blur shadow-lg fixed w-full z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Pak Property</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['/', '/properties', '/services', '/about', '/contact'].map((path, idx) => (
              <Link
                key={path}
                href={path}
                className={`text-gray-700 hover:text-primary transition-colors duration-300 ${pathname === path ? 'font-bold underline underline-offset-8' : ''}`}
              >
                {['Home', 'Properties', 'Services', 'About', 'Contact'][idx]}
              </Link>
            ))}
            {status === 'loading' ? null : session ? (
              <>
                {dashboardLink && <Link href={dashboardLink} className="text-gray-700 hover:text-primary transition-colors duration-300">Dashboard</Link>}
                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="text-gray-700 hover:text-primary transition-colors duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-gray-700 hover:text-primary transition-colors duration-300">Login</Link>
                <Link href="/register" className="text-gray-700 hover:text-primary transition-colors duration-300">Register</Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['/', '/properties', '/services', '/about', '/contact'].map((path, idx) => (
                <Link
                  key={path}
                  href={path}
                  className={`block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-300 ${pathname === path ? 'font-bold underline underline-offset-8' : ''}`}
                  onClick={toggleMenu}
                >
                  {['Home', 'Properties', 'Services', 'About', 'Contact'][idx]}
                </Link>
              ))}
              {status === 'loading' ? null : session ? (
                <>
                  {dashboardLink && <Link href={dashboardLink} className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-300">Dashboard</Link>}
                  <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-300"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-300">Login</Link>
                  <Link href="/register" className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-300">Register</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 