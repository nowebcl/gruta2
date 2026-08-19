import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { PROJECTS } from '../data/architectureData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const categories = ['Todos', 'Proyecto 1', 'Proyecto 2', 'Proyecto 3', 'Proyecto 4', 'Proyecto 5', 'Proyecto 6', 'Proyecto 7'];

  const filteredProjects = selectedCategory === 'Todos'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  // Check screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset index on category change
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const itemsPerPage = isMobile ? 1 : 2;
  const maxIndex = Math.max(0, filteredProjects.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Keyboard navigation when hovering
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  return (
    <section
      id="proyectos"
      className="px-4 py-24 sm:px-6 md:px-12 lg:px-20 md:py-36 bg-white overflow-hidden"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-zinc-200 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-none"></span>
              <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-red-600">
                Obras & Faenas Realizadas
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-zinc-900">
              Nuestros Proyectos
            </h2>
            <p className="text-sm md:text-base text-zinc-500 font-light max-w-2xl mt-3 leading-relaxed">
              «En Gruta, cada proyecto refleja nuestro compromiso con la calidad y la innovación. Diseñados para perdurar.»
            </p>
          </div>

          {/* Controls & Counter */}
          <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
            {/* Slide Index Counter */}
            <div className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
              <span className="font-semibold text-red-600 text-sm">
                {(currentIndex + 1).toString().padStart(2, '0')}
              </span>
              <span>/</span>
              <span>{filteredProjects.length.toString().padStart(2, '0')}</span>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-3 bg-zinc-50 hover:bg-red-600 hover:text-white text-zinc-800 border border-zinc-200 transition-all duration-300 shadow-sm active:scale-95"
                aria-label="Proyecto anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 bg-zinc-50 hover:bg-red-600 hover:text-white text-zinc-800 border border-zinc-200 transition-all duration-300 shadow-sm active:scale-95"
                aria-label="Proyecto siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-[11px] tracking-[0.12em] uppercase px-4 py-2 shrink-0 transition-all duration-300 border ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white font-medium border-red-600 shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-950 bg-zinc-50 hover:bg-zinc-100 border-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Slider Window */}
        <div className="relative overflow-hidden" ref={sliderRef}>
          <motion.div
            className="flex transition-transform duration-500 ease-out gap-4 sm:gap-6"
            animate={{
              x: `calc(-${currentIndex * (100 / itemsPerPage)}% - ${currentIndex * (isMobile ? 16 : 24) / itemsPerPage}px)`
            }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="w-full md:w-[calc(50%-12px)] shrink-0 group cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <div className="bg-white border border-zinc-200 hover:border-red-600/60 transition-all duration-500 shadow-sm hover:shadow-md flex flex-col h-full overflow-hidden relative">
                  {/* Image Frame */}
                  <div className="relative aspect-[4/3] bg-zinc-100 overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.category} en ${project.location}`}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Tag badge */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-zinc-900 text-[10px] font-mono tracking-wider px-2.5 py-1 border border-zinc-200 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      {project.category}
                    </div>

                    {/* Quick view overlay icon on hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="w-11 h-11 bg-white text-red-600 flex items-center justify-center shadow-lg border border-red-600">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-7 flex items-start justify-between gap-4 bg-white flex-1">
                    <div className="flex items-start gap-3.5 flex-1">
                      <span className="text-xs font-mono tracking-wider text-red-600 font-semibold mt-1 tabular-nums">
                        {project.number}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-light tracking-tight text-zinc-900 mb-1 group-hover:text-red-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-[11px] tracking-wide uppercase text-zinc-500 line-clamp-1">
                          {project.category} <span className="text-red-400">/</span> {project.location} <span className="text-red-400">/</span> {project.year}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Button */}
                    <div className="p-1.5 border border-zinc-200 group-hover:border-red-600 group-hover:bg-red-600 text-zinc-400 group-hover:text-white transition-all duration-300 shrink-0">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress Bar & Dots Indicator */}
        <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Progress track */}
          <div className="w-full sm:w-64 h-1 bg-zinc-100 overflow-hidden relative">
            <div
              className="h-full bg-red-600 transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / Math.max(1, filteredProjects.length - (itemsPerPage - 1))) * 100}%`
              }}
            />
          </div>

          {/* Dots */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            {filteredProjects.slice(0, Math.max(1, filteredProjects.length - (itemsPerPage - 1))).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all duration-300 ${
                  currentIndex === idx ? 'w-6 bg-red-600' : 'w-2 bg-zinc-200 hover:bg-zinc-400'
                }`}
                aria-label={`Ir al slide ${idx + 1}`}
              />
            ))}
          </div>

          <p className="text-[11px] font-mono text-zinc-400 hidden sm:block">
            Usa las flechas o desliza para navegar
          </p>
        </div>
      </div>
    </section>
  );
};
