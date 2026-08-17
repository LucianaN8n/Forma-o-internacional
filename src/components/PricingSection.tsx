import React from 'react';
import { ELIGIBLE_COURSES } from '../data/coursesData';
import { 
  ShieldCheck, 
  Check, 
  Sparkles, 
  ArrowRight, 
  CreditCard, 
  Lock, 
  Clock, 
  Globe2,
  Award,
  Zap,
  GraduationCap,
  ExternalLink,
  Gift,
  BadgeCheck
} from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <section id="preco" className="py-20 lg:py-28 bg-gradient-to-b from-[#001f57] via-[#0d2b68] to-[#001847] text-white relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c5a059]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#173574] border border-[#c5a059]/40 text-[#ecdcb9] text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#c5a059]" />
            🎓 Cursos com Certificação Internacional
          </div>
          
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Escolha o Seu Curso & <br />
            <span className="gold-gradient-text">Garanta Sua Vaga Internacional</span>
          </h2>
          
          <p className="mt-4 text-[#dae2ff] text-base sm:text-lg">
            Matricule-se com condição especial, acesso vitalício e certificação executiva internacional emitida nos EUA.
          </p>
        </div>

        {/* 3 Course Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ELIGIBLE_COURSES.map((course) => {
            const isFeatured = course.featured;

            const theme = {
              border: isFeatured 
                ? 'from-[#c5a059] via-[#ecdcb9] to-[#c5a059]' 
                : 'from-[#425c9d] via-[#173574] to-[#425c9d]',
              badge: 'bg-[#c5a059]/20 text-[#ecdcb9] border-[#c5a059]/40',
              btn: 'bg-[#c5a059] hover:bg-[#b38c3c] text-[#001438] shadow-[#c5a059]/20'
            };

            return (
              <div
                key={course.id}
                className={`relative rounded-3xl p-1 bg-gradient-to-b ${theme.border} shadow-2xl flex flex-col justify-between ${
                  isFeatured ? 'lg:-translate-y-2' : ''
                }`}
              >
                {/* Ribbon */}
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#c5a059] to-[#b38c3c] text-[#001438] text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5 z-20">
                    <Sparkles className="w-3.5 h-3.5" />
                    MAIS PROCURADO
                  </div>
                )}

                <div className="bg-[#173574]/90 rounded-[22px] p-6 sm:p-7 text-white flex flex-col justify-between h-full border border-[#425c9d]/40">
                  
                  <div>
                    {/* Title & Emoji */}
                    <div className="text-center pb-5 border-b border-[#425c9d]/40">
                      <div className="text-4xl mb-2">{course.emoji}</div>
                      <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                        {course.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#ecdcb9] mt-1">
                        {course.subtitle}
                      </p>
                      <p className="text-[11px] text-[#dae2ff] mt-1">
                        {course.hours} • 100% Online • Acesso Vitalício
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2.5 my-6 text-xs text-[#dae2ff]">
                      <div className="flex items-start gap-2 p-2 rounded-lg bg-[#001f57]/80 border border-[#425c9d]/40">
                        <Check className="w-4 h-4 text-[#25d366] flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white font-semibold block">
                            ✔ Formação 100% Online
                          </strong>
                          <span className="text-[11px] text-[#dae2ff]">Estude no seu ritmo pelo computador, tablet ou celular</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 p-2 rounded-lg bg-[#001f57]/80 border border-[#c5a059]/30">
                        <Award className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#ecdcb9] font-semibold block">
                            ✔ Emissão Saber Consciente Worldwide LLC (EUA)
                          </strong>
                          <span className="text-[11px] text-[#dae2ff]">Executive Diploma com chancela internacional</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 p-2 rounded-lg bg-[#001f57]/80 border border-[#425c9d]/40">
                        <Globe2 className="w-4 h-4 text-[#b2c5ff] flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white font-semibold block">
                            ✔ Avalizado por @fgu_online e @cel.education
                          </strong>
                          <span className="text-[11px] text-[#dae2ff]">Florida Global University ({course.hours})</span>
                        </div>
                      </div>

                      {/* Bonus ATH Digital Card */}
                      <div className="flex items-start gap-2 p-2.5 rounded-lg bg-[#c5a059]/15 border border-[#c5a059]/40 shadow-sm">
                        <Gift className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#ecdcb9] font-bold block flex items-center gap-1">
                            🎁 BÔNUS: Carteira Digital ATH Associação
                          </strong>
                          <span className="text-[11px] text-[#dae2ff]">
                            Emitida pela ATH Associação, <span className="text-[#25d366] font-semibold">100% gratuita por 1 ano</span>
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#25d366] flex-shrink-0 mt-0.5" />
                        <span><strong>Certificação Internacional</strong> inclusa na formação</span>
                      </div>

                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#25d366] flex-shrink-0 mt-0.5" />
                        <span><strong>Acesso Vitalício</strong> à plataforma e suporte a dúvidas</span>
                      </div>
                    </div>
                  </div>

                  {/* Hotmart Direct Link CTA */}
                  <div className="pt-2">
                    <a
                      href={course.checkoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm sm:text-base shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all text-center ${theme.btn}`}
                      id={`pricing-btn-${course.id}`}
                    >
                      <span>👉 Inscrever-se Agora</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <p className="text-[11px] text-[#dae2ff] text-center mt-2.5 flex items-center justify-center gap-1">
                      <Lock className="w-3 h-3 text-[#25d366]" />
                      Checkout Seguro Hotmart
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Global Security & Payment Trust Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-5 text-xs text-[#dae2ff] bg-[#173574]/80 px-6 py-3 rounded-2xl border border-[#425c9d]/40">
            <span className="flex items-center gap-1.5 text-white">
              <Lock className="w-4 h-4 text-[#25d366]" />
              Pagamento 100% Seguro Hotmart
            </span>
            <span className="flex items-center gap-1.5 text-white">
              <ShieldCheck className="w-4 h-4 text-[#25d366]" />
              7 Dias de Garantia Incondicional
            </span>
            <span className="flex items-center gap-1.5 text-white">
              <CreditCard className="w-4 h-4 text-[#c5a059]" />
              Cartão em até 12x, PIX ou Boleto
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
