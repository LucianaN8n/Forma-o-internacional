import React from 'react';
import { 
  UserCheck, 
  Sparkles, 
  Compass, 
  HeartHandshake, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp,
  GraduationCap
} from 'lucide-react';

export const WhoIsThisFor: React.FC = () => {
  const targetProfiles = [
    {
      icon: Compass,
      title: "Iniciantes do Zero",
      subtitle: "Nunca atuou na área terapêutica",
      description: "Você não precisa de graduação prévia. O método foi desenhado passo a passo, do básico ao avançado, para capacitar você a realizar atendimentos seguros e profissionais.",
      features: [
        "Metodologia didática e descomplicada",
        "Aulas práticas com demonstrações reais",
        "Material didático ilustrado em PDF",
        "Acompanhamento e suporte a dúvidas"
      ],
      highlight: "Ideal para começar do zero"
    },
    {
      icon: Briefcase,
      title: "Transição de Carreira",
      subtitle: "Em busca de um propósito profissional",
      description: "Se você busca uma nova profissão com liberdade de horários, autonomia e possibilidade de atendimento online para clientes em qualquer lugar do mundo.",
      features: [
        "Estude no seu próprio ritmo",
        "Atenda presencialmente ou online",
        "Conquiste liberdade geográfica e financeira",
        "Capacitação para consultório próprio"
      ],
      highlight: "Para viver do seu propósito"
    },
    {
      icon: TrendingUp,
      title: "Terapeutas & Profissionais da Saúde",
      subtitle: "Psicólogos, enfermeiros, terapeutas",
      description: "Eleve seu nível técnico e agregue ferramentas consagradas e científicas, aumentando o valor das suas consultas e conquistando autoridade com diploma emitido nos EUA.",
      features: [
        "Diferencial com Certificação Internacional",
        "Embasamento prático e conceitual profundo",
        "Valorização do valor cobrado por consulta",
        "Protocolos de intervenção estruturados"
      ],
      highlight: "Aumente seu reconhecimento"
    },
    {
      icon: HeartHandshake,
      title: "Autoconhecimento & Autocura",
      subtitle: "Para transformação e equilíbrio pessoal",
      description: "Aprenda a mapear e tratar suas próprias questões emocionais, aliviar a ansiedade e harmonizar a saúde e energia de familiares e pessoas queridas.",
      features: [
        "Autoconhecimento profundo e autoliderança",
        "Ferramentas práticas de regulação emocional",
        "Harmonização familiar e relacionamentos",
        "Evolução contínua e bem-estar integral"
      ],
      highlight: "Evolução e Bem-Estar"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#f8f9fa] text-[#191c1d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#001f57]/10 border border-[#001f57]/20 text-[#001f57] text-xs font-bold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5 text-[#001f57]" />
            Público-Alvo
          </div>
          
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#001f57]">
            Para Quem São Nossas <span className="gold-gradient-text">Formações Internacionais?</span>
          </h2>
          
          <p className="mt-4 text-[#444650] text-base sm:text-lg">
            Independentemente do seu ponto de partida, os programas do Instituto Saber Consciente foram estruturados para capacitar você com excelência.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetProfiles.map((profile, idx) => {
            const Icon = profile.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-[#e1e3e4] hover:border-[#c5a059] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl group"
              >
                <div>
                  {/* Badge */}
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#001f57] bg-[#001f57]/10 border border-[#001f57]/20 px-2.5 py-0.5 rounded-full mb-4">
                    {profile.highlight}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#f0f4f8] group-hover:bg-[#c5a059]/20 border border-[#d2ddec] group-hover:border-[#c5a059]/40 flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-6 h-6 text-[#001f57]" />
                  </div>

                  <h3 className="font-cinzel text-lg font-bold text-[#001f57] group-hover:text-[#001f57] transition-colors">
                    {profile.title}
                  </h3>
                  <p className="text-xs text-[#8c6d2d] font-semibold mb-3">
                    {profile.subtitle}
                  </p>

                  <p className="text-xs text-[#444650] leading-relaxed mb-4">
                    {profile.description}
                  </p>

                  {/* Feature Checkmarks */}
                  <div className="space-y-2 pt-3 border-t border-[#e1e3e4]">
                    {profile.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-[11px] text-[#444650]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00875a] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#e1e3e4]">
                  <a
                    href="#cursos-elegiveis"
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#001f57] hover:bg-[#c5a059] hover:text-[#001438] text-white text-xs font-bold transition-all text-center"
                  >
                    <span>Ver Cursos Elegíveis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
