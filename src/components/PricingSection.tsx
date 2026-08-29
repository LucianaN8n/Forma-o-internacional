import React from 'react';
import { ELIGIBLE_COURSES } from '../data/coursesData';
import { 
  ShieldCheck, 
  Check, 
  Sparkles, 
  Lock, 
  CreditCard,
  GraduationCap,
  ExternalLink,
  Gift
} from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <section id="preco" className="py-16 lg:py-24 bg-[#001f57] text-white relative overflow-hidden">
      
      {/* Ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#c5a059]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173574] border border-[#c5a059]/40 text-[#ecdcb9] text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-4 h-4 text-[#c5a059]" />
            Inscrição Direta
          </div>
          
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
            Garanta Sua Vaga com <span className="gold-gradient-text">Certificação Internacional</span>
          </h2>
          
          <p className="mt-3 text-[#dae2ff] text-sm sm:text-base">
            Acesso vitalício, certificado emitido nos EUA e bônus exclusivo da carteira ATH inclusos.
          </p>
        </div>

        {/* 3 Course Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {ELIGIBLE_COURSES.map((course) => {
            const isFeatured = course.featured;

            return (
              <div
                key={course.id}
                className={`relative rounded-2xl flex flex-col justify-between p-6 transition-all duration-300 ${
                  isFeatured 
                    ? 'bg-[#173574] border-2 border-[#c5a059] shadow-2xl md:-translate-y-1' 
                    : 'bg-[#173574]/60 border border-[#425c9d]/40 shadow-lg'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c5a059] text-[#001438] text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    MAIS PROCURADO
                  </div>
                )}

                <div>
                  <div className="text-2xl mb-2">{course.emoji}</div>
                  <h3 className="font-cinzel text-lg font-bold text-white">
                    {course.title}
                  </h3>
                  <span className="text-xs text-[#c5a059] font-medium block mt-0.5">
                    {course.hours} • 100% Online
                  </span>

                  <div className="space-y-2 mt-4 pt-4 border-t border-[#425c9d]/40 text-xs text-[#dae2ff]">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#25d366] flex-shrink-0" />
                      <span>Certificado Internacional (EUA)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#25d366] flex-shrink-0" />
                      <span>Acesso Vitalício + Videoaulas</span>
                    </div>
                    {course.id === 'terapeuta-master' && (
                      <div className="flex items-center gap-2 text-[#ecdcb9] font-semibold">
                        <Gift className="w-3.5 h-3.5 text-[#c5a059] flex-shrink-0" />
                        <span>BÔNUS: Mentor Terapêutico (Casos & PDF)</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Gift className="w-3.5 h-3.5 text-[#c5a059] flex-shrink-0" />
                      <span>Carteira Digital ATH (1 ano grátis)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#425c9d]/40">
                  <a
                    href={course.checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-[#c5a059] hover:bg-[#b38c3c] text-[#001438] shadow-md transition-all text-center"
                    id={`pricing-btn-${course.id}`}
                  >
                    <span>Inscrever-se Agora</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <p className="text-[10px] text-[#dae2ff] text-center mt-2 flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3 text-[#25d366]" />
                    Hotmart • 7 Dias de Garantia
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Security & Payment Trust Footer */}
        <div className="mt-10 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 text-xs text-[#dae2ff] bg-[#173574]/80 px-5 py-2.5 rounded-xl border border-[#425c9d]/40">
            <span className="flex items-center gap-1.5 text-white">
              <Lock className="w-3.5 h-3.5 text-[#25d366]" />
              Pagamento 100% Seguro
            </span>
            <span className="flex items-center gap-1.5 text-white">
              <ShieldCheck className="w-3.5 h-3.5 text-[#25d366]" />
              7 Dias de Garantia
            </span>
            <span className="flex items-center gap-1.5 text-white">
              <CreditCard className="w-3.5 h-3.5 text-[#c5a059]" />
              Cartão em até 12x, PIX ou Boleto
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
