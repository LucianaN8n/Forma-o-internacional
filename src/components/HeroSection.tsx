import React, { useState } from 'react';
import { INSTITUTION_INFO } from '../data/coursesData';
import { 
  Play, 
  ShieldCheck, 
  Award, 
  Star, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  GraduationCap,
  Check,
  ExternalLink,
  MessageCircle
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const whatsappUrl = "https://wa.me/5511992338606?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20forma%C3%A7%C3%B5es%20com%20certifica%C3%A7%C3%A3o%20internacional.";

  return (
    <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-[#001f57] via-[#0d2a63] to-[#001847] text-white overflow-hidden">
      
      {/* Background Subtle Lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#c5a059]/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tag */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#173574]/90 border border-[#c5a059]/40 text-[#ecdcb9] text-xs sm:text-sm font-semibold shadow-md">
            <Sparkles className="w-4 h-4 text-[#c5a059]" />
            <span>Formações 100% Online • Certificação Internacional (EUA)</span>
          </div>
        </div>

        {/* Main Sales Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Cursos com <span className="gold-gradient-text">Certificação Internacional</span>
          </h1>

          <p className="text-[#dae2ff] text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Formações profissionais com diplomas emitidos nos <strong>Estados Unidos</strong> pela Saber Consciente Worldwide LLC, certificados por <strong>CEL Education</strong> e avalizados por <strong>Florida Global University (FGU)</strong>.
          </p>

          {/* Key Quick Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 pt-2 text-xs sm:text-sm text-[#dae2ff]">
            <span className="flex items-center gap-1.5 bg-[#173574]/80 border border-[#c5a059]/30 px-3 py-1.5 rounded-lg text-[#ecdcb9]">
              <Check className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
              100% Online • Estude no seu ritmo
            </span>
            <span className="flex items-center gap-1.5 bg-[#173574]/80 border border-[#c5a059]/30 px-3 py-1.5 rounded-lg text-[#ecdcb9]">
              <Check className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
              Diploma Internacional emitido nos EUA
            </span>
            <span className="flex items-center gap-1.5 bg-[#173574]/80 border border-[#c5a059]/30 px-3 py-1.5 rounded-lg text-[#ecdcb9]">
              <Check className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
              Bônus: Carteira Digital ATH (1 ano)
            </span>
          </div>

          {/* Primary CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            <a
              href="#cursos-elegiveis"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#c5a059] hover:bg-[#b38c3c] text-[#001438] font-bold text-base shadow-xl shadow-[#c5a059]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              id="hero-main-cta-button"
            >
              <GraduationCap className="w-5 h-5 text-[#001438]" />
              <span>Ver Cursos Disponíveis</span>
              <ArrowRight className="w-5 h-5 text-[#001438]" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-[#001438] font-bold text-sm transition-all"
              id="hero-whatsapp-button"
            >
              <MessageCircle className="w-4 h-4 fill-[#001438] stroke-none" />
              <span>Dúvidas no WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-5 text-xs text-[#dae2ff] pt-1">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#25d366]" />
              7 Dias de Garantia
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#c5a059]" />
              Acesso Vitalício Imediato
            </span>
          </div>
        </div>

        {/* Video / Visual Presentation Container */}
        <div className="mt-10 lg:mt-12 max-w-3xl mx-auto">
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-[#c5a059]/50 via-[#173574] to-[#c5a059]/30 shadow-2xl">
            <div className="relative aspect-video rounded-xl bg-gradient-to-br from-[#001f57] to-[#173574] overflow-hidden border border-[#425c9d]/40">
              
              {!isPlayingVideo ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#173574]/80 via-[#001f57]/95 to-[#001438]">
                  
                  {/* Play Button */}
                  <button
                    onClick={() => setIsPlayingVideo(true)}
                    className="relative group w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#c5a059] flex items-center justify-center shadow-2xl shadow-[#c5a059]/40 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                    id="hero-video-play-btn"
                    aria-label="Assistir ao vídeo de apresentação"
                  >
                    <Play className="w-8 h-8 text-[#001438] fill-[#001438] ml-1" />
                  </button>

                  <h3 className="mt-5 font-cinzel text-lg sm:text-xl font-bold text-white max-w-md">
                    Vídeo de Apresentação das Formações
                  </h3>
                  <p className="text-xs sm:text-sm text-[#dae2ff] mt-1 max-w-sm">
                    Clique para assistir ou assista diretamente no YouTube.
                  </p>
                  
                  <a
                    href="https://youtu.be/9pG-s3y6258"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-xs text-[#c5a059] hover:text-[#ecdcb9] underline mt-3 font-medium"
                  >
                    <span>Assistir no YouTube</span>
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
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="bg-[#173574]/60 border border-[#425c9d]/30 rounded-xl p-3.5 text-center">
            <div className="text-xl sm:text-2xl font-bold text-[#c5a059] font-cinzel">150h a 568h</div>
            <div className="text-xs text-[#dae2ff] mt-0.5">Carga Horária Certificada</div>
          </div>

          <div className="bg-[#173574]/60 border border-[#425c9d]/30 rounded-xl p-3.5 text-center">
            <div className="text-xl sm:text-2xl font-bold text-[#c5a059] font-cinzel">EUA</div>
            <div className="text-xs text-[#dae2ff] mt-0.5">Chancela Internacional</div>
          </div>

          <div className="bg-[#173574]/60 border border-[#425c9d]/30 rounded-xl p-3.5 text-center">
            <div className="text-xl sm:text-2xl font-bold text-[#c5a059] font-cinzel">+50.000</div>
            <div className="text-xs text-[#dae2ff] mt-0.5">Alunos Certificados</div>
          </div>

          <div className="bg-[#173574]/60 border border-[#425c9d]/30 rounded-xl p-3.5 text-center">
            <div className="text-xl sm:text-2xl font-bold text-[#c5a059] font-cinzel">Vitalício</div>
            <div className="text-xs text-[#dae2ff] mt-0.5">Acesso 100% Online</div>
          </div>
        </div>

      </div>
    </section>
  );
};
