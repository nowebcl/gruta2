import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight, Maximize2, ShieldCheck, Sparkles, Flame } from 'lucide-react';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  poster?: string;
  aspect?: string;
}

const SOLDADURA_MEDIA: MediaItem[] = [
  {
    id: 'soldadura-img-01',
    type: 'image',
    src: '/soldadura-inoxidable/soldadura-01.jpg',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'soldadura-img-02',
    type: 'image',
    src: '/soldadura-inoxidable/soldadura-02.jpg',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 'soldadura-img-03',
    type: 'image',
    src: '/soldadura-inoxidable/soldadura-03.jpg',
    aspect: 'aspect-[16/9]',
  },
  {
    id: 'soldadura-img-04',
    type: 'image',
    src: '/soldadura-inoxidable/soldadura-04.jpg',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 'soldadura-img-05',
    type: 'image',
    src: '/soldadura-inoxidable/soldadura-05.jpg',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 'soldadura-img-06',
    type: 'image',
    src: '/soldadura-inoxidable/soldadura-06.jpg',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'soldadura-vid-01',
    type: 'video',
    src: '/soldadura-inoxidable/soldadura-video-01.mp4',
    aspect: 'aspect-[9/16]',
  },
  {
    id: 'soldadura-vid-02',
    type: 'video',
    src: '/soldadura-inoxidable/soldadura-video-02.mp4',
    aspect: 'aspect-[9/16]',
  },
  {
    id: 'soldadura-vid-03',
    type: 'video',
    src: '/soldadura-inoxidable/soldadura-video-03.mp4',
    aspect: 'aspect-[9/16]',
  },
  {
    id: 'soldadura-vid-04',
    type: 'video',
    src: '/soldadura-inoxidable/soldadura-video-04.mp4',
    aspect: 'aspect-[9/16]',
  },
  {
    id: 'soldadura-vid-05',
    type: 'video',
    src: '/soldadura-inoxidable/soldadura-video-05.mp4',
    aspect: 'aspect-[9/16]',
  },
];

export const SoldaduraSection: React.FC = () => {
  const [filter, setFilter] = useState<'todos' | 'fotos' | 'videos'>('fotos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredMedia = SOLDADURA_MEDIA.filter((item) => {
    if (filter === 'fotos') return item.type === 'image';
    if (filter === 'videos') return item.type === 'video';
    return true;
  });

  const activeMedia = lightboxIndex !== null ? filteredMedia[lightboxIndex] : null;

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % filteredMedia.length);
  }, [lightboxIndex, filteredMedia.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + filteredMedia.length) % filteredMedia.length);
  }, [lightboxIndex, filteredMedia.length]);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, handleClose, handleNext, handlePrev]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  return (
    <section
      id="soldadura"
      className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-zinc-50/50 border-b border-zinc-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header matching the exact Gruta 23 editorial style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-zinc-200 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-red-600"></span>
              <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-red-600">
                Especialidad Técnica & Maestranza
              </p>
            </div>
            {/* General title strictly without individual image names */}
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-zinc-900 uppercase">
              SOLDADURA INOXIDABLE
            </h2>
            <p className="text-sm md:text-base text-zinc-500 font-light max-w-2xl mt-3 leading-relaxed">
              «Uniones técnicas de alta pureza, estanqueidad y acabados sanitarios en acero inoxidable. Precisión milimétrica desarrollada para responder a los estándares industriales y arquitectónicos más exigentes.»
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={() => {
                setFilter('fotos');
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 text-xs tracking-wider uppercase transition-all duration-300 font-mono ${
                filter === 'fotos'
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-400'
              }`}
            >
              Fotografías ({SOLDADURA_MEDIA.filter((m) => m.type === 'image').length})
            </button>
            <button
              onClick={() => {
                setFilter('videos');
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 text-xs tracking-wider uppercase transition-all duration-300 font-mono ${
                filter === 'videos'
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-400'
              }`}
            >
              Videos en Faena ({SOLDADURA_MEDIA.filter((m) => m.type === 'video').length})
            </button>
            <button
              onClick={() => {
                setFilter('todos');
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 text-xs tracking-wider uppercase transition-all duration-300 font-mono ${
                filter === 'todos'
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-400'
              }`}
            >
              Todos ({SOLDADURA_MEDIA.length})
            </button>
          </div>
        </div>

        {/* Gallery Grid - strictly with NO individual names on images */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredMedia.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative overflow-hidden bg-zinc-900 border border-zinc-200 hover:border-red-600 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl aspect-[4/3] flex items-center justify-center"
              >
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt="Soldadura Inoxidable"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full relative bg-zinc-900">
                    <video
                      src={item.src}
                      muted
                      playsInline
                      loop
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-500"
                      onMouseEnter={(e) => {
                        const target = e.currentTarget;
                        target.play().catch(() => {});
                      }}
                      onMouseLeave={(e) => {
                        const target = e.currentTarget;
                        target.pause();
                        target.currentTime = 0;
                      }}
                    />
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono tracking-widest text-white uppercase flex items-center gap-1.5 border border-white/10">
                      <Play className="w-3 h-3 fill-red-600 text-red-600" />
                      <span>Video</span>
                    </div>
                  </div>
                )}

                {/* Subtle Hover Overlay - NO names, only minimal action icon */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md text-zinc-900 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    {item.type === 'video' ? (
                      <Play className="w-5 h-5 fill-zinc-900 ml-0.5" />
                    ) : (
                      <Maximize2 className="w-5 h-5" />
                    )}
                  </div>
                </div>

                {/* Subtle red corner accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Technical Quality Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-zinc-200">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white border border-zinc-200 text-red-600">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider text-zinc-900">
                Acabados Sanitarios
              </h4>
              <p className="text-xs text-zinc-500 font-light mt-1 leading-relaxed">
                Superficies homogéneas libres de porosidad para industrias alimentaria, acuícola y química.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-white border border-zinc-200 text-red-600">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider text-zinc-900">
                Control Térmico TIG / MIG
              </h4>
              <p className="text-xs text-zinc-500 font-light mt-1 leading-relaxed">
                Minimización del aporte de calor y prevención de deformaciones estructurales en aceros inoxidables.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-white border border-zinc-200 text-red-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider text-zinc-900">
                Resistencia a la Corrosión
              </h4>
              <p className="text-xs text-zinc-500 font-light mt-1 leading-relaxed">
                Protección pasivada y durabilidad superior en ambientes húmedos y salinos del sur de Chile.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={handleClose}
          >
            {/* Top Bar with Counter and Close */}
            <div
              className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-red-600" />
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-white">
                  SOLDADURA INOXIDABLE
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  [{String(lightboxIndex! + 1).padStart(2, '0')} / {String(filteredMedia.length).padStart(2, '0')}]
                </span>
              </div>

              <button
                onClick={handleClose}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Cerrar vista previa"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Arrows */}
            {filteredMedia.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all border border-white/20 z-10"
                  aria-label="Elemento anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all border border-white/20 z-10"
                  aria-label="Elemento siguiente"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Content Display */}
            <motion.div
              key={activeMedia.id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[85vh] w-full flex items-center justify-center p-2"
              onClick={(e) => e.stopPropagation()}
            >
              {activeMedia.type === 'image' ? (
                <img
                  src={activeMedia.src}
                  alt="Soldadura Inoxidable"
                  className="max-w-full max-h-[82vh] object-contain shadow-2xl border border-white/10"
                />
              ) : (
                <video
                  src={activeMedia.src}
                  controls
                  autoPlay
                  playsInline
                  className="max-w-full max-h-[82vh] shadow-2xl border border-white/10 bg-black"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
