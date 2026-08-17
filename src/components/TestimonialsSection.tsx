import React from 'react';
import { TESTIMONIALS } from '../data/coursesData';
import { Star, MessageSquareQuote, CheckCircle, ArrowRight, Heart, GraduationCap } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-[#001f57] relative text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#173574] border border-[#c5a059]/40 text-[#ecdcb9] text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-[#c5a059] fill-[#c5a059]" />
            Vidas Transformadas
          </div>
          
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            O Que Dizem os Nossos <span className="gold-gradient-text">Alunos e Profissionais</span>
          </h2>
          
          <p className="mt-4 text-[#dae2ff] text-base sm:text-lg">
            Histórias reais de quem transformou a vocação em uma carreira próspera, respeitada e com validação internacional.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#173574]/80 border border-[#425c9d]/50 hover:border-[#c5a059] rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl relative"
            >
              <MessageSquareQuote className="w-10 h-10 text-[#c5a059]/20 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating Stars & Course Tag */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-[#c5a059]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c5a059]" />
                    ))}
                    <span className="text-xs text-[#ecdcb9] font-bold ml-2">Avaliação 5.0</span>
                  </div>

                  <span className="text-[11px] font-semibold text-[#dae2ff] bg-[#001f57] px-2.5 py-0.5 rounded-full border border-[#425c9d]/40">
                    {testimonial.courseTaken}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base text-[#dae2ff] leading-relaxed italic mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Highlight Tag */}
                <div className="inline-block bg-[#001f57] border border-[#c5a059]/40 text-[#ecdcb9] text-xs font-semibold px-3 py-1 rounded-full mb-6">
                  ✨ {testimonial.highlight}
                </div>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-[#425c9d]/50 flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#c5a059]"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-cinzel text-sm sm:text-base font-bold text-white">
                      {testimonial.name}
                    </h4>
                    {testimonial.verified && (
                      <CheckCircle className="w-4 h-4 text-[#25d366] flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-[#ecdcb9] font-medium">
                    {testimonial.role}
                  </p>
                  <p className="text-[11px] text-[#dae2ff]/80">
                    {testimonial.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Student Counter Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-[#173574]/90 border border-[#c5a059]/40 rounded-2xl px-6 py-4 shadow-lg">
            <span className="text-sm text-[#dae2ff]">
              Junte-se a mais de <strong>50.000 alunos</strong> em todo o mundo.
            </span>
            <a
              href="#cursos-elegiveis"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#ecdcb9] hover:text-[#c5a059] underline underline-offset-4"
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
