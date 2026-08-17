import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/coursesData';
import { ChevronDown, MessageCircleQuestion, ArrowRight, GraduationCap, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const whatsappUrl = "https://wa.me/5511992338606?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20os%20cursos%20com%20certifica%C3%A7%C3%A3o%20internacional.";

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#001f57] relative text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#173574] border border-[#c5a059]/40 text-[#ecdcb9] text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageCircleQuestion className="w-3.5 h-3.5 text-[#c5a059]" />
            Tire Suas Dúvidas
          </div>
          
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
            Perguntas <span className="gold-gradient-text">Frequentes</span>
          </h2>
          
          <p className="mt-4 text-[#dae2ff] text-sm sm:text-base">
            Esclareça todas as dúvidas sobre as formações, certificação internacional emitida nos EUA, carga horária e acesso.
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#173574] border-[#c5a059]/60 shadow-lg'
                    : 'bg-[#173574]/60 border-[#425c9d]/40 hover:border-[#c5a059]/40'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  id={`faq-btn-${idx}`}
                >
                  <span className="font-cinzel text-sm sm:text-base font-bold text-white">
                    {item.question}
                  </span>
                  
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#c5a059] text-[#001438] rotate-180' : 'bg-[#001f57] text-[#dae2ff]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 text-xs sm:text-sm text-[#dae2ff] leading-relaxed border-t border-[#425c9d]/40">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#173574] to-[#0d2b68] border border-[#c5a059]/40 shadow-xl">
          <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white mb-2">
            Ainda tem alguma dúvida específica?
          </h3>
          <p className="text-xs sm:text-sm text-[#dae2ff] mb-6 max-w-lg mx-auto leading-relaxed">
            Fale diretamente com a equipe do Instituto Saber Consciente pelo WhatsApp e tire todas as suas dúvidas sobre matrículas, valores e certificação.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-[#001438] font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950/40 hover:scale-105 transition-all"
              id="faq-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4 fill-[#001438] stroke-none" />
              <span>Chamar no WhatsApp: (11) 99233-8606</span>
            </a>

            <a
              href="#cursos-elegiveis"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#c5a059] hover:bg-[#b38c3c] text-[#001438] text-xs sm:text-sm font-bold transition-all shadow-md"
            >
              <GraduationCap className="w-4 h-4 text-[#001438]" />
              <span>Ver Cursos Disponíveis</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
