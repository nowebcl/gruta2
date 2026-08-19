import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { REVIEWS } from '../data/architectureData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-50 border-b border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-200">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-red-600"></span>
              <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-red-600">
                Experiencia Real de Clientes
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-zinc-900">
              Lo que opinan sobre Gruta
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
            <span className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="font-semibold text-zinc-900">5.0 / 5.0</span>
            <span>en Reseñas Verificadas</span>
          </div>
        </div>
      </div>

      {/* Infinite scrolling reviews track or responsive cards grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((rev, idx) => (
            <motion.article
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-7 border border-zinc-200 shadow-sm hover:border-red-600/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with Avatar and Google badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-50 text-red-600 font-semibold font-mono text-sm flex items-center justify-center border border-red-200">
                      {rev.initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-zinc-900 leading-tight">
                        {rev.author}
                      </h4>
                      <p className="text-[11px] text-zinc-400 font-light">
                        {rev.timeAgo}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-500 bg-zinc-50 px-2 py-0.5 border border-zinc-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Google
                  </div>
                </div>

                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review body */}
                <p className="text-sm text-zinc-600 font-light leading-relaxed">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-100 flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                <MessageSquare className="w-3 h-3 text-red-500" />
                <span>Cliente Verificado Gruta</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
