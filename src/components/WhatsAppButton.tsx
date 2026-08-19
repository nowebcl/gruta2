import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/architectureData';

export const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={STUDIO_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 shadow-lg shadow-emerald-950/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 border border-emerald-500/30"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-100 leading-none">
            Escríbenos
          </span>
          <span className="text-xs font-semibold tracking-wide leading-tight">
            WhatsApp Gruta
          </span>
        </div>
      </a>
    </div>
  );
};
