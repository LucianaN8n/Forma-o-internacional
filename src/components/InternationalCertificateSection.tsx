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
    <section id="certificado" className="relative py-16 lg:py-24 bg-[#001f57] text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#173574] via-[#c5a059]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173574] border border-[#c5a059]/40 text-[#ecdcb9] text-xs font-semibold mb-3 tracking-wide uppercase">
            <Globe className="w-4 h-4 text-[#c5a059]" />
            Certificação Internacional
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Sua Formação com <span className="gold-gradient-text">Reconhecimento Global</span>
          </h2>
          
          <p className="mt-3 text-[#dae2ff] text-sm sm:text-base leading-relaxed">
            Diploma oficial emitido nos <strong>Estados Unidos</strong> pela Saber Consciente Worldwide LLC, certificado por <strong>CEL Education</strong> e avalizado por <strong>Florida Global University (FGU)</strong>.
          </p>
        </div>

        {/* Master Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Certificate Artwork */}
          <div className="lg:col-span-7">
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
                  className="absolute z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gradient-to-r from-[#faf8f5] via-white to-[#f4f0eb] border border-[#c5a059]/80 shadow-md backdrop-blur-sm"
                  style={{
                    top: '43.5%',
                    left: '4.2%',
                    maxWidth: '47%',
                  }}
                >
                  <div className="w-4 h-4 rounded-full bg-[#001f57] text-[#c5a059] flex items-center justify-center flex-shrink-0">
                    <Globe className="w-2.5 h-2.5 text-[#c5a059]" />
                  </div>
                  <span className="text-[9px] sm:text-[11px] font-bold text-[#001f57] leading-tight font-cinzel whitespace-nowrap">
                    Reconhecimento Internacional
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Credentials Column */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-[#173574]/70 border border-[#425c9d]/40 rounded-2xl p-6 shadow-xl">
              <h3 className="text-lg font-cinzel font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#c5a059]" />
                O que torna este diploma especial:
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-[#dae2ff]">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Emissão Internacional nos EUA</strong>
                    <span>Registrado e emitido legalmente pela Saber Consciente Worldwide LLC.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-[#dae2ff]">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Chancela Acadêmica FGU & CEL</strong>
                    <span>Avalizado pela Florida Global University e CEL Education Leadership.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-[#dae2ff]">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">100% Online & Sem Taxas Extras</strong>
                    <span>Certificado internacional já incluso na matrícula sem custos adicionais.</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#c5a059]/15 border border-[#c5a059]/40 flex items-start gap-2.5 text-xs">
                  <Gift className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#ecdcb9] block font-semibold">BÔNUS: Carteira Digital ATH</strong>
                    <span className="text-[#dae2ff]">Inclusa gratuitamente por 1 ano para alunos inscritos.</span>
                  </div>
                </div>
              </div>

              {/* Direct CTA */}
              <div className="mt-5 pt-4 border-t border-[#425c9d]/40">
                <a
                  href="#cursos-elegiveis"
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#c5a059] hover:bg-[#b38c3c] text-[#001438] font-bold text-xs sm:text-sm shadow-md transition-all text-center"
                  id="certificate-section-cta-btn"
                >
                  <GraduationCap className="w-4 h-4 text-[#001438]" />
                  <span>Ver Cursos Elegíveis</span>
                  <ArrowRight className="w-4 h-4 text-[#001438]" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
