'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX, FiHeart, FiUser } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/instituicoes', label: 'Instituições' },
    { href: '/como-funciona', label: 'Como Funciona' },
    { href: '/transparencia', label: 'Transparência' },
    { href: '/sobre', label: 'Sobre Nós' },
  ]

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-lg sm:text-xl font-bold text-primary-600">
            <FiHeart className="text-xl sm:text-2xl" />
            <span className="hidden xs:inline">Doar com Propósito</span>
            <span className="inline xs:hidden">Doar</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/perfil"
              className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <FiUser />
              <span>Meu Perfil</span>
            </Link>
            <Link
              href="/doar"
              className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors font-semibold shadow-md hover:shadow-lg"
            >
              Doar Agora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-primary-600"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t mt-2 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/perfil"
              className="flex items-center gap-2 py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <FiUser />
              <span>Meu Perfil</span>
            </Link>
            <Link
              href="/doar"
              className="mt-4 block text-center bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Doar Agora
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
