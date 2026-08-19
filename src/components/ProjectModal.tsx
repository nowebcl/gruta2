import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Award, Compass, Layers, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.galleryImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.galleryImages.length) % project.galleryImages.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-white shadow-2xl z-10 overflow-hidden border border-zinc-200 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 bg-white sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-red-600 bg-red-50 px-2 py-0.5 border border-red-200">
                PROYECTO {project.number}
              </span>
              <span className="text-xs tracking-widest uppercase text-zinc-400">/</span>
              <span className="text-xs tracking-widest uppercase text-zinc-600 font-medium">
                {project.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-zinc-500 hover:text-red-600 hover:bg-red-50 transition-all rounded-none"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto p-6 md:p-10 space-y-10">
            {/* Title & Metadata Header */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-zinc-900">
                  {project.title}
                </h2>
                <span className="text-sm font-light text-zinc-500 tracking-wider">
                  {project.location} — {project.year}
                </span>
              </div>
              <div className="w-16 h-[2px] bg-red-600 mb-6" />
              <p className="text-base md:text-lg font-light text-zinc-700 leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>

            {/* Interactive Image Gallery */}
            <div className="relative group bg-zinc-950 overflow-hidden aspect-[16/9] max-h-[480px]">
              <img
                src={project.galleryImages[activeImageIndex] || project.image}
                alt={`${project.title} - Vista ${activeImageIndex + 1}`}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />

              {/* Gallery Navigation Controls */}
              {project.galleryImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white text-zinc-900 transition-colors shadow-lg"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white text-zinc-900 transition-colors shadow-lg"
                    aria-label="Imagen siguiente"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Thumbnail Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 border border-white/20">
                    {project.galleryImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`h-1.5 transition-all ${
                          activeImageIndex === idx ? 'w-6 bg-red-600' : 'w-2 bg-white/50 hover:bg-white'
                        }`}
                        aria-label={`Ir a foto ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-zinc-200">
              <div className="p-5 bg-zinc-50 border border-zinc-200/80">
                <div className="flex items-center gap-2 text-red-600 mb-2">
                  <Compass className="w-4 h-4" />
                  <span className="text-xs font-semibold tracking-wider uppercase">Ficha Técnica</span>
                </div>
                <div className="space-y-2 text-xs text-zinc-600 mt-3">
                  <div className="flex justify-between py-1 border-b border-zinc-200">
                    <span className="text-zinc-400">Superficie:</span>
                    <span className="font-medium text-zinc-900">{project.area}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-200">
                    <span className="text-zinc-400">Arquitecto Líder:</span>
                    <span className="font-medium text-zinc-900">{project.leadArchitect}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-zinc-400">Año de Entrega:</span>
                    <span className="font-medium text-zinc-900">{project.year}</span>
                  </div>
                </div>
              </div>

              {project.awards && project.awards.length > 0 && (
                <div className="p-5 bg-zinc-50 border border-zinc-200/80">
                  <div className="flex items-center gap-2 text-red-600 mb-2">
                    <Award className="w-4 h-4" />
                    <span className="text-xs font-semibold tracking-wider uppercase">Reconocimientos</span>
                  </div>
                  <ul className="space-y-2 text-xs text-zinc-700 mt-3">
                    {project.awards.map((award, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 shrink-0" />
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.features && project.features.length > 0 && (
                <div className="p-5 bg-zinc-50 border border-zinc-200/80">
                  <div className="flex items-center gap-2 text-red-600 mb-2">
                    <Layers className="w-4 h-4" />
                    <span className="text-xs font-semibold tracking-wider uppercase">Aspectos Constructivos</span>
                  </div>
                  <ul className="space-y-2 text-xs text-zinc-700 mt-3">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Bottom Modal CTA */}
            <div className="pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-zinc-500">
                ¿Te interesa un planteamiento similar para tu parcela o proyecto patrimonial?
              </p>
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold bg-red-600 hover:bg-red-700 text-white px-6 py-3 transition-colors shadow-md shadow-red-600/20"
              >
                <span>Solicitar Consulta de Proyecto</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
