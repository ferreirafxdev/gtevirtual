import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <a className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image 
                  src="/images/logo_gte.png" 
                  alt="Logo GTE Virtual" 
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-green-700">GTE</span>
                <span className="text-xl font-bold text-gray-800"> Virtual</span>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a className="text-gray-700 hover:text-green-700 font-medium transition duration-200">Início</a>
            </Link>
            <Link href="/agenda-presidente">
              <a className="text-gray-700 hover:text-green-700 font-medium transition duration-200">Agenda Presidente</a>
            </Link>
            <Link href="/galeria">
              <a className="text-gray-700 hover:text-green-700 font-medium transition duration-200">Galeria</a>
            </Link>
            <Link href="/sobre-nos">
              <a className="text-gray-700 hover:text-green-700 font-medium transition duration-200">Sobre Nós</a>
            </Link>
            <Link href="/operacoes-vatsim">
              <a className="text-gray-700 hover:text-green-700 font-medium transition duration-200">Operações VATSIM</a>
            </Link>
            <Link href="/contato">
              <a className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition duration-200">Contato</a>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/">
                <a className="text-gray-700 hover:text-green-700 font-medium transition duration-200">Início</a>
              </Link>
              <Link href="/agenda-presidente">
                <a className="text-gray-700 hover:text-green-700 font-medium transition duration-200">Agenda Presidente</a>
              </Link>
              <Link href="/galeria">
                <a className="text-gray-700 hover:text-green-700 font-medium transition duration-200">Galeria</a>
              </Link>
              <Link href="/sobre-nos">
                <a className="text-gray-700 hover:text-green-700 font-medium transition duration-200">Sobre Nós</a>
              </Link>
              <Link href="/operacoes-vatsim">
                <a className="text-gray-700 hover:text-green-700 font-medium transition duration-200">Operações VATSIM</a>
              </Link>
              <Link href="/contato">
                <a className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition duration-200 inline-block">Contato</a>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
