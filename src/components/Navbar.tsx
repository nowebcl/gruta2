import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/architectureData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['inicio', 'proyectos', 'nosotros', 'servicios', 'soldadura', 'journal', 'contacto'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio', id: 'inicio' },
    { name: 'Nosotros', href: '#nosotros', id: 'nosotros' },
    { name: 'Proyectos', href: '#proyectos', id: 'proyectos' },
    { name: 'Servicios', href: '#servicios', id: 'servicios' },
    { name: 'Soldadura Inox', href: '#soldadura', id: 'soldadura' },
    { name: 'Journal', href: '#journal', id: 'journal' },
    { name: 'Contacto', href: '#contacto', id: 'contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md py-4 border-b border-zinc-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 lg:px-20">
        {/* Brand Logo */}
        <a href="#inicio" className="group flex items-center gap-3">
          <img
            src={STUDIO_INFO.logoUrl}
            alt="Maestranza la Gruta"
            className={`h-9 md:h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
              scrolled ? 'brightness-100' : 'brightness-110 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]'
            }`}
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] tracking-[0.2em] uppercase transition-all duration-300 relative py-1 ${
                  scrolled
                    ? isActive
                      ? 'text-red-600 font-semibold'
                      : 'text-zinc-600 hover:text-red-600'
                    : isActive
                    ? 'text-red-400 font-semibold'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-red-600 animate-in fade-in duration-300" />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Phone CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, '')}`}
            className={`inline-flex items-center gap-2 text-xs font-mono tracking-wider px-3.5 py-1.5 transition-all duration-300 border ${
              scrolled
                ? 'text-zinc-900 border-zinc-200 hover:border-red-600 hover:text-red-600 bg-zinc-50'
                : 'text-white border-white/20 hover:border-red-500 bg-white/10'
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-red-500" />
            <span>{STUDIO_INFO.phone}</span>
          </a>

          <a
            href="#contacto"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase bg-red-600 hover:bg-red-700 text-white px-4 py-2 transition-all shadow-sm shadow-red-600/20"
          >
            <span>Cotizar</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${
            scrolled ? 'text-zinc-900 hover:text-red-600' : 'text-white hover:text-red-400'
          }`}
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white border-b border-zinc-200 ${
          mobileMenuOpen ? 'max-h-[460px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col px-8 gap-4">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-light tracking-tight text-zinc-900 hover:text-red-600 transition-colors flex items-center justify-between py-1.5 border-b border-zinc-100"
            >
              <span>{link.name}</span>
              <span className="text-xs text-red-600/60 font-mono">0{idx + 1}</span>
            </a>
          ))}

          <div className="pt-3 flex flex-col gap-3">
            <a
              href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 text-xs font-mono py-2.5 bg-zinc-100 text-zinc-900 border border-zinc-200"
            >
              <Phone className="w-4 h-4 text-red-600" />
              <span>{STUDIO_INFO.phone}</span>
            </a>

            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase bg-red-600 text-white py-3 hover:bg-red-700 shadow-md"
            >
              <span>Contactar con Gruta</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
