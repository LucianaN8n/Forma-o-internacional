import React from 'react';
import { TESTIMONIALS } from '../data/coursesData';
import { Star, MessageSquareQuote, CheckCircle, ArrowRight, Heart, GraduationCap } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-[#071525] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            Vidas Transformadas
          </div>
          
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100">
            O Que Dizem os Nossos <span className="gold-gradient-text">Alunos e Profissionais</span>
          </h2>
          
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Histórias reais de quem transformou a vocação em uma carreira próspera, respeitada e com validação internacional.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#0c223a] border border-slate-700/60 hover:border-amber-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl relative"
            >
              <MessageSquareQuote className="w-10 h-10 text-amber-400/20 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating Stars & Course Tag */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                    <span className="text-xs text-amber-200 font-bold ml-2">Avaliação 5.0</span>
                  </div>

                  <span className="text-[11px] font-semibold text-slate-300 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700">
                    {testimonial.courseTaken}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Highlight Tag */}
                <div className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full mb-6">
                  ✨ {testimonial.highlight}
                </div>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-700/60 flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-400"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-cinzel text-sm sm:text-base font-bold text-slate-100">
                      {testimonial.name}
                    </h4>
                    {testimonial.verified && (
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-amber-300/90 font-medium">
                    {testimonial.role}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {testimonial.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Student Counter Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-[#091b2e] border border-amber-500/30 rounded-2xl px-6 py-4 shadow-lg">
            <span className="text-sm text-slate-300">
              Junte-se a mais de <strong>18.000 alunos</strong> em todo o mundo.
            </span>
            <a
              href="#cursos-elegiveis"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Conhecer os cursos com certificação internacional</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
