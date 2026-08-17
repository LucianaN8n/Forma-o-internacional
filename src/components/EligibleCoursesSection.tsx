import React, { useState } from 'react';
import { ELIGIBLE_COURSES } from '../data/coursesData';
import { EligibleCourse } from '../types';
import { 
  GraduationCap, 
  Award, 
  Clock, 
  Star, 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  BookOpen, 
  Users, 
  Target, 
  FileText, 
  CheckCircle2, 
  ChevronRight,
  ExternalLink,
  Gift
} from 'lucide-react';

export const EligibleCoursesSection: React.FC = () => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(ELIGIBLE_COURSES[1].id);

  const selectedCourse = ELIGIBLE_COURSES.find(c => c.id === selectedCourseId) || ELIGIBLE_COURSES[1];

  return (
    <section id="cursos-elegiveis" className="py-20 lg:py-28 bg-[#f8f9fa] relative overflow-hidden text-[#191c1d]">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#c5a059]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#001f57]/10 border border-[#001f57]/20 text-[#001f57] text-xs sm:text-sm font-bold mb-4 tracking-wide uppercase">
            <GraduationCap className="w-4 h-4 text-[#001f57]" />
            🎓 Cursos 100% Online com Certificação Internacional
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#001f57] tracking-tight leading-tight">
            Formações com <span className="gold-gradient-text">Certificação Internacional</span>
          </h2>
          
          <p className="mt-4 text-[#444650] text-base sm:text-lg leading-relaxed">
            Todas as formações são <strong>100% online com acesso vitalício</strong>. Consulte as informações completas, grade curricular e inscreva-se com certificação emitida nos Estados Unidos.
          </p>
        </div>

        {/* 3 Main Course Cards Grid with Complete Information and Links */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {ELIGIBLE_COURSES.map((course) => {
            const isFeatured = course.featured;
            
            const theme = {
              violet: {
                borderHighlight: 'border-[#5b3294]',
                badgeBg: 'bg-[#5b3294]/15 text-[#5b3294] border-[#5b3294]/30',
                btnBg: 'bg-[#c5a059] hover:bg-[#b38c3c] text-[#001438]',
                glow: 'shadow-xl shadow-[#5b3294]/10',
              },
              emerald: {
                borderHighlight: 'border-[#c5a059]',
                badgeBg: 'bg-[#00875a]/15 text-[#00875a] border-[#00875a]/30',
                btnBg: 'bg-[#c5a059] hover:bg-[#b38c3c] text-[#001438]',
                glow: 'shadow-2xl shadow-[#c5a059]/20',
              },
              amber: {
                borderHighlight: 'border-[#c5a059]',
                badgeBg: 'bg-[#c5a059]/20 text-[#8c6d2d] border-[#c5a059]/40',
                btnBg: 'bg-[#c5a059] hover:bg-[#b38c3c] text-[#001438]',
                glow: 'shadow-xl shadow-[#c5a059]/15',
              }
            }[course.highlightColor];

            return (
              <div
                key={course.id}
                id={`card-${course.id}`}
                className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                  isFeatured 
                    ? `p-1 bg-gradient-to-b from-[#c5a059] via-[#001f57] to-[#c5a059] ${theme.glow} lg:-translate-y-2` 
                    : `p-0.5 bg-[#e1e3e4] shadow-md hover:shadow-lg`
                }`}
              >
                {/* Ribbon Tag */}
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c5a059] text-[#001438] text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5 z-20">
                    <Sparkles className="w-3.5 h-3.5 text-[#001438]" />
                    FORMAÇÃO MAIS PROCURADA
                  </div>
                )}

                <div className="bg-white rounded-[22px] p-6 sm:p-7 flex flex-col justify-between h-full border border-[#f0f1f2]">
                  
                  <div>
                    {/* Top Stats */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${theme.badgeBg}`}>
                        {course.badge}
                      </span>
                      
                      <div className="flex items-center gap-1 text-xs text-[#c5a059] font-bold">
                        <Star className="w-3.5 h-3.5 fill-[#c5a059] text-[#c5a059]" />
                        <span>{course.rating}</span>
                        <span className="text-[#74777f] font-normal">({course.studentsCount})</span>
                      </div>
                    </div>

                    {/* Emoji and Course Title */}
                    <div className="mb-4">
                      <div className="text-4xl mb-2">{course.emoji}</div>
                      <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#001f57] leading-snug">
                        {course.title}
                      </h3>
                      <div className="inline-flex items-center gap-1.5 mt-1.5 text-xs font-bold text-[#001f57] bg-[#001f57]/10 px-2.5 py-1 rounded-md border border-[#001f57]/15">
                        <Award className="w-3.5 h-3.5 text-[#c5a059]" />
                        <span>+ Certificação Internacional (EUA)</span>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-[#444650] leading-relaxed mb-5">
                      {course.shortDescription}
                    </p>

                    {/* Credential Box */}
                    <div className="rounded-xl p-3.5 mb-5 bg-[#f0f4f8] border border-[#d2ddec]">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#001f57] mb-1">
                        <Award className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                        <span>Diploma Internacional:</span>
                      </div>
                      <p className="text-[11px] text-[#001f57] italic font-cinzel leading-tight font-semibold">
                        {course.certificateTitle}
                      </p>
                      <div className="flex items-center justify-between gap-2 mt-2 pt-2 border-t border-[#d2ddec] text-[10px] text-[#444650]">
                        <span className="flex items-center gap-1 text-[#001f57] font-semibold">
                          <Clock className="w-3 h-3 text-[#c5a059]" /> {course.hours} • 100% Online
                        </span>
                        <span>Saber Consciente LLC (EUA)</span>
                      </div>
                    </div>

                    {/* Learning Outcomes Checklist */}
                    <div className="space-y-2 mb-4">
                      <h4 className="text-xs font-bold text-[#001f57] uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059]" />
                        O que você vai dominar:
                      </h4>

                      <div className="space-y-1.5">
                        {course.learningOutcomes.slice(0, 3).map((outcome, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#444650]">
                            <Check className="w-3.5 h-3.5 text-[#00875a] flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Carteira Digital ATH Bonus Tag */}
                    <div className="mb-4 p-2.5 rounded-xl bg-[#c5a059]/15 border border-[#c5a059]/40 flex items-start gap-2 text-xs">
                      <Gift className="w-4 h-4 text-[#8c6d2d] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#8c6d2d] font-bold block">
                          BÔNUS: Carteira Digital ATH
                        </strong>
                        <span className="text-[11px] text-[#444650]">
                          Emitida pela ATH Associação, gratuita por 1 ano.
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Bottom Action Area with Direct Hotmart Link */}
                  <div className="pt-4 border-t border-[#e1e3e4] space-y-3">
                    
                    {/* Official Hotmart Link Button */}
                    <a
                      href={course.checkoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm sm:text-base shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all text-center ${theme.btnBg}`}
                      id={`btn-checkout-${course.id}`}
                    >
                      <span>👉 Matricular com Certificado</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    {/* Button to view detailed syllabus */}
                    <button
                      onClick={() => {
                        setSelectedCourseId(course.id);
                        document.getElementById('grade-detalhada')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-[#001f57] hover:text-[#001f57] bg-[#f0f4f8] hover:bg-[#e2eaf4] border border-[#d2ddec] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-[#001f57]" />
                      <span>Ver Grade Curricular Completa</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#001f57]" />
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-[#74777f] text-center pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#00875a]" />
                      <span>Acesso Imediato & Vitalício via Hotmart</span>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Curriculum Viewer for the Selected Course */}
        <div id="grade-detalhada" className="bg-white border-2 border-[#c5a059]/40 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden text-[#191c1d]">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#e1e3e4]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#001f57]/10 border border-[#001f57]/20 text-[#001f57] text-xs font-bold uppercase tracking-wider mb-2">
                <BookOpen className="w-3.5 h-3.5 text-[#001f57]" />
                Grade Curricular & Detalhes do Programa
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#001f57] flex items-center gap-2">
                <span>{selectedCourse.emoji}</span>
                <span>{selectedCourse.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#444650] mt-1">
                {selectedCourse.fullDescription}
              </p>
            </div>

            {/* Switch Course Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {ELIGIBLE_COURSES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCourseId(c.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    selectedCourseId === c.id
                      ? 'bg-[#001f57] text-white shadow-md'
                      : 'bg-[#f0f4f8] text-[#001f57] hover:bg-[#e2eaf4] border border-[#d2ddec]'
                  }`}
                >
                  <span>{c.emoji}</span>
                  <span>{c.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Module List Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            {selectedCourse.modulesList.map((m, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e1e3e4] hover:border-[#001f57]/40 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#001f57] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-cinzel text-sm font-bold text-[#001f57]">
                      {m.title}
                    </h4>
                    <p className="text-xs text-[#444650] mt-1 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Special Categorized Techniques & Modules Section */}
          {selectedCourse.techniqueCategories && selectedCourse.techniqueCategories.length > 0 && (
            <div className="my-10 p-6 sm:p-8 rounded-2xl bg-[#f0f4f8] border-2 border-[#d2ddec]">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#001f57]/10 border border-[#001f57]/20 text-[#001f57] text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                  Grade & Conteúdos Especiais da Formação
                </span>
                <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-[#001f57]">
                  Conteúdo Completo: <span className="gold-gradient-text">{selectedCourse.title}</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#444650] mt-1">
                  Você terá acesso a todo o conteúdo programático abaixo, estruturado para atuação profissional com excelência:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {selectedCourse.techniqueCategories.map((cat, cIdx) => {
                  return (
                    <div
                      key={cIdx}
                      className="rounded-xl bg-white border border-[#e1e3e4] p-5 flex flex-col justify-between shadow-md"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-2xl">✨</span>
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#001f57]/10 text-[#001f57] border border-[#001f57]/20">
                            {cat.techniques.length} Técnicas
                          </span>
                        </div>

                        <h5 className="font-cinzel text-base font-bold text-[#001f57] mb-1.5">
                          {cat.categoryName}
                        </h5>

                        {cat.description && (
                          <p className="text-[11px] text-[#74777f] mb-4 leading-relaxed">
                            {cat.description}
                          </p>
                        )}

                        <div className="space-y-1.5 pt-2 border-t border-[#e1e3e4]">
                          {cat.techniques.map((tech, tIdx) => (
                            <div
                              key={tIdx}
                              className="flex items-center gap-2 text-xs text-[#191c1d] py-1 px-2 rounded-lg bg-[#f8f9fa] hover:bg-[#eef2f6] transition-colors"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#00875a] flex-shrink-0" />
                              <span className="font-medium">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Included Bonuses Strip */}
          {selectedCourse.includedBonuses && selectedCourse.includedBonuses.length > 0 && (
            <div className="my-6 p-5 rounded-2xl bg-[#c5a059]/15 border border-[#c5a059]/40">
              <div className="flex items-center gap-2 mb-3">
                <Gift className="w-5 h-5 text-[#8c6d2d]" />
                <h5 className="font-cinzel text-sm sm:text-base font-bold text-[#001f57] uppercase tracking-wider">
                  Bônus Inclusos na Formação ({selectedCourse.title})
                </h5>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedCourse.includedBonuses.map((bonus, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2 text-xs text-[#191c1d] bg-white px-3 py-2 rounded-lg border border-[#e1e3e4]">
                    <CheckCircle2 className="w-4 h-4 text-[#00875a] flex-shrink-0" />
                    <span className="font-medium">{bonus}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Target Audience and Included Items Strip */}
          <div className="p-5 rounded-2xl bg-[#001f57] text-white border border-[#173574] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1 max-w-xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#c5a059] flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" />
                Público-Alvo Indicado:
              </span>
              <p className="text-xs text-[#dae2ff] leading-relaxed">
                {selectedCourse.targetAudience}
              </p>
            </div>

            <div className="flex-shrink-0 w-full md:w-auto">
              <a
                href={selectedCourse.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#c5a059] hover:bg-[#b38c3c] text-[#001438] font-bold text-sm shadow-xl hover:scale-105 transition-all text-center"
              >
                <span>Inscrever-se em {selectedCourse.title}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
