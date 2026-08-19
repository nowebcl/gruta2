import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { STUDIO_INFO } from '../data/architectureData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="px-6 py-16 md:px-12 lg:px-20 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <a href="#inicio" className="flex items-center gap-3 mb-4 group">
              <img
                src={STUDIO_INFO.logoUrl}
                alt="Maestranza la Gruta"
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="text-xs font-mono uppercase tracking-widest text-red-600 mb-3 font-semibold">
              {STUDIO_INFO.legalName}
            </p>
            <p className="text-sm leading-[1.8] text-zinc-500 font-light max-w-sm">
              «Innovación y Calidad en Cada Proyecto de Construcción». Especialistas en maestranza pesada, gaviones, obras civiles y montajes industriales en el sur de Chile.
            </p>

            {/* Newsletter widget */}
            <div className="mt-6">
              <p className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-2">
                NEWSLETTER INFORMATIVO
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('¡Gracias por suscribirte al boletín técnico de Gruta!');
                }}
                className="flex items-center gap-2 max-w-sm"
              >
                <input
                  type="email"
                  required
                  placeholder="Tu correo electrónico"
                  className="px-3.5 py-2 text-xs bg-zinc-50 border border-zinc-200 text-zinc-900 focus:outline-none focus:border-red-600 flex-1"
                />
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white text-xs px-4 py-2 font-mono uppercase tracking-wider transition-colors flex items-center gap-1"
                >
                  <span>OK</span>
                  <Send className="w-3 h-3" />
                </button>
              </form>
            </div>
          </div>

          {/* Menú Links */}
          <div className="md:col-span-2 md:col-start-7">
            <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-zinc-400 mb-4">
              Menú
            </p>
            <div className="flex flex-col gap-2.5">
              <a href="#inicio" className="text-sm text-zinc-600 hover:text-red-600 transition-colors">
                Inicio
              </a>
              <a href="#nosotros" className="text-sm text-zinc-600 hover:text-red-600 transition-colors">
                Nosotros
              </a>
              <a href="#proyectos" className="text-sm text-zinc-600 hover:text-red-600 transition-colors">
                Proyectos
              </a>
              <a href="#servicios" className="text-sm text-zinc-600 hover:text-red-600 transition-colors">
                Servicios
              </a>
              <a href="#journal" className="text-sm text-zinc-600 hover:text-red-600 transition-colors">
                Journal
              </a>
              <a href="#contacto" className="text-sm text-zinc-600 hover:text-red-600 transition-colors">
                Contacto
              </a>
            </div>
          </div>

          {/* Horario */}
          <div className="md:col-span-2">
            <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-zinc-400 mb-4">
              Horario
            </p>
            <div className="space-y-2 text-xs text-zinc-600 font-light">
              <p className="flex items-center gap-1.5 font-medium text-zinc-900">
                <Clock className="w-3.5 h-3.5 text-red-600" />
                <span>Lun – Vie</span>
              </p>
              <p className="font-mono text-zinc-500">09:00 – 17:00 hrs</p>
              <p className="text-[11px] text-zinc-400 pt-2">
                Atención en terreno y emergencias con coordinación previa.
              </p>
            </div>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-3">
            <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-zinc-400 mb-4">
              Contacto
            </p>
            <div className="space-y-2.5 text-xs text-zinc-600 font-light">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-600 mt-0.5 shrink-0" />
                <span>{STUDIO_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <a href={`mailto:${STUDIO_INFO.primaryEmail}`} className="hover:text-red-600 transition-colors">
                  {STUDIO_INFO.primaryEmail}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <a href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-red-600 font-mono transition-colors">
                  {STUDIO_INFO.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-zinc-200 gap-4 text-xs font-mono text-zinc-400">
          <p>© {new Date().getFullYear()} Maestranza la Gruta. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <span>Puerto Montt · Puerto Varas · Región de Los Lagos</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-zinc-100 hover:bg-red-600 hover:text-white text-zinc-600 transition-all rounded-none"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
