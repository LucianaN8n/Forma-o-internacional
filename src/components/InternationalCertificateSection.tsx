import React from 'react';
import { 
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  GraduationCap, 
  ArrowRight 
} from 'lucide-react';

export const InternationalCertificateSection: React.FC = () => {
  return (
    <section id="certificado" className="relative py-20 lg:py-28 bg-[#050d17] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-blue-600/15 via-amber-500/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <Globe className="w-4 h-4 text-amber-400" />
            Certificação Internacional com Validade Global
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight leading-tight">
            Sua Formação com <span className="gold-gradient-text">Reconhecimento Internacional</span>
          </h2>
          
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Tenha em mãos uma credencial de alto prestígio emitida nos <strong>Estados Unidos</strong> pela Saber Consciente Worldwide LLC, certificada por @cel.education e avalizada por @fgu_online (Florida Global University).
          </p>
        </div>

        {/* Master Showcase: Official Banner Graphic Replica + Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Visual Poster Component (Direct Display of the Official Certificate Artwork) */}
          <div className="lg:col-span-7">
            
            {/* Outer Golden Framed Canvas */}
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-amber-400 via-amber-600/60 to-blue-900 shadow-2xl shadow-blue-950">
              
              <div className="relative rounded-[15px] bg-[#0c1f36] overflow-hidden shadow-2xl">
                <img
                  src="https://static.wixstatic.com/media/516330_1fffd21d55af4b59960247345c48b3bb~mv2.jpeg"
                  alt="Certificado Internacional - Florida Global University e Instituto Saber Consciente"
                  className="w-full h-auto object-contain rounded-[14px] shadow-2xl block"
                  referrerPolicy="no-referrer"
                />

                {/* Overlap Badge covering "Exclusivo para alunos do Instituto Saber Consciente" */}
                <div 
                  className="absolute z-10 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#faf8f5] via-white to-[#f4f0eb] border border-[#d4af37]/60 shadow-md backdrop-blur-sm"
                  style={{
                    top: '43.5%',
                    left: '4.2%',
                    maxWidth: '47%',
                  }}
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0d2a4d] text-amber-300 flex items-center justify-center flex-shrink-0 shadow-sm border border-amber-400/40">
                    <Globe className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-300" />
                  </div>
                  <span className="text-[8px] xs:text-[9px] sm:text-[11px] md:text-xs font-bold text-[#0c2340] leading-tight font-cinzel whitespace-nowrap">
                    Reconhecimento Internacional
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Credentials & Benefits Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#0b1f36] border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-slate-100 mb-5 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-amber-400 flex-shrink-0" />
                Chancela Internacional
              </h3>

              {/* Requirement highlights */}
              <div className="space-y-4">
                
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-200 text-sm block">
                      ✔ Emissão pela Saber Consciente Worldwide LLC (EUA)
                    </strong>
                    <p className="text-slate-300 text-xs mt-0.5">
                      Empresa internacional sediada e registrada legalmente nos Estados Unidos da América, conferindo status global à sua formação.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-400/30 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-blue-200 text-sm block">
                      ✔ “Certificado por @cel.education e avalizado por @fgu_online”
                    </strong>
                    <p className="text-slate-300 text-xs mt-0.5">
                      Chancela da Florida Global University (FGU Online) e Continuing Education Leadership (CEL Education), garantindo autoridade acadêmica internacional.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100 text-sm block">
                      ✔ Cargas Horárias Oficiais Registradas no Diploma
                    </strong>
                    <p className="text-slate-300 text-xs mt-0.5">
                      Terapeuta Holístico Master (568h), Psicoterapia e Psicanálise (600h) e Neurociência Comportamental (150h), comprovando sólida preparação teórica e prática.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100 text-sm block">
                      ✔ 100% Online e Sem Taxas Extras
                    </strong>
                    <p className="text-slate-300 text-xs mt-0.5">
                      Estude no seu próprio ritmo pela plataforma digital. A emissão do Certificado Internacional já está inclusa na sua matrícula com desconto.
                    </p>
                  </div>
                </div>

              </div>

              {/* Direct CTA to checkout */}
              <div className="mt-7">
                <a
                  href="#cursos-elegiveis"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
                  id="certificate-section-cta-btn"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>Escolher Meu Curso com Certificado Internacional</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-center text-[11px] text-slate-400 mt-2.5 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Pagamento Seguro Hotmart • Acesso Imediato e Vitalício
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
