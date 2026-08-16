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
    <section id="preco" className="py-20 lg:py-28 bg-gradient-to-b from-[#06111d] via-[#091f35] to-[#06101c] relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
            🎓 Cursos com Certificação Internacional
          </div>
          
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100">
            Escolha o Seu Curso & <br />
            <span className="gold-gradient-text">Garanta Sua Vaga Internacional</span>
          </h2>
          
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Matricule-se com condição especial, acesso vitalício e certificação executiva internacional emitida nos EUA.
          </p>
        </div>

        {/* 3 Course Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ELIGIBLE_COURSES.map((course) => {
            const isFeatured = course.featured;

            const theme = {
              violet: {
                border: 'from-purple-500 via-indigo-500 to-purple-600',
                badge: 'bg-purple-500/20 text-purple-200 border-purple-400/40',
                btn: 'bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-600/30',
                accent: 'text-purple-400'
              },
              emerald: {
                border: 'from-amber-400 via-emerald-400 to-amber-500',
                badge: 'bg-emerald-500/20 text-emerald-200 border-emerald-400/40',
                btn: 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 shadow-amber-500/30',
                accent: 'text-emerald-400'
              },
              amber: {
                border: 'from-amber-500 via-amber-400 to-amber-600',
                badge: 'bg-amber-500/20 text-amber-200 border-amber-400/40',
                btn: 'bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-slate-950 shadow-amber-600/30',
                accent: 'text-amber-400'
              }
            }[course.highlightColor];

            return (
              <div
                key={course.id}
                className={`relative rounded-3xl p-1 bg-gradient-to-b ${theme.border} shadow-2xl flex flex-col justify-between ${
                  isFeatured ? 'lg:-translate-y-2' : ''
                }`}
              >
                {/* Ribbon */}
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-emerald-500 text-slate-950 text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5 z-20">
                    <Sparkles className="w-3.5 h-3.5" />
                    MAIS PROCURADO
                  </div>
                )}

                <div className="bg-[#091b2e] rounded-[22px] p-6 sm:p-7 text-slate-100 flex flex-col justify-between h-full">
                  
                  <div>
                    {/* Title & Emoji */}
                    <div className="text-center pb-5 border-b border-slate-700/60">
                      <div className="text-4xl mb-2">{course.emoji}</div>
                      <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-100">
                        {course.title}
                      </h3>
                      <p className="text-xs font-semibold text-amber-400 mt-1">
                        {course.subtitle}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        {course.hours} • 100% Online • Acesso Vitalício
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2.5 my-6 text-xs text-slate-200">
                      <div className="flex items-start gap-2 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-emerald-200 font-semibold block">
                            ✔ Formação 100% Online
                          </strong>
                          <span className="text-[11px] text-slate-300">Estude no seu ritmo pelo computador, tablet ou celular</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                        <Award className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-amber-200 font-semibold block">
                            ✔ Emissão Saber Consciente Worldwide LLC (EUA)
                          </strong>
                          <span className="text-[11px] text-slate-300">Executive Diploma com chancela internacional</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 p-2 rounded-lg bg-blue-500/10 border border-blue-400/20">
                        <Globe2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-blue-200 font-semibold block">
                            ✔ Avalizado por @fgu_online e @cel.education
                          </strong>
                          <span className="text-[11px] text-slate-300">Florida Global University ({course.hours})</span>
                        </div>
                      </div>

                      {/* Bonus ATH Digital Card */}
                      <div className="flex items-start gap-2 p-2.5 rounded-lg bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-amber-500/5 border border-amber-400/40 shadow-sm">
                        <Gift className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-amber-300 font-bold block flex items-center gap-1">
                            🎁 BÔNUS: Carteira Digital ATH Associação
                          </strong>
                          <span className="text-[11px] text-slate-200">
                            Emitida pela ATH Associação, <span className="text-emerald-400 font-semibold">100% gratuita por 1 ano</span>
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span><strong>Certificação Internacional</strong> inclusa na formação</span>
                      </div>

                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
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

                    <p className="text-[11px] text-slate-400 text-center mt-2.5 flex items-center justify-center gap-1">
                      <Lock className="w-3 h-3 text-emerald-400" />
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
          <div className="inline-flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400 bg-[#091b2e] px-6 py-3 rounded-2xl border border-slate-800">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Lock className="w-4 h-4 text-emerald-400" />
              Pagamento 100% Seguro Hotmart
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              7 Dias de Garantia Incondicional
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CreditCard className="w-4 h-4 text-amber-400" />
              Cartão em até 12x, PIX ou Boleto
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
