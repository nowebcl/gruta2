import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { JournalArticle } from '../types';
import { JOURNAL_ARTICLES } from '../data/architectureData';

interface JournalSectionProps {
  onSelectArticle: (article: JournalArticle) => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({ onSelectArticle }) => {
  return (
    <section id="journal" className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-zinc-200 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-red-600"></span>
              <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-red-600">
                Noticias & Crítica
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-zinc-900">
              Journal
            </h2>
          </div>
          <span className="text-xs text-zinc-400 font-mono tracking-widest uppercase mt-4 md:mt-0">
            ({JOURNAL_ARTICLES.length.toString().padStart(2, '0')}) Ensayos & Publicaciones
          </span>
        </div>

        {/* Journal Article List */}
        <div className="divide-y divide-zinc-200 border-b border-zinc-200">
          {JOURNAL_ARTICLES.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => onSelectArticle(article)}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 md:py-9 gap-6 cursor-pointer hover:bg-zinc-50/80 px-4 md:px-6 transition-all duration-300"
            >
              {/* Left Part: Date + Title */}
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-10 flex-1">
                <span className="text-xs font-mono tracking-[0.15em] text-red-600 shrink-0 w-24 tabular-nums font-semibold">
                  {article.date}
                </span>

                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base md:text-xl font-light tracking-tight text-zinc-900 group-hover:text-red-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-light line-clamp-1">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Right Part: Category Badge + Read Time + Arrow */}
              <div className="flex items-center gap-6 shrink-0 self-end md:self-center">
                <span className="text-[11px] font-mono tracking-[0.15em] uppercase text-zinc-600 bg-zinc-100 group-hover:bg-red-50 group-hover:text-red-600 px-2.5 py-1 border border-zinc-200 transition-colors">
                  {article.category}
                </span>

                <span className="text-xs text-zinc-400 font-light hidden lg:inline-block">
                  {article.readTime}
                </span>

                <div className="p-2 text-zinc-400 group-hover:text-red-600 transition-colors">
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
