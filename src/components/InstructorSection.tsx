import React from 'react';
import { 
  GraduationCap, 
  Award, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';

export const InstructorSection: React.FC = () => {
  const instructors = [
    {
      name: "Luciana Domingos",
      role: "Diretora Geral & Fundadora",
      credential: "CRTP 2966 • Mestre em Psicologia Clínica (EUA)",
      image: "https://static.wixstatic.com/media/516330_e3cce102d8134bf0a8f36deb48858ad9~mv2.png",
      bio: "Pós-graduada em Psicanálise e Neurociência, Mestre pela Christian Business School (Flórida). Lidera a parceria com Florida Global University e CEL Education.",
      highlight: "+50.000 Alunos"
    },
    {
      name: "Prof. Rogério Temporim",
      role: "Psicoterapia, Psicanálise & Cristaloterapia",
      credential: "Graduado USP • Mestre em Psicologia (EUA)",
      image: "https://saberconscienteinstituto.com/wp-content/uploads/2023/05/rogerio-temporim-1.jpg",
      bio: "Psicanalista clínico, neuropsicanalista, escritor e ministrante de cristaloterapia. Conduz formações clínicas estruturadas e supervisões com mais de 77 mil alunos capacitados.",
      highlight: "+77.000 Alunos"
    },
    {
      name: "Profª. Ana Esteves",
      role: "Ministrante de Neurociência & Terapias",
      credential: "Psicanálise, Neurociência & ABA",
      image: "https://saberconscienteinstituto.com/wp-content/uploads/2024/06/ana-esteves.jpg",
      bio: "Psicoterapeuta e terapeuta comportamental especialista em saúde mental, psicopatologia forense, terapia infantil e abordagens integrativas.",
      highlight: "Saúde Mental"
    },
    {
      name: "Prof. Francisco Miguel Kessler",
      role: "Terapia Quântica, Neurociência & Hipnose",
      credential: "Certificação Internacional • Mestre Reiki",
      image: "https://saberconscienteinstituto.com/wp-content/uploads/2023/05/francisco.png",
      bio: "Especialista em terapia quântica, hipnoterapeuta internacional e especialista em neurociência aplicada, reprogramação neural e desenvolvimento comportamental.",
      highlight: "Quântica & Hipnose"
    },
    {
      name: "Profª. Mariana Sallum",
      role: "Ministrante de Aromaterapia & Práticas",
      credential: "Aromaterapia & Terapias Corporais",
      image: "https://saberconscienteinstituto.com/wp-content/uploads/2023/05/mariana.png",
      bio: "Especialista em óleos essenciais, cromoterapia, ventosaterapia e técnicas corporais para restauração da saúde e bem-estar integral.",
      highlight: "Aromaterapia"
    }
  ];

  return (
    <section id="luciana" className="py-16 lg:py-24 bg-[#001f57] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173574] border border-[#c5a059]/40 text-[#ecdcb9] text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-4 h-4 text-[#c5a059]" />
            Corpo Docente
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
            Aprenda com Professores de <span className="gold-gradient-text">Autoridade</span>
          </h2>
          <p className="text-[#dae2ff] text-sm sm:text-base mt-3 leading-relaxed">
            Equipe formada por mestres, neurocientistas e especialistas com sólida experiência acadêmica e prática clínica.
          </p>
        </div>

        {/* 6 Instructors Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {instructors.map((inst, idx) => (
            <div 
              key={idx}
              className="rounded-2xl bg-[#173574]/60 border border-[#425c9d]/40 hover:border-[#c5a059]/60 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-md"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#001438] border-2 border-[#c5a059]/60 flex-shrink-0">
                    <img
                      src={inst.image}
                      alt={inst.name}
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-base font-bold text-white">
                      {inst.name}
                    </h3>
                    <p className="text-xs text-[#c5a059] font-medium">
                      {inst.role}
                    </p>
                    <span className="text-[10px] text-[#dae2ff] block mt-0.5">
                      {inst.credential}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#dae2ff] leading-relaxed pt-3 border-t border-[#425c9d]/40">
                  {inst.bio}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-[#425c9d]/30 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-[#ecdcb9] bg-[#001f57] px-2 py-0.5 rounded border border-[#c5a059]/30">
                  {inst.highlight}
                </span>
                <span className="text-[10px] text-[#dae2ff] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#25d366]" />
                  Docente Saber Consciente
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
