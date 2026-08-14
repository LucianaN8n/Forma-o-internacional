import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = "https://wa.me/5511992338606?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20os%20cursos%20e%20a%20certifica%C3%A7%C3%A3o%20internacional.";

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 flex items-center group">
      {/* Tooltip on hover */}
      <span className="hidden sm:block mr-3 px-3.5 py-1.5 rounded-full bg-slate-900/95 text-white text-xs font-semibold shadow-xl border border-emerald-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Dúvidas? Fale no WhatsApp <span className="text-emerald-400 font-bold">(11) 99233-8606</span>
      </span>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contato via WhatsApp (11) 99233-8606"
        id="floating-whatsapp-btn"
        className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-emerald-950/60 hover:scale-110 active:scale-95 transition-all duration-300 ring-4 ring-emerald-500/30 group"
      >
        {/* Radar ping animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
        
        {/* Inner Icon */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white stroke-none relative z-10" />

        {/* Small badge */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 border border-slate-950 text-[9px] font-bold text-slate-950 items-center justify-center">
            1
          </span>
        </span>
      </a>
    </aside>
  );
};
