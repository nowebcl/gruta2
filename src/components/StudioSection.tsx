import React from 'react';
import { motion } from 'framer-motion';
import { STUDIO_INFO, STUDIO_STATS } from '../data/architectureData';
import { Target, Compass } from 'lucide-react';

export const StudioSection: React.FC = () => {
  return (
    <section id="nosotros" className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Heading & Manifesto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 bg-red-600"></span>
              <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-red-600">
                Nosotros
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extralight leading-[1.15] tracking-tight text-zinc-900 text-balance">
              Innovación y Compromiso en{' '}
              <span className="font-light text-red-600 underline decoration-red-200 underline-offset-8">
                Construcción & Maestranza
              </span>
              .
            </h2>

            <p className="text-base md:text-lg font-light text-zinc-700 mt-6 leading-relaxed italic border-l-2 border-red-600 pl-4 py-1">
              {STUDIO_INFO.description}
            </p>

            {/* Misión y Visión Cards */}
            <div className="mt-10 space-y-4">
              <div className="p-6 bg-zinc-50 border border-zinc-200 hover:border-red-600/40 transition-colors">
                <div className="flex items-center gap-2 text-red-600 font-medium text-xs uppercase tracking-widest mb-2">
                  <Compass className="w-4 h-4" />
                  <span>Visión</span>
                </div>
                <p className="text-sm font-light text-zinc-600 leading-relaxed">
                  {STUDIO_INFO.vision}
                </p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200 hover:border-red-600/40 transition-colors">
                <div className="flex items-center gap-2 text-red-600 font-medium text-xs uppercase tracking-widest mb-2">
                  <Target className="w-4 h-4" />
                  <span>Misión</span>
                </div>
                <p className="text-sm font-light text-zinc-600 leading-relaxed">
                  {STUDIO_INFO.mission}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Paragraphs & Interactive Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-between gap-12"
          >
            {/* Paragraphs */}
            <div className="flex flex-col gap-6 text-zinc-600">
              <p className="text-base leading-[1.8] font-light">
                {STUDIO_INFO.extendedBio}
              </p>
              <div className="p-5 bg-red-50/60 border border-red-200/80 text-xs font-mono text-zinc-800 space-y-1">
                <p className="font-semibold text-red-700 uppercase tracking-wider">
                  Ubicación de Planta & Taller:
                </p>
                <p>{STUDIO_INFO.address}</p>
                <p className="text-zinc-500">{STUDIO_INFO.operatingHours}</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-zinc-200">
              {STUDIO_STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-3xl md:text-4xl lg:text-5xl font-extralight text-zinc-900 tracking-tight">
                      {stat.value}
                    </span>
                    {stat.suffix && (
                      <span className="text-xl md:text-2xl font-light text-red-600">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-zinc-900 mt-2">
                    {stat.label}
                  </p>
                  {stat.sublabel && (
                    <p className="text-[10px] text-zinc-400 mt-0.5 font-light">
                      {stat.sublabel}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
