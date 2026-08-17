import React, { useState, useEffect } from 'react';
import { ELIGIBLE_COURSES } from '../data/coursesData';
import { Sparkles, ArrowRight, Award, GraduationCap } from 'lucide-react';

export const StickyCta: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA when scrolled down past 400px
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#001f57]/95 backdrop-blur-md border-t-2 border-[#c5a059]/70 p-3 sm:p-4 shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 px-4">
        
        {/* Course Highlights */}
        <div className="flex items-center gap-3 sm:gap-4 text-center sm:text-left">
          <div className="hidden md:flex w-10 h-10 rounded-full bg-[#173574] border border-[#c5a059]/40 items-center justify-center text-[#c5a059]">
            <Award className="w-5 h-5" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-cinzel text-xs sm:text-sm font-bold text-white">
                🎓 Formações com Certificação Internacional (EUA)
              </span>
              <span className="hidden lg:inline-block text-[10px] bg-[#c5a059] text-[#001438] px-2 py-0.5 rounded font-bold uppercase">
                FGU / Saber Consciente LLC
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#dae2ff]">
              <span><strong>100% Online</strong> • Neurociência (150h) • TH Master (568h) • Psicoterapia & Psicanálise (600h)</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="w-full sm:w-auto flex items-center gap-2">
          <a
            href="#cursos-elegiveis"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#c5a059] hover:bg-[#b38c3c] text-[#001438] font-black text-sm shadow-lg shadow-[#c5a059]/20 hover:scale-105 active:scale-95 transition-all text-center"
            id="sticky-bar-cta-btn"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Ver Cursos & Matricular</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
