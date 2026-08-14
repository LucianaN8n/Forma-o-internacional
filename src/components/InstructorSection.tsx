import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2,
  BookmarkCheck,
  Star
} from 'lucide-react';

export const InstructorSection: React.FC = () => {
  return (
    <section id="luciana" className="py-20 lg:py-28 bg-[#071422] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Official Director Visual Card - Matching "Saber Consciente Marca Registrada" */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Golden Glow Border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 via-blue-600 to-amber-300 rounded-3xl blur-md opacity-60 transform -rotate-1" />
              
              <div className="relative rounded-2xl bg-gradient-to-b from-[#0a233f] via-[#081b30] to-[#051120] border-2 border-amber-400/50 p-6 sm:p-7 shadow-2xl overflow-hidden text-center">
                
                {/* Top Badge: Diretora | CRTP 2966 */}
                <div className="flex items-center justify-between border-b border-amber-500/30 pb-3 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-amber-300" />
                    </div>
                    <span className="font-cinzel text-xs font-bold text-amber-300 tracking-wider">
                      SABER CONSCIENTE ®
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-300 bg-[#123157] px-2.5 py-1 rounded border border-amber-400/40">
                    CRTP 2966
                  </span>
                </div>

                {/* Director Avatar / Portrait Display */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 mx-auto rounded-2xl p-1 bg-gradient-to-tr from-amber-400 via-amber-200 to-blue-700 shadow-2xl mb-5 group">
                  <div className="w-full h-full rounded-[14px] overflow-hidden bg-slate-900 relative flex items-center justify-center">
                    <img
                      src="https://static.wixstatic.com/media/516330_e3cce102d8134bf0a8f36deb48858ad9~mv2.png"
                      alt="Diretora Luciana Domingos - CRTP 2966"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a233f]/50 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="absolute -bottom-2 right-2 bg-amber-500 text-slate-950 p-1.5 rounded-full shadow-lg border-2 border-slate-900">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>

                {/* Director Name and Title */}
                <h3 className="font-cinzel text-2xl font-bold text-slate-100">
                  Luciana Domingos
                </h3>
                <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mt-1">
                  Diretora do Instituto Saber Consciente
                </p>

                {/* Marca Registrada Highlight Card */}
                <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-[#0d2e53] to-[#123e6f] border border-amber-400/40 text-left">
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-xs font-cinzel">
                    <BookmarkCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Saber Consciente ® — Marca Registrada</span>
                  </div>
                  <p className="text-[11px] text-slate-200 mt-1 leading-snug">
                    Uma conquista que fortalece nossa identidade, autoridade e o nosso propósito de transformar vidas.
                  </p>
                </div>

                {/* Trust Badges */}
                <div className="mt-4 pt-3 border-t border-slate-700/60 flex flex-wrap justify-center gap-2 text-[11px] text-slate-300">
                  <span className="bg-[#112a47] px-2.5 py-1 rounded-full border border-amber-500/30 font-medium">
                    🛡️ Mais Credibilidade
                  </span>
                  <span className="bg-[#112a47] px-2.5 py-1 rounded-full border border-amber-500/30 font-medium">
                    🔒 Mais Proteção
                  </span>
                  <span className="bg-[#112a47] px-2.5 py-1 rounded-full border border-amber-500/30 font-medium">
                    🇺🇸 Chancelas Internacionais
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Director Bio & Story */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              Diretora Luciana Domingos
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
              Liderança e Dedicação à <span className="gold-gradient-text">Cura, Sabedoria e Consciência</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Com formação acadêmica sólida, <strong>Pós-Graduação em Psicanálise e neurociencia</strong> e <strong>Mestrado em Psicanálise Clínica</strong>, a <strong>Diretora Luciana Domingos</strong> (CRTP 2966) consolidou o <strong>Instituto Saber Consciente ®</strong> como uma das maiores referências em formação integrativa e psicanálise do país.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Como fundadora e diretora, Luciana firmou parcerias estratégicas globais com a <strong>Florida Global University (FGU)</strong> e o <strong>Center of Education and Leadership (CEL)</strong> nos Estados Unidos, garantindo aos seus alunos diplomas executivos internacionais com validade e reconhecimento mundial.
            </p>

            {/* Key Differentiators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 bg-[#0b1e33] p-3.5 rounded-xl border border-slate-700/60">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200">
                  Direção pedagógica humanizada e 100% voltada para a prática clínica real.
                </span>
              </div>

              <div className="flex items-start gap-3 bg-[#0b1e33] p-3.5 rounded-xl border border-slate-700/60">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200">
                  Marca Registrada ® com mais de 18.000 alunos formados no Brasil e exterior.
                </span>
              </div>

              <div className="flex items-start gap-3 bg-[#0b1e33] p-3.5 rounded-xl border border-slate-700/60">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200">
                  Chancela da Florida Global University e Saber Consciente Worldwide LLC.
                </span>
              </div>

              <div className="flex items-start gap-3 bg-[#0b1e33] p-3.5 rounded-xl border border-slate-700/60">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200">
                  Formação ética com suporte direto para atuação no mercado de trabalho.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

