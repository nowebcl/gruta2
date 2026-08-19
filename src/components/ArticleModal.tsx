import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, User, Share2 } from 'lucide-react';
import { JournalArticle } from '../types';

interface ArticleModalProps {
  article: JournalArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-white shadow-2xl z-10 overflow-hidden border border-zinc-200 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 bg-white sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-semibold text-red-600 bg-red-50 px-2.5 py-0.5 border border-red-200">
                {article.category}
              </span>
              <span className="text-xs font-mono text-zinc-400">
                {article.date}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-zinc-500 hover:text-red-600 hover:bg-red-50 transition-all rounded-none"
              aria-label="Cerrar artículo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Article Content */}
          <div className="overflow-y-auto p-6 md:p-12 space-y-8">
            {/* Title & Metadata */}
            <div>
              <h1 className="text-2xl md:text-4xl font-light tracking-tight text-zinc-900 leading-tight mb-4">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 pb-4 border-b border-zinc-200">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-red-600" />
                  {article.author}
                </span>
                <span className="text-zinc-300">•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-red-600" />
                  {article.readTime}
                </span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-[16/9] max-h-[400px] overflow-hidden bg-zinc-100 border border-zinc-200">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Excerpt Callout */}
            <div className="p-6 bg-red-50/50 border-l-2 border-red-600">
              <p className="text-base md:text-lg font-light italic text-zinc-800 leading-relaxed">
                &ldquo;{article.excerpt}&rdquo;
              </p>
            </div>

            {/* Full Body Text */}
            <div className="prose prose-zinc max-w-none text-zinc-700 font-light leading-relaxed space-y-4 text-base">
              <p>{article.content}</p>
              <p>
                La continua investigación sobre materiales puros, confort bioclimático y articulación lumínica constituye el núcleo de todos nuestros proyectos en el norte y sur de Europa. Nuestro equipo interdisciplinar continúa explorando cómo la sencillez geométrica maximiza la experiencia emocional del habitante.
              </p>
            </div>

            {/* Footer / Share CTA */}
            <div className="pt-6 border-t border-zinc-200 flex items-center justify-between">
              <p className="text-xs text-zinc-400 font-mono">
                GRUTA 23 — Archivo Editorial
              </p>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: article.title, url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Enlace copiado al portapapeles');
                  }
                }}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-700 hover:text-red-600 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Compartir</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
