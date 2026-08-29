import React, { useState } from 'react';
import { ELIGIBLE_COURSES } from '../data/coursesData';
import { 
  GraduationCap, 
  Star, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  BookOpen, 
  ExternalLink,
  Gift,
  Bot,
  CheckCircle2,
  HelpCircle,
  FileText
} from 'lucide-react';

export const EligibleCoursesSection: React.FC = () => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(ELIGIBLE_COURSES[1].id);

  const selectedCourse = ELIGIBLE_COURSES.find(c => c.id === selectedCourseId) || ELIGIBLE_COURSES[1];

  return (
    <section id="cursos-elegiveis" className="py-16 lg:py-24 bg-[#f8f9fa] relative overflow-hidden text-[#191c1d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#001f57]/10 border border-[#001f57]/20 text-[#001f57] text-xs font-bold mb-3 tracking-wide uppercase">
            <GraduationCap className="w-4 h-4 text-[#001f57]" />
            Cursos Disponíveis
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#001f57] tracking-tight">
            Escolha Sua Formação & <span className="gold-gradient-text">Matricule-se</span>
          </h2>
          
          <p className="mt-3 text-[#444650] text-sm sm:text-base leading-relaxed">
            Formações 100% online com acesso vitalício, suporte a dúvidas e certificação emitida nos Estados Unidos.
          </p>
        </div>

        {/* 3 Main Clean Course Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12">
          {ELIGIBLE_COURSES.map((course) => {
            const isFeatured = course.featured;
            const isMaster = course.id === 'terapeuta-master';

            return (
              <div
                key={course.id}
                id={`card-${course.id}`}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  isFeatured 
                    ? 'bg-white border-2 border-[#c5a059] shadow-xl lg:-translate-y-1' 
                    : 'bg-white border border-[#e1e3e4] shadow-sm hover:shadow-md'
                }`}
              >
                {/* Ribbon Tag for Featured */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#c5a059] text-[#001438] text-[11px] font-black uppercase tracking-wider px-3.5 py-0.5 rounded-full shadow-md flex items-center gap-1 z-20">
                    <Sparkles className="w-3 h-3" />
                    MAIS PROCURADO
                  </div>
                )}

                <div className="p-6 sm:p-7 flex flex-col justify-between h-full">
                  
                  <div>
                    {/* Top Stats */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#001f57]/10 text-[#001f57]">
                        {course.hours} • 100% Online
                      </span>
                      
                      <div className="flex items-center gap-1 text-xs text-[#8c6d2d] font-bold">
                        <Star className="w-3.5 h-3.5 fill-[#c5a059] text-[#c5a059]" />
                        <span>{course.rating}</span>
                      </div>
                    </div>

                    {/* Emoji and Course Title */}
                    <div className="mb-3">
                      <div className="text-3xl mb-1.5">{course.emoji}</div>
                      <h3 className="font-cinzel text-xl font-bold text-[#001f57] leading-snug">
                        {course.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#8c6d2d] mt-0.5">
                        {course.subtitle}
                      </p>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-[#555861] leading-relaxed mb-4">
                      {course.shortDescription}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 mb-4 pt-3 border-t border-[#f0f1f2]">
                      <div className="text-xs font-bold text-[#001f57]">O que está incluso:</div>
                      <div className="space-y-1.5 text-xs text-[#444650]">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#00875a] flex-shrink-0 mt-0.5" />
                          <span>Certificação Internacional emitida nos EUA</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#00875a] flex-shrink-0 mt-0.5" />
                          <span>Acesso Vitalício + Videoaulas Práticas + PDF</span>
                        </div>

                        {/* Special Terapeuta Master Bonus: Mentor Terapêutico */}
                        {isMaster && (
                          <div className="flex items-start gap-2 p-1.5 rounded-lg bg-[#c5a059]/15 border border-[#c5a059]/40 text-[#001f57] font-semibold">
                            <Bot className="w-4 h-4 text-[#8c6d2d] flex-shrink-0 mt-0.5" />
                            <span>BÔNUS: Mentor Terapêutico (Estruture atendimentos do zero)</span>
                          </div>
                        )}

                        <div className="flex items-start gap-2">
                          <Gift className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                          <span>Bônus: Carteira Digital ATH (1 ano grátis)</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Bottom Action Area */}
                  <div className="pt-4 border-t border-[#f0f1f2] space-y-2.5">
                    
                    {/* Hotmart Direct Link Button */}
                    <a
                      href={course.checkoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm bg-[#c5a059] hover:bg-[#b38c3c] text-[#001438] shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all text-center"
                      id={`btn-checkout-${course.id}`}
                    >
                      <span>Garantir Vaga & Certificado</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    {/* Toggle Syllabus */}
                    <button
                      onClick={() => {
                        setSelectedCourseId(course.id);
                        document.getElementById('grade-curricular')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full py-2 px-3 rounded-lg text-xs font-medium text-[#001f57] hover:bg-[#f0f4f8] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Ver Grade Curricular & Detalhes</span>
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#74777f] text-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#00875a]" />
                      <span>Pagamento Seguro via Hotmart • 7 Dias de Garantia</span>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Curriculum Section */}
        <div id="grade-curricular" className="bg-white border border-[#e1e3e4] rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#e1e3e4]">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#8c6d2d]">
                Detalhes dos Módulos
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#001f57] mt-0.5">
                Grade Curricular: {selectedCourse.emoji} {selectedCourse.title}
              </h3>
            </div>

            {/* Switch Course Selector Tabs */}
            <div className="flex flex-wrap gap-1.5">
              {ELIGIBLE_COURSES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCourseId(c.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedCourseId === c.id
                      ? 'bg-[#001f57] text-white shadow-sm'
                      : 'bg-[#f0f4f8] text-[#001f57] hover:bg-[#e2eaf4]'
                  }`}
                >
                  <span>{c.emoji} {c.title}</span>
                </button>
              ))}
            </div>
          </div>

          <p className="text-xs text-[#555861] mt-3">
            {selectedCourse.fullDescription}
          </p>

          {/* Modules List Grid */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {selectedCourse.modulesList.map((module, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#f8f9fa] border border-[#e8eaed]">
                <div className="text-xs font-bold text-[#001f57]">{module.title}</div>
                <div className="text-[11px] text-[#555861] mt-1 line-clamp-3">{module.description}</div>
              </div>
            ))}
          </div>

          {/* Special Bonus Showcase for Terapeuta Master: Mentor Terapêutico */}
          {selectedCourse.id === 'terapeuta-master' && (
            <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#001f57] via-[#0d2a63] to-[#001438] text-white border-2 border-[#c5a059] shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#425c9d]/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#c5a059] text-[#001438] flex items-center justify-center flex-shrink-0 shadow-md">
                    <Bot className="w-5 h-5 text-[#001438]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#ecdcb9] bg-[#173574] px-2.5 py-0.5 rounded-full border border-[#c5a059]/40">
                      🎁 BÔNUS EXCLUSIVO INCLUSO
                    </span>
                    <h4 className="font-cinzel text-lg sm:text-xl font-bold text-white mt-0.5">
                      Conheça o Mentor Terapêutico
                    </h4>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#dae2ff] mt-3 leading-relaxed">
                Uma ferramenta para apoiar terapeutas a <strong>estruturar atendimentos do zero</strong>.
                Você registra as informações do atendimento e o Mentor ajuda a organizar o caso. Em poucos passos você tem:
              </p>

              {/* 5 Steps Grid */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#173574]/80 border border-[#425c9d]/40 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                  <span>Anamnese estruturada</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#173574]/80 border border-[#425c9d]/40 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                  <span>Pontos importantes para investigação</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#173574]/80 border border-[#425c9d]/40 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                  <span>Sugestões de técnicas do curso para tratamento</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#173574]/80 border border-[#425c9d]/40 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                  <span>Plano de ação de 30 dias</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#173574]/80 border border-[#425c9d]/40 text-xs text-white sm:col-span-2 lg:col-span-1">
                  <FileText className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                  <span>Relatório final em PDF</span>
                </div>
              </div>

              {/* Pergunte ao Mentor Box */}
              <div className="mt-4 p-3.5 rounded-xl bg-[#c5a059]/15 border border-[#c5a059]/40 flex items-start gap-2.5 text-xs text-[#dae2ff]">
                <HelpCircle className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#ecdcb9] uppercase tracking-wider block font-bold mb-0.5">
                    PERGUNTE AO MENTOR
                  </strong>
                  <span>
                    Ainda ficou alguma dúvida? Utilize o campo de consulta para receber apoio na organização e compreensão do caso.
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-[#e1e3e4] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-[#555861]">
              Pronto para iniciar sua formação com certificação internacional?
            </span>
            <a
              href={selectedCourse.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#c5a059] hover:bg-[#b38c3c] text-[#001438] font-bold text-xs shadow-sm transition-all"
            >
              <span>Matricular em {selectedCourse.title}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
