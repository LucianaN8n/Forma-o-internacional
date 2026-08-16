import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2,
  BookmarkCheck,
  BookOpen,
  Brain,
  Sparkle,
  Building2,
  HeartHandshake
} from 'lucide-react';

export const InstructorSection: React.FC = () => {
  return (
    <section id="luciana" className="py-20 lg:py-28 bg-[#071422] relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            Corpo Docente & Diretoria de Excelência
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 leading-tight">
            Aprenda com Quem é <span className="gold-gradient-text">Referência e Autoridade</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            Nossa equipe de professores e direção une sólida fundamentação científica, mestrado internacional, certificações de ponta e vasta prática clínica para preparar você com máxima credibilidade no mercado.
          </p>
        </div>

        {/* 4 Instructors Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Card 1: Diretora Luciana Domingos */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0a233f] via-[#081b30] to-[#051120] border-2 border-amber-400/50 p-6 sm:p-8 shadow-2xl flex flex-col justify-between group hover:border-amber-400 transition-all duration-300">
            {/* Ambient Corner Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-amber-500/30 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <span className="font-cinzel text-xs font-bold text-amber-300 tracking-wider block">
                      SABER CONSCIENTE ®
                    </span>
                    <span className="text-[10px] text-slate-300">Diretora Geral & Fundadora</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-amber-300 bg-[#123157] px-3 py-1 rounded-full border border-amber-400/40">
                  CRTP 2966
                </span>
              </div>

              {/* Photo & Name Display */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl p-1 bg-gradient-to-tr from-amber-400 via-amber-200 to-blue-700 shadow-xl flex-shrink-0">
                  <div className="w-full h-full rounded-[14px] overflow-hidden bg-slate-900 relative">
                    <img
                      src="https://static.wixstatic.com/media/516330_e3cce102d8134bf0a8f36deb48858ad9~mv2.png"
                      alt="Diretora Luciana Domingos - CRTP 2966"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a233f]/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-amber-500 text-slate-950 p-1.5 rounded-full shadow-lg border-2 border-slate-900">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-400/30 inline-block">
                    Fundadora e Diretora
                  </span>
                  <h3 className="font-cinzel text-2xl font-bold text-slate-100">
                    Luciana Domingos
                  </h3>
                  <p className="text-xs text-amber-300 font-semibold">
                    Diretora Geral do Instituto Saber Consciente ®
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-1.5">
                    <span className="text-[10px] bg-slate-800/80 text-amber-300 px-2 py-0.5 rounded border border-slate-700">
                      🇺🇸 FGU & CEL Education
                    </span>
                    <span className="text-[10px] bg-slate-800/80 text-emerald-300 px-2 py-0.5 rounded border border-slate-700">
                      +50.000 Alunos Formados
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-3 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-700/60 pt-5">
                <p>
                  Com formação acadêmica sólida, <strong>Pós-Graduação em Psicanálise</strong>, <strong>Pós-Graduação em Neurociência</strong> e <strong>Mestrado em Psicologia Clínica pela Christian Business School na Flórida</strong>, a <strong>Diretora Luciana Domingos</strong> (CRTP 2966) consolidou o <strong>Instituto Saber Consciente ®</strong> como uma das maiores referências em formação integrativa e psicanálise do país.
                </p>
                <p>
                  Como fundadora e diretora, Luciana firmou parcerias estratégicas globais com a <strong>Florida Global University (FGU)</strong> e o <strong>Center of Education and Leadership (CEL)</strong> nos Estados Unidos, garantindo aos seus alunos diplomas executivos internacionais com validade e reconhecimento mundial.
                </p>
              </div>

              {/* Marca Registrada Highlight Card */}
              <div className="mt-5 p-3 rounded-xl bg-gradient-to-r from-[#0d2e53] to-[#123e6f] border border-amber-400/40 text-left">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs font-cinzel">
                  <BookmarkCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Saber Consciente ® — Marca Registrada</span>
                </div>
                <p className="text-[11px] text-slate-200 mt-1 leading-snug">
                  Identidade, autoridade e proteção jurídica para transformar vidas com excelência.
                </p>
              </div>
            </div>

            {/* Badges Footer */}
            <div className="mt-6 pt-4 border-t border-slate-700/60 flex flex-wrap gap-2 text-[11px] text-slate-300">
              <span className="bg-[#112a47] px-2.5 py-1 rounded-lg border border-amber-500/30 font-medium">
                🛡️ Mais Credibilidade
              </span>
              <span className="bg-[#112a47] px-2.5 py-1 rounded-lg border border-amber-500/30 font-medium">
                🔒 Mais Proteção
              </span>
              <span className="bg-[#112a47] px-2.5 py-1 rounded-lg border border-amber-500/30 font-medium">
                🇺🇸 Chancelas Internacionais
              </span>
            </div>
          </div>

          {/* Card 2: Prof. Rogério Temporim */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0a233f] via-[#081b30] to-[#051120] border-2 border-amber-400/50 p-6 sm:p-8 shadow-2xl flex flex-col justify-between group hover:border-amber-400 transition-all duration-300">
            {/* Ambient Corner Glow */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-amber-500/30 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <span className="font-cinzel text-xs font-bold text-amber-300 tracking-wider block">
                      CORPO DOCENTE & MINISTRANTE
                    </span>
                    <span className="text-[10px] text-slate-300">Psicoterapia e Psicanálise</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-amber-300 bg-[#123157] px-3 py-1 rounded-full border border-amber-400/40">
                  USP & Mestrado EUA
                </span>
              </div>

              {/* Photo & Name Display */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl p-1 bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-600 shadow-xl flex-shrink-0">
                  <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#e5a024] relative flex items-center justify-center">
                    <img
                      src="https://saberconscienteinstituto.com/wp-content/uploads/2023/05/rogerio-temporim-1.jpg"
                      alt="Prof. Rogério Temporim - Professor Ministrante de Psicoterapia e Psicanálise"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a233f]/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-amber-500 text-slate-950 p-1.5 rounded-full shadow-lg border-2 border-slate-900">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-400/30 inline-block">
                    Professor Ministrante
                  </span>
                  <h3 className="font-cinzel text-2xl font-bold text-slate-100">
                    Prof. Rogério Temporim
                  </h3>
                  <p className="text-xs text-amber-300 font-semibold">
                    Professor Ministrante de Psicoterapia e Psicanálise
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-1.5">
                    <span className="text-[10px] bg-slate-800/80 text-amber-300 px-2 py-0.5 rounded border border-slate-700">
                      🛋️ Psicoterapia & Psicanálise
                    </span>
                    <span className="text-[10px] bg-slate-800/80 text-emerald-300 px-2 py-0.5 rounded border border-slate-700">
                      +77.000 Alunos Formados
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-3 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-700/60 pt-5">
                <p>
                  O <strong>Prof. Rogério Temporim</strong> é o <strong>professor ministrante de Psicoterapia e Psicanálise</strong>. Formado em <strong>Letras Clássicas pela USP</strong>, pós-graduado em <strong>Psicanálise Clínica e Neuropsicanálise</strong>, e <strong>Mestre em Psicologia Clínica pela Christian Business School, em Orlando, EUA</strong>. Vasta trajetória voltada ao estudo da mente, do comportamento humano e dos processos de autoconhecimento.
                </p>
                <p>
                  Psicanalista, escritor e autor de quatro livros, é referência nacional e internacional, com <strong>mais de 77 mil alunos formados</strong>. Fundador do <strong>Instituto Sabedoria Cósmica</strong>, também integra o corpo docente e a coordenação do <strong>Instituto Saber Consciente</strong>, contribuindo diretamente nas formações clínicas, cursos de extensão e supervisão prática.
                </p>
              </div>

              {/* Key Credentials Strip */}
              <div className="mt-5 p-3 rounded-xl bg-gradient-to-r from-[#0d2e53] to-[#123e6f] border border-amber-400/40 text-left">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs font-cinzel">
                  <Building2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Coordenação Pedagógica & Supervisão Clínica</span>
                </div>
                <p className="text-[11px] text-slate-200 mt-1 leading-snug">
                  Supervisão clínica mensal, formação ética e rigor acadêmico de excelência.
                </p>
              </div>
            </div>

            {/* Badges Footer */}
            <div className="mt-6 pt-4 border-t border-slate-700/60 flex flex-wrap gap-2 text-[11px] text-slate-300">
              <span className="bg-[#112a47] px-2.5 py-1 rounded-lg border border-amber-500/30 font-medium">
                🏛️ Graduado USP
              </span>
              <span className="bg-[#112a47] px-2.5 py-1 rounded-lg border border-amber-500/30 font-medium">
                🎓 Mestre em Psicologia (EUA)
              </span>
              <span className="bg-[#112a47] px-2.5 py-1 rounded-lg border border-amber-500/30 font-medium">
                👥 +77 Mil Alunos
              </span>
            </div>
          </div>

          {/* Card 3: Profª. Ana Esteves */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0a233f] via-[#081b30] to-[#051120] border-2 border-amber-400/50 p-6 sm:p-8 shadow-2xl flex flex-col justify-between group hover:border-amber-400 transition-all duration-300">
            {/* Ambient Corner Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-amber-500/30 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center">
                    <Brain className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <span className="font-cinzel text-xs font-bold text-amber-300 tracking-wider block">
                      CORPO DOCENTE & MINISTRANTE
                    </span>
                    <span className="text-[10px] text-slate-300">Neurociência, Psicanálise & Holística</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-amber-300 bg-[#123157] px-3 py-1 rounded-full border border-amber-400/40">
                  Saúde Mental & Clínica
                </span>
              </div>

              {/* Photo & Name Display */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl p-1 bg-gradient-to-tr from-amber-400 via-amber-200 to-purple-600 shadow-xl flex-shrink-0">
                  <div className="w-full h-full rounded-[14px] overflow-hidden bg-slate-900 relative flex items-center justify-center">
                    <img
                      src="https://saberconscienteinstituto.com/wp-content/uploads/2024/06/ana-esteves.jpg"
                      alt="Profª. Ana Esteves - Professora Ministrante de Neurociência, Psicanálise e Terapias Holísticas"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a233f]/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-amber-500 text-slate-950 p-1.5 rounded-full shadow-lg border-2 border-slate-900">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-400/30 inline-block">
                    Professora Ministrante
                  </span>
                  <h3 className="font-cinzel text-2xl font-bold text-slate-100">
                    Profª. Ana Esteves
                  </h3>
                  <p className="text-xs text-amber-300 font-semibold">
                    Ministrante de Neurociência, Psicanálise e Terapias Holísticas
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-1.5">
                    <span className="text-[10px] bg-slate-800/80 text-amber-300 px-2 py-0.5 rounded border border-slate-700">
                      🧠 Neurociência & Psicanálise
                    </span>
                    <span className="text-[10px] bg-slate-800/80 text-emerald-300 px-2 py-0.5 rounded border border-slate-700">
                      🌿 Terapias Integrativas
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-3 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-700/60 pt-5">
                <p>
                  A <strong>Profª. Ana Esteves</strong> é <strong>professora ministrante de Neurociência, Psicanálise e demais Terapias Holísticas</strong> no Instituto Saber Consciente. Psicoterapeuta, Psicanalista e Terapeuta Comportamental com vasta experiência na área da saúde mental.
                </p>
                <p>
                  Formada em <strong>terapia emocional, terapia infantil, perdas e lutos, transtornos comportamentais, psicopatologia forense, psicanálise clínica e integrativa</strong>. É também <strong>Aplicadora ABA e Naturopata</strong>, trazendo uma abordagem humanizada, prática e multidisciplinar aos alunos.
                </p>
              </div>

              {/* Key Credentials Strip */}
              <div className="mt-5 p-3 rounded-xl bg-gradient-to-r from-[#0d2e53] to-[#123e6f] border border-amber-400/40 text-left">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs font-cinzel">
                  <HeartHandshake className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Especialista em Saúde Mental & Comportamento</span>
                </div>
                <p className="text-[11px] text-slate-200 mt-1 leading-snug">
                  Atuação em psicopatologia forense, perdas/lutos, infância e intervenções integrativas.
                </p>
              </div>
            </div>

            {/* Badges Footer */}
            <div className="mt-6 pt-4 border-t border-slate-700/60 flex flex-wrap gap-2 text-[11px] text-slate-300">
              <span className="bg-[#112a47] px-2.5 py-1 rounded-lg border border-amber-500/30 font-medium">
                🧠 Neurociência Clínica
              </span>
              <span className="bg-[#112a47] px-2.5 py-1 rounded-lg border border-amber-500/30 font-medium">
                🧸 Terapia Infantil & ABA
              </span>
              <span className="bg-[#112a47] px-2.5 py-1 rounded-lg border border-amber-500/30 font-medium">
                🌿 Naturopatia Integrativa
              </span>
            </div>
          </div>

          {/* Card 4: Prof. Francisco Miguel Kessler */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0a233f] via-[#081b30] to-[#051120] border-2 border-amber-400/50 p-6 sm:p-8 shadow-2xl flex flex-col justify-between group hover:border-amber-400 transition-all duration-300">
            {/* Ambient Corner Glow */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-amber-500/30 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center">
                    <Brain className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <span className="font-cinzel text-xs font-bold text-amber-300 tracking-wider block">
                      CORPO DOCENTE & MINISTRANTE
                    </span>
                    <span className="text-[10px] text-slate-300">Neurociência & Hipnoterapia</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-amber-300 bg-[#123157] px-3 py-1 rounded-full border border-amber-400/40">
                  Certificação Internacional
                </span>
              </div>

              {/* Photo & Name Display */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl p-1 bg-gradient-to-tr from-amber-400 via-amber-200 to-cyan-600 shadow-xl flex-shrink-0">
                  <div className="w-full h-full rounded-[14px] overflow-hidden bg-slate-900 relative flex items-center justify-center">
                    <img
                      src="https://saberconscienteinstituto.com/wp-content/uploads/2023/05/francisco.png"
                      alt="Prof. Francisco Miguel Kessler - Professor Ministrante de Neurociência"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a233f]/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-amber-500 text-slate-950 p-1.5 rounded-full shadow-lg border-2 border-slate-900">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-400/30 inline-block">
                    Professor Ministrante
                  </span>
                  <h3 className="font-cinzel text-2xl font-bold text-slate-100">
                    Prof. Francisco Miguel Kessler
                  </h3>
                  <p className="text-xs text-amber-300 font-semibold">
                    Professor Ministrante de Neurociência
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-1.5">
                    <span className="text-[10px] bg-slate-800/80 text-amber-300 px-2 py-0.5 rounded border border-slate-700">
                      🧠 Neurociência Aplicada
                    </span>
                    <span className="text-[10px] bg-slate-800/80 text-emerald-300 px-2 py-0.5 rounded border border-slate-700">
                      🌐 Hipnoterapeuta Internacional
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-3 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-700/60 pt-5">
                <p>
                  O <strong>Prof. Francisco Miguel Kessler</strong> é <strong>professor ministrante de Neurociência</strong> no Instituto Saber Consciente. Hipnoterapeuta com <strong>certificação Nacional e Internacional</strong>, Psicoterapeuta e Mestre em REIKI.
                </p>
                <p>
                  Possui <strong>Especialização em Psicanálise e Neurociência</strong>, entre outras formações avançadas de alta complexidade, dedicando-se ao estudo prático dos mecanismos cerebrais, indução terapêutica, plasticidade neural e reestruturação emocional profunda.
                </p>
              </div>

              {/* Key Credentials Strip */}
              <div className="mt-5 p-3 rounded-xl bg-gradient-to-r from-[#0d2e53] to-[#123e6f] border border-amber-400/40 text-left">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs font-cinzel">
                  <Sparkle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Neurociência & Reprogramação Mental</span>
                </div>
                <p className="text-[11px] text-slate-200 mt-1 leading-snug">
                  Domínio clínico de hipnoterapia internacional, mestre em Reiki e neurociência.
                </p>
              </div>
            </div>

            {/* Badges Footer */}
            <div className="mt-6 pt-4 border-t border-slate-700/60 flex flex-wrap gap-2 text-[11px] text-slate-300">
              <span className="bg-[#112a47] px-2.5 py-1 rounded-lg border border-amber-500/30 font-medium">
                🌐 Hipnose Internacional
              </span>
              <span className="bg-[#112a47] px-2.5 py-1 rounded-lg border border-amber-500/30 font-medium">
                🧠 Esp. em Neurociência
              </span>
              <span className="bg-[#112a47] px-2.5 py-1 rounded-lg border border-amber-500/30 font-medium">
                ✨ Mestre em Reiki
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0b223a]/70 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h4 className="font-cinzel text-base font-bold text-slate-100">
                Corpo Docente de Alto Nível e Reconhecimento Internacional
              </h4>
              <p className="text-xs text-slate-300">
                Aprenda diretamente com mestres, psicanalistas e neurocientistas com vasta experiência clínica e chancelas oficiais.
              </p>
            </div>
          </div>

          <a
            href="#cursos-elegiveis"
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-amber-500/20 text-center whitespace-nowrap"
          >
            Quero Me Matricular com os Mestres
          </a>
        </div>

      </div>
    </section>
  );
};



