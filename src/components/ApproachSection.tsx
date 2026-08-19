import React from 'react';
import { motion } from 'framer-motion';
import { APPROACH_PILLARS } from '../data/architectureData';

export const ApproachSection: React.FC = () => {
  return (
    <section id="servicios" className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 pb-8 border-b border-zinc-200 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-red-600"></span>
              <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-red-600">
                ¿Por Qué Elegirnos?
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-zinc-900">
              Tu Mejor Elección en Construcción
            </h2>
          </div>
          <p className="text-xs text-zinc-500 font-mono tracking-widest uppercase mt-4 md:mt-0">
            « Compromiso, Calidad y Confianza »
          </p>
        </div>

        {/* 2x2 Grid of Philosophy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200 shadow-sm">
          {APPROACH_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-8 md:p-14 group hover:bg-zinc-50 transition-all duration-500 relative flex flex-col justify-between"
            >
              <div>
                {/* Number with Red Accent */}
                <div className="flex items-start justify-between mb-10">
                  <span className="text-xs font-mono tracking-[0.2em] text-red-600 font-semibold">
                    ({pillar.number})
                  </span>
                  <span className="w-2 h-2 rounded-none bg-zinc-200 group-hover:bg-red-600 transition-colors duration-300" />
                </div>

                {/* Pillar Title */}
                <h3 className="text-xl md:text-2xl font-light tracking-tight text-zinc-900 mb-4 group-hover:translate-x-1 group-hover:text-red-600 transition-all duration-300">
                  {pillar.title}
                </h3>

                {/* Expanding Red Line */}
                <div className="w-8 h-[2px] bg-zinc-200 mb-6 group-hover:w-16 group-hover:bg-red-600 transition-all duration-500" />

                {/* Description */}
                <p className="text-sm md:text-base leading-[1.8] font-light text-zinc-600 max-w-md">
                  {pillar.description}
                </p>
              </div>

              {/* Quote snippet at the bottom */}
              {pillar.quote && (
                <div className="mt-8 pt-4 border-t border-zinc-100">
                  <p className="text-xs italic text-zinc-400 group-hover:text-zinc-600 transition-colors">
                    &ldquo;{pillar.quote}&rdquo;
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
