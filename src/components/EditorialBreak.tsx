import React from 'react';
import { motion } from 'framer-motion';
import { STUDIO_INFO } from '../data/architectureData';

export const EditorialBreak: React.FC = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Architectural / Industrial Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7 overflow-hidden relative border border-zinc-200 group"
          >
            <img
              src={STUDIO_INFO.editorialImage}
              alt="Maestranza la Gruta - Detalle de faenas constructivas y estructuras de acero"
              className="w-full aspect-[16/10] object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-1000"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] tracking-[0.2em] font-mono uppercase text-zinc-800 border border-zinc-200">
              Faenas en Terreno — Maestranza la Gruta
            </div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-red-600 pointer-events-none" />
          </motion.div>

          {/* Pull Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-4 lg:col-start-9"
          >
            {/* Red Accent Divider */}
            <div className="w-12 h-[2.5px] bg-red-600 mb-8" />

            <blockquote className="text-2xl md:text-3xl lg:text-[1.85rem] font-extralight leading-[1.3] tracking-tight text-zinc-900 text-balance">
              &ldquo;{STUDIO_INFO.quote.text}&rdquo;
            </blockquote>

            <div className="mt-8 pt-4 border-t border-zinc-200">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-red-600">
                {STUDIO_INFO.quote.author}
              </p>
              <p className="text-[11px] tracking-[0.15em] text-zinc-500 mt-1">
                {STUDIO_INFO.quote.role}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
