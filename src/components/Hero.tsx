import React from 'react';
import { ArrowDown, Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { STUDIO_INFO } from '../data/architectureData';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen min-h-[720px] flex flex-col justify-end overflow-hidden bg-zinc-950">
      {/* Background Architectural Construction Image with subtle zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.12, opacity: 0.8 }}
          animate={{ scale: 1.02, opacity: 0.92 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          src="/hero.png"
          alt="Maestranza la Gruta - Obras civiles, estructuras metálicas y construcción en Puerto Montt"
          className="w-full h-full object-cover object-center"
        />
        {/* Layered Architectural Gradient Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/50 to-zinc-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/40 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-14 md:px-12 lg:px-20 md:pb-20">
        <div className="max-w-5xl">
          {/* Location / Direct Call Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex flex-wrap items-center gap-3 mb-6 bg-white/10 backdrop-blur-md px-4 py-1.5 border border-white/15"
          >
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/90">
              Puerto Montt · Puerto Varas · Región de Los Lagos
            </p>
            <span className="hidden sm:inline text-white/30">|</span>
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-red-400 font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Calidad & Maestranza Certificada</span>
            </div>
          </motion.div>

          {/* Monumental Real Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[clamp(2.4rem,6.2vw,5.5rem)] font-extralight leading-[1.05] tracking-[-0.035em] text-white text-balance">
              Maestranza e <br className="hidden md:block" />
              <span className="font-light italic text-red-500 underline decoration-red-600/40 underline-offset-8">
                Innovación
              </span>{' '}
              a Tu Medida.
            </h1>
          </motion.div>

          {/* Real Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 max-w-2xl text-base md:text-xl font-light text-zinc-300 leading-relaxed"
          >
            {STUDIO_INFO.subtitle}. Soluciones constructivas, obras civiles, estructuras metálicas y gaviones diseñados para perdurar.
          </motion.p>
        </div>

        {/* Bottom Interactive Explorer Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 md:mt-16 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          {/* Scroll Action */}
          <a
            href="#proyectos"
            className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors"
          >
            <div className="w-10 h-[1.5px] bg-red-600 group-hover:w-14 transition-all duration-300" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-light">
              Explorar Obras y Faenas
            </span>
            <ArrowDown className="w-3.5 h-3.5 text-red-500 animate-bounce" />
          </a>

          {/* Quick Direct Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, '')}`}
              className="text-[11px] tracking-[0.15em] uppercase text-white bg-white/10 hover:bg-white/20 px-3.5 py-2 border border-white/20 transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>{STUDIO_INFO.phone}</span>
            </a>

            <a
              href="#contacto"
              className="text-[11px] tracking-[0.15em] uppercase text-white bg-red-600 hover:bg-red-700 px-4 py-2 transition-colors font-medium shadow-md flex items-center gap-1.5"
            >
              <span>Solicitar Cotización</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
