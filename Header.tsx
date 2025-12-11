'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Investment Banking', href: '/investment-banking' },
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-12 h-12 bg-primary-indigo rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">RC</span>
          </div>
          <span className="font-bold text-lg hidden md:inline">RedeFin Capital</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className="hover:text-primary-gold transition">
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t md:hidden">
            {navItems.map(item => (
              <Link key={item.href} href={item.href} className="block px-6 py-3 hover:bg-gray-100">
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
