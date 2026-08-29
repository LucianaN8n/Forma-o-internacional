import React from 'react';
import { 
  UserCheck, 
  Compass, 
  HeartHandshake, 
  Briefcase, 
  TrendingUp,
  CheckCircle2
} from 'lucide-react';

export const WhoIsThisFor: React.FC = () => {
  const targetProfiles = [
    {
      icon: Compass,
      title: "Iniciantes do Zero",
      subtitle: "Nunca atuou na área",
      description: "Método passo a passo, do básico ao avançado. Não exige graduação prévia para aprender e começar a atender com segurança.",
      features: [
        "Metodologia didática e prática",
        "Material didático em PDF e videoaulas",
        "Suporte completo a dúvidas"
      ]
    },
    {
      icon: Briefcase,
      title: "Transição de Carreira",
      subtitle: "Busca por propósito",
      description: "Para quem quer atuar em uma profissão com autonomia, flexibilidade de horários e possibilidade de atendimento presencial ou online.",
      features: [
        "Estude no seu próprio ritmo",
        "Atenda clientes do Brasil e do mundo",
        "Liberdade profissional e financeira"
      ]
    },
    {
      icon: TrendingUp,
      title: "Terapeutas & Saúde",
      subtitle: "Psicólogos, terapeutas e profissionais",
      description: "Agregue ferramentas práticas comprovadas, valorize o valor de suas sessões e conquiste autoridade internacional no currículo.",
      features: [
        "Diferencial com diploma internacional",
        "Protocolos clínicos estruturados",
        "Reconhecimento institucional"
      ]
    },
    {
      icon: HeartHandshake,
      title: "Autoconhecimento",
      subtitle: "Equilíbrio e autocura",
      description: "Aprenda a mapear e tratar questões emocionais, regular a ansiedade e harmonizar as relações familiares e relacionamentos.",
      features: [
        "Autoconhecimento profundo",
        "Regulação emocional na prática",
        "Bem-estar físico, mental e emocional"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#f8f9fa] text-[#191c1d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#001f57]/10 border border-[#001f57]/20 text-[#001f57] text-xs font-bold uppercase tracking-wider mb-3">
            <UserCheck className="w-4 h-4 text-[#001f57]" />
            Para Quem É
          </div>
          
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#001f57]">
            Para Quem São Nossas <span className="gold-gradient-text">Formações?</span>
          </h2>
          
          <p className="mt-3 text-[#444650] text-sm sm:text-base">
            Desenvolvido tanto para quem está começando do absoluto zero quanto para profissionais que desejam elevar seu nível de atuação.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {targetProfiles.map((profile, idx) => {
            const Icon = profile.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-[#e1e3e4] hover:border-[#c5a059] rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-md"
              >
                <div>
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-[#f0f4f8] text-[#001f57] flex items-center justify-center mb-3.5">
                    <Icon className="w-5 h-5 text-[#001f57]" />
                  </div>

                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#001f57]">
                    {profile.title}
                  </h3>
                  <p className="text-xs text-[#8c6d2d] font-semibold mb-2.5">
                    {profile.subtitle}
                  </p>

                  <p className="text-xs text-[#555861] leading-relaxed mb-4">
                    {profile.description}
                  </p>

                  {/* Feature Checkmarks */}
                  <div className="space-y-1.5 pt-3 border-t border-[#f0f1f2]">
                    {profile.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-[11px] text-[#444650]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00875a] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
