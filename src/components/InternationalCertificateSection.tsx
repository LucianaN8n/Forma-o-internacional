import React from 'react';
import { 
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  GraduationCap, 
  ArrowRight,
  Gift
} from 'lucide-react';

export const InternationalCertificateSection: React.FC = () => {
  return (
    <section id="certificado" className="relative py-20 lg:py-28 bg-[#001f57] text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#173574] via-[#c5a059]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c5a059]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#173574] border border-[#c5a059]/40 text-[#ecdcb9] text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <Globe className="w-4 h-4 text-[#c5a059]" />
            Certificação Internacional com Validade Global
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Sua Formação com <span className="gold-gradient-text">Reconhecimento Internacional</span>
          </h2>
          
          <p className="mt-4 text-[#dae2ff] text-base sm:text-lg leading-relaxed">
            Tenha em mãos uma credencial de alto prestígio emitida nos <strong>Estados Unidos</strong> pela Saber Consciente Worldwide LLC, certificada por @cel.education e avalizada por @fgu_online (Florida Global University).
          </p>
        </div>

        {/* Master Showcase: Official Banner Graphic Replica + Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Visual Poster Component (Direct Display of the Official Certificate Artwork) */}
          <div className="lg:col-span-7">
            
            {/* Outer Golden Framed Canvas */}
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-[#c5a059] via-[#173574] to-[#c5a059] shadow-2xl">
              
              <div className="relative rounded-[15px] bg-[#001f57] overflow-hidden shadow-2xl">
                <img
                  src="https://static.wixstatic.com/media/516330_1fffd21d55af4b59960247345c48b3bb~mv2.jpeg"
                  alt="Certificado Internacional - Florida Global University e Instituto Saber Consciente"
                  className="w-full h-auto object-contain rounded-[14px] shadow-2xl block"
                  referrerPolicy="no-referrer"
                />

                {/* Overlap Badge covering "Exclusivo para alunos do Instituto Saber Consciente" */}
                <div 
                  className="absolute z-10 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#faf8f5] via-white to-[#f4f0eb] border border-[#c5a059]/80 shadow-md backdrop-blur-sm"
                  style={{
                    top: '43.5%',
                    left: '4.2%',
                    maxWidth: '47%',
                  }}
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#001f57] text-[#c5a059] flex items-center justify-center flex-shrink-0 shadow-sm border border-[#c5a059]/40">
                    <Globe className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#c5a059]" />
                  </div>
                  <span className="text-[8px] xs:text-[9px] sm:text-[11px] md:text-xs font-bold text-[#001f57] leading-tight font-cinzel whitespace-nowrap">
                    Reconhecimento Internacional
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Credentials & Benefits Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#173574]/70 border border-[#425c9d]/40 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059]/5 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-white mb-5 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-[#c5a059] flex-shrink-0" />
                Chancela Internacional
              </h3>

              {/* Requirement highlights */}
              <div className="space-y-4">
                
                <div className="p-3.5 rounded-xl bg-[#001f57]/80 border border-[#c5a059]/30 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c5a059] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#ecdcb9] text-sm block">
                      ✔ Emissão pela Saber Consciente Worldwide LLC (EUA)
                    </strong>
                    <p className="text-[#dae2ff] text-xs mt-0.5">
                      Empresa internacional sediada e registrada legalmente nos Estados Unidos da América, conferindo status global à sua formação.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#001f57]/80 border border-[#425c9d]/50 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#b2c5ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#dae2ff] text-sm block">
                      ✔ “Certificado por @cel.education e avalizado por @fgu_online”
                    </strong>
                    <p className="text-[#dae2ff] text-xs mt-0.5">
                      Chancela da Florida Global University (FGU Online) e Continuing Education Leadership (CEL Education), garantindo autoridade acadêmica internacional.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#001f57]/80 border border-[#425c9d]/40 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#25d366] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm block">
                      ✔ Cargas Horárias Oficiais Registradas no Diploma
                    </strong>
                    <p className="text-[#dae2ff] text-xs mt-0.5">
                      Terapeuta Holístico Master (568h), Psicoterapia e Psicanálise (600h) e Neurociência Comportamental (150h), comprovando sólida preparação teórica e prática.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#001f57]/80 border border-[#425c9d]/40 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#25d366] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm block">
                      ✔ 100% Online e Sem Taxas Extras
                    </strong>
                    <p className="text-[#dae2ff] text-xs mt-0.5">
                      Estude no seu próprio ritmo pela plataforma digital. A emissão do Certificado Internacional já está inclusa na sua matrícula com desconto.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#c5a059]/20 border border-[#c5a059]/50 flex items-start gap-3 shadow-md">
                  <Gift className="w-5 h-5 text-[#c5a059] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#ecdcb9] text-sm block">
                      🎁 BÔNUS: Carteira Digital ATH Associação (1 ano grátis)
                    </strong>
                    <p className="text-slate-200 text-xs mt-0.5">
                      Credencial profissional digital emitida pela ATH Associação de Terapeutas Holísticos, inclusa gratuitamente por 1 ano para todos os alunos matriculados.
                    </p>
                  </div>
                </div>

              </div>

              {/* Direct CTA to checkout */}
              <div className="mt-7">
                <a
                  href="#cursos-elegiveis"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#c5a059] hover:bg-[#b38c3c] text-[#001438] font-bold text-base shadow-xl shadow-[#c5a059]/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
                  id="certificate-section-cta-btn"
                >
                  <GraduationCap className="w-5 h-5 text-[#001438]" />
                  <span>Escolher Meu Curso com Certificado Internacional</span>
                  <ArrowRight className="w-5 h-5 text-[#001438]" />
                </a>
                <p className="text-center text-[11px] text-[#dae2ff] mt-2.5 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#25d366]" />
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
