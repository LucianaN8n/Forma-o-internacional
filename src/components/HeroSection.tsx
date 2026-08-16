import React, { useState } from 'react';
import { ELIGIBLE_COURSES, INSTITUTION_INFO } from '../data/coursesData';
import { 
  Play, 
  ShieldCheck, 
  Award, 
  Star, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Globe2, 
  GraduationCap,
  Check,
  ExternalLink,
  Gift
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-[#071320] via-[#091b2f] to-[#06101a] overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-tr from-amber-500/15 via-blue-600/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tag & Social Proof Pill */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium shadow-md">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Cursos 100% Online • Acesso Vitalício</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200 text-xs font-semibold">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400" />
              ))}
            </div>
            <span>4.9/5.0 ({INSTITUTION_INFO.studentsCount} profissionais certificados)</span>
          </div>
        </div>

        {/* Main Sales Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-100 leading-[1.15] tracking-tight">
            Cursos com <span className="gold-gradient-text">Certificação Internacional</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Formações profissionais <strong>100% online</strong> com diplomas emitidos nos <strong>Estados Unidos</strong> pela Saber Consciente Worldwide LLC, certificados por @cel.education e avalizados por @fgu_online.
          </p>

          {/* Quick Institutional Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5 bg-[#0b2138] border border-emerald-500/30 px-3 py-1.5 rounded-lg text-emerald-200 font-medium">
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              ✔ 100% Online (Estude no seu Ritmo)
            </span>
            <span className="flex items-center gap-1.5 bg-[#0b2138] border border-amber-500/30 px-3 py-1.5 rounded-lg text-amber-200 font-medium">
              <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
              ✔ Emissão pela Saber Consciente Worldwide LLC (EUA)
            </span>
            <span className="flex items-center gap-1.5 bg-[#0b2138] border border-blue-400/30 px-3 py-1.5 rounded-lg text-blue-200 font-medium">
              <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
              ✔ Certificado por @cel.education e avalizado por @fgu_online
            </span>
            <span className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500/20 to-emerald-500/20 border border-amber-400/50 px-3 py-1.5 rounded-lg text-amber-300 font-bold shadow-sm">
              <Gift className="w-4 h-4 text-amber-400 flex-shrink-0" />
              🎁 BÔNUS: Carteira Digital ATH (1 ano grátis)
            </span>
          </div>

          {/* 3 Quick Course Jump Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 max-w-3xl mx-auto">
            {ELIGIBLE_COURSES.map((course) => (
              <a
                key={course.id}
                href={course.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#091f36] hover:bg-[#0e2c4d] border border-amber-500/30 text-left transition-all hover:scale-105 flex items-center gap-2.5 shadow-md"
              >
                <span className="text-2xl">{course.emoji}</span>
                <div>
                  <div className="text-xs font-bold text-slate-100">{course.title}</div>
                  <div className="text-[10px] text-amber-300">{course.hours} • Hotmart 👉</div>
                </div>
              </a>
            ))}
          </div>

          {/* Primary CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <a
              href="#cursos-elegiveis"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-lg shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              id="hero-main-cta-button"
            >
              <GraduationCap className="w-5 h-5" />
              <span>Ver os Cursos Elegíveis</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 text-xs text-slate-400 pt-1">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              7 Dias de Garantia Incondicional
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              Acesso Imediato & Vitalício
            </span>
          </div>
        </div>

        {/* Video / Visual Presentation Container */}
        <div className="mt-12 lg:mt-16 max-w-4xl mx-auto">
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-amber-500/40 via-blue-900/30 to-amber-500/20 shadow-2xl">
            <div className="relative aspect-video rounded-xl bg-gradient-to-br from-[#0c2440] to-[#061424] overflow-hidden border border-slate-700/60 group">
              
              {!isPlayingVideo ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-[#071729]/90 to-[#040e1a]">
                  
                  {/* Decorative preview badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-500/30 text-xs text-amber-300">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Apresentação das Formações Internacionais</span>
                  </div>

                  <div className="absolute top-4 right-4 bg-emerald-500/20 text-emerald-300 text-xs px-3 py-1 rounded-full border border-emerald-500/30 font-semibold">
                    100% Online
                  </div>

                  {/* Play Button Trigger */}
                  <button
                    onClick={() => setIsPlayingVideo(true)}
                    className="relative group/btn w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center p-1 shadow-2xl shadow-amber-500/50 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                    id="hero-video-play-btn"
                    aria-label="Assistir ao vídeo de apresentação"
                  >
                    <div className="w-full h-full rounded-full bg-[#0a1f35] flex items-center justify-center group-hover/btn:bg-[#0c2847] transition-colors">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400 fill-amber-400 ml-1 group-hover/btn:scale-110 transition-transform" />
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-amber-400/60 animate-ping pointer-events-none" />
                  </button>

                  <h3 className="mt-6 font-cinzel text-lg sm:text-2xl font-bold text-slate-100 max-w-lg">
                    Conheça o Instituto que já formou mais de 50.000 Profissionais no Mundo
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md">
                    Descubra como você pode conquistar sua independência profissional com a chancela do Instituto Saber Consciente.
                  </p>
                  <a
                    href="https://youtu.be/9pG-s3y6258"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 underline underline-offset-4 mt-3 transition-colors"
                  >
                    <span>Abrir no YouTube (https://youtu.be/9pG-s3y6258)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-black">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/9pG-s3y6258?autoplay=1"
                    title="Apresentação das Formações - Instituto Saber Consciente"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

            </div>
          </div>
        </div>

        {/* 4 Pillars Stats Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          
          <div className="bg-[#0c2138]/80 border border-slate-700/60 rounded-xl p-4 sm:p-5 text-center shadow-lg hover:border-amber-500/40 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-cinzel">150h a 600h</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Cargas Horárias Certificadas</div>
          </div>

          <div className="bg-[#0c2138]/80 border border-slate-700/60 rounded-xl p-4 sm:p-5 text-center shadow-lg hover:border-amber-500/40 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-cinzel">3 Formações</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Elegíveis para Chancela EUA</div>
          </div>

          <div className="bg-[#0c2138]/80 border border-slate-700/60 rounded-xl p-4 sm:p-5 text-center shadow-lg hover:border-amber-500/40 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-cinzel">+50.000</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Alunos em 14 Países</div>
          </div>

          <div className="bg-[#0c2138]/80 border border-slate-700/60 rounded-xl p-4 sm:p-5 text-center shadow-lg hover:border-amber-500/40 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-cinzel">Vitalício</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Acesso e Suporte Ilimitado</div>
          </div>

        </div>

      </div>
    </section>
  );
};
