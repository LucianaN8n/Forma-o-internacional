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
  ExternalLink
} from 'lucide-react';

export const EligibleCoursesSection: React.FC = () => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(ELIGIBLE_COURSES[1].id);

  const selectedCourse = ELIGIBLE_COURSES.find(c => c.id === selectedCourseId) || ELIGIBLE_COURSES[1];

  return (
    <section id="cursos-elegiveis" className="py-20 lg:py-28 bg-[#06111d] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            🎓 Cursos 100% Online com Certificação Internacional
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
            Formações com <span className="gold-gradient-text">Certificação Internacional</span>
          </h2>
          
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Todas as formações são <strong>100% online com acesso vitalício</strong>. Consulte as informações completas, grade curricular e inscreva-se com certificação emitida nos Estados Unidos.
          </p>
        </div>

        {/* 3 Main Course Cards Grid with Complete Information and Links */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {ELIGIBLE_COURSES.map((course) => {
            const isFeatured = course.featured;
            const isSelected = course.id === selectedCourseId;
            
            const theme = {
              violet: {
                gradientBorder: 'from-purple-500 via-indigo-500 to-purple-600',
                badgeBg: 'bg-purple-500/20 text-purple-200 border-purple-400/40',
                btnBg: 'bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-600/30',
                glow: 'shadow-purple-900/40',
                tabActive: 'bg-purple-950/60 border-purple-400 text-purple-200'
              },
              emerald: {
                gradientBorder: 'from-amber-400 via-emerald-400 to-amber-500',
                badgeBg: 'bg-emerald-500/20 text-emerald-200 border-emerald-400/40',
                btnBg: 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 shadow-amber-500/30',
                glow: 'shadow-emerald-950/80',
                tabActive: 'bg-emerald-950/60 border-emerald-400 text-emerald-200'
              },
              amber: {
                gradientBorder: 'from-amber-500 via-amber-400 to-amber-600',
                badgeBg: 'bg-amber-500/20 text-amber-200 border-amber-400/40',
                btnBg: 'bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-slate-950 shadow-amber-600/30',
                glow: 'shadow-amber-950/40',
                tabActive: 'bg-amber-950/60 border-amber-400 text-amber-200'
              }
            }[course.highlightColor];

            return (
              <div
                key={course.id}
                id={`card-${course.id}`}
                className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                  isFeatured 
                    ? `p-1 bg-gradient-to-b ${theme.gradientBorder} shadow-2xl ${theme.glow} lg:-translate-y-2` 
                    : `p-0.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 shadow-xl`
                }`}
              >
                {/* Ribbon Tag */}
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5 z-20">
                    <Sparkles className="w-3.5 h-3.5" />
                    FORMAÇÃO MAIS PROCURADA
                  </div>
                )}

                <div className="bg-[#091b2e] rounded-[22px] p-6 sm:p-7 flex flex-col justify-between h-full">
                  
                  <div>
                    {/* Top Stats */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${theme.badgeBg}`}>
                        {course.badge}
                      </span>
                      
                      <div className="flex items-center gap-1 text-xs text-amber-400 font-semibold">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>{course.rating}</span>
                        <span className="text-slate-400 font-normal">({course.studentsCount})</span>
                      </div>
                    </div>

                    {/* Emoji and Course Title */}
                    <div className="mb-4">
                      <div className="text-4xl mb-2">{course.emoji}</div>
                      <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-100 leading-snug">
                        {course.title}
                      </h3>
                      <div className="inline-flex items-center gap-1.5 mt-1 text-xs font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-md border border-amber-500/20">
                        <Award className="w-3.5 h-3.5" />
                        <span>+ Certificação Internacional (EUA)</span>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                      {course.shortDescription}
                    </p>

                    {/* Credential Box */}
                    <div className="rounded-xl p-3.5 mb-5 bg-[#061424] border border-slate-700/80">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200 mb-1">
                        <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span>Diploma Internacional:</span>
                      </div>
                      <p className="text-[11px] text-amber-200 italic font-cinzel leading-tight">
                        {course.certificateTitle}
                      </p>
                      <div className="flex items-center justify-between gap-2 mt-2 pt-2 border-t border-slate-700/60 text-[10px] text-slate-400">
                        <span className="flex items-center gap-1 text-slate-300 font-semibold">
                          <Clock className="w-3 h-3 text-amber-400" /> {course.hours} • 100% Online
                        </span>
                        <span>Saber Consciente LLC (EUA)</span>
                      </div>
                    </div>

                    {/* Learning Outcomes Checklist */}
                    <div className="space-y-2 mb-6">
                      <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                        O que você vai dominar:
                      </h4>

                      <div className="space-y-1.5">
                        {course.learningOutcomes.slice(0, 3).map((outcome, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Bottom Action Area with Direct Hotmart Link */}
                  <div className="pt-4 border-t border-slate-800 space-y-3">
                    
                    {/* Official Hotmart Link Button */}
                    <a
                      href={course.checkoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm sm:text-base shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all text-center ${theme.btnBg}`}
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
                      className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-slate-300 hover:text-amber-300 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                      <span>Ver Grade Curricular Completa</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Acesso Imediato & Vitalício via Hotmart</span>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Curriculum Viewer for the Selected Course */}
        <div id="grade-detalhada" className="bg-[#091b2e] border-2 border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-700/70">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                Grade Curricular & Detalhes do Programa
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-slate-100 flex items-center gap-2">
                <span>{selectedCourse.emoji}</span>
                <span>{selectedCourse.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
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
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
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
                className="p-4 rounded-xl bg-[#061424] border border-slate-700/80 hover:border-amber-500/40 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-xs flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-cinzel text-sm font-bold text-slate-100">
                      {m.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Special Categorized Techniques & Modules Section */}
          {selectedCourse.techniqueCategories && selectedCourse.techniqueCategories.length > 0 && (
            <div className="my-10 p-6 sm:p-8 rounded-2xl bg-[#061527] border-2 border-amber-500/30">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Grade & Conteúdos Especiais da Formação
                </span>
                <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-100">
                  Conteúdo Completo: <span className="gold-gradient-text">{selectedCourse.title}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Você terá acesso a todo o conteúdo programático abaixo, estruturado para atuação profissional com excelência:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {selectedCourse.techniqueCategories.map((cat, cIdx) => {
                  const headerColors = [
                    { border: 'border-purple-500/40', badge: 'bg-purple-500/20 text-purple-300 border-purple-400/30', icon: '🧠' },
                    { border: 'border-emerald-500/40', badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30', icon: '🌿' },
                    { border: 'border-amber-500/40', badge: 'bg-amber-500/20 text-amber-300 border-amber-400/30', icon: '✨' }
                  ][cIdx % 3];

                  return (
                    <div
                      key={cIdx}
                      className={`rounded-xl bg-[#091b2e] border ${headerColors.border} p-5 flex flex-col justify-between shadow-lg`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-2xl">{headerColors.icon}</span>
                          <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${headerColors.badge}`}>
                            {cat.techniques.length} Técnicas
                          </span>
                        </div>

                        <h5 className="font-cinzel text-base font-bold text-slate-100 mb-1.5">
                          {cat.categoryName}
                        </h5>

                        {cat.description && (
                          <p className="text-[11px] text-slate-400 mb-4 leading-relaxed">
                            {cat.description}
                          </p>
                        )}

                        <div className="space-y-1.5 pt-2 border-t border-slate-700/60">
                          {cat.techniques.map((tech, tIdx) => (
                            <div
                              key={tIdx}
                              className="flex items-center gap-2 text-xs text-slate-200 py-1 px-2 rounded-lg bg-[#061220]/60 hover:bg-[#0c243e] transition-colors"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
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

          {/* Target Audience and Included Items Strip */}
          <div className="p-5 rounded-2xl bg-[#0b223a] border border-amber-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1 max-w-xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" />
                Público-Alvo Indicado:
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedCourse.targetAudience}
              </p>
            </div>

            <div className="flex-shrink-0 w-full md:w-auto">
              <a
                href={selectedCourse.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/30 hover:scale-105 transition-all text-center"
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
