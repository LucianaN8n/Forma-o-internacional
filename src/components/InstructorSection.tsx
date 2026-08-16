import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Sparkles, 
  ShieldCheck, 
  BookmarkCheck,
  BookOpen,
  Brain,
  Sparkle,
  Building2,
  HeartHandshake,
  Gem,
  Flower2
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

        {/* 6 Instructors Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Diretora Luciana Domingos */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0a233f] via-[#081b30] to-[#051120] border-2 border-amber-400/50 p-6 shadow-2xl flex flex-col justify-between group hover:border-amber-400 transition-all duration-300">
            {/* Ambient Corner Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-amber-500/30 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  </div>
                  <div>
                    <span className="font-cinzel text-[11px] font-bold text-amber-300 tracking-wider block">
                      SABER CONSCIENTE ®
                    </span>
                    <span className="text-[10px] text-slate-300">Diretora Geral & Fundadora</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-amber-300 bg-[#123157] px-2.5 py-0.5 rounded-full border border-amber-400/40">
                  CRTP 2966
                </span>
              </div>

              {/* Photo & Name Display */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-5">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl p-1 bg-gradient-to-tr from-amber-400 via-amber-200 to-blue-700 shadow-xl flex-shrink-0">
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
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-400/30 inline-block">
                    Fundadora e Diretora
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-slate-100">
                    Luciana Domingos
                  </h3>
                  <p className="text-xs text-amber-300 font-semibold">
                    Diretora Geral do Instituto Saber Consciente ®
                  </p>
                  <div className="pt-1.5 flex flex-wrap justify-center sm:justify-start gap-1">
                    <span className="text-[10px] bg-slate-800/80 text-emerald-300 px-2 py-0.5 rounded border border-slate-700">
                      +50.000 Alunos Formados
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-2.5 text-slate-300 text-xs leading-relaxed border-t border-slate-700/60 pt-4">
                <p>
                  Com formação acadêmica sólida, <strong>Pós-Graduação em Psicanálise</strong>, <strong>Pós-Graduação em Neurociência</strong> e <strong>Mestrado em Psicologia Clínica pela Christian Business School na Flórida</strong>, consolidou o <strong>Instituto Saber Consciente ®</strong> como uma das maiores referências no país.
                </p>
                <p>
                  Firmou parcerias com a <strong>Florida Global University (FGU)</strong> e o <strong>Center of Education and Leadership (CEL)</strong> nos EUA, garantindo aos alunos diplomas executivos internacionais com validade mundial.
                </p>
              </div>

              {/* Marca Registrada Highlight Card */}
              <div className="mt-4 p-2.5 rounded-xl bg-gradient-to-r from-[#0d2e53] to-[#123e6f] border border-amber-400/40 text-left">
                <div className="flex items-center gap-1.5 text-amber-300 font-bold text-xs font-cinzel">
                  <BookmarkCheck className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Saber Consciente ® — Marca Registrada</span>
                </div>
                <p className="text-[11px] text-slate-200 mt-0.5 leading-snug">
                  Identidade, autoridade e proteção jurídica para transformar vidas.
                </p>
              </div>
            </div>

            {/* Badges Footer */}
            <div className="mt-5 pt-3 border-t border-slate-700/60 flex flex-wrap gap-1.5 text-[10px] text-slate-300">
              <span className="bg-[#112a47] px-2 py-0.5 rounded border border-amber-500/30 font-medium">
                🇺🇸 FGU & CEL (EUA)
              </span>
              <span className="bg-[#112a47] px-2 py-0.5 rounded border border-amber-500/30 font-medium">
                🎓 Mestre em Psicologia
              </span>
            </div>
          </div>

          {/* Card 2: Prof. Rogério Temporim */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0a233f] via-[#081b30] to-[#051120] border-2 border-amber-400/50 p-6 shadow-2xl flex flex-col justify-between group hover:border-amber-400 transition-all duration-300">
            {/* Ambient Corner Glow */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-amber-500/30 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center">
                    <BookOpen className="w-3.5 h-3.5 text-amber-300" />
                  </div>
                  <div>
                    <span className="font-cinzel text-[11px] font-bold text-amber-300 tracking-wider block">
                      CORPO DOCENTE & MINISTRANTE
                    </span>
                    <span className="text-[10px] text-slate-300">Psicoterapia e Psicanálise</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-amber-300 bg-[#123157] px-2.5 py-0.5 rounded-full border border-amber-400/40">
                  USP & Mestrado EUA
                </span>
              </div>

              {/* Photo & Name Display */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-5">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl p-1 bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-600 shadow-xl flex-shrink-0">
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
                    <GraduationCap className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-400/30 inline-block">
                    Professor Ministrante
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-slate-100">
                    Prof. Rogério Temporim
                  </h3>
                  <p className="text-xs text-amber-300 font-semibold">
                    Ministrante de Psicoterapia e Psicanálise
                  </p>
                  <div className="pt-1.5 flex flex-wrap justify-center sm:justify-start gap-1">
                    <span className="text-[10px] bg-slate-800/80 text-emerald-300 px-2 py-0.5 rounded border border-slate-700">
                      +77.000 Alunos Formados
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-2.5 text-slate-300 text-xs leading-relaxed border-t border-slate-700/60 pt-4">
                <p>
                  O <strong>Prof. Rogério Temporim</strong> é o <strong>professor ministrante de Psicoterapia e Psicanálise</strong>. Formado em <strong>Letras Clássicas pela USP</strong>, pós-graduado em <strong>Psicanálise Clínica e Neuropsicanálise</strong>, e <strong>Mestre em Psicologia Clínica pela Christian Business School, em Orlando, EUA</strong>.
                </p>
                <p>
                  Psicanalista, escritor e autor de quatro livros, é referência com mais de 77 mil alunos formados. Fundador do Instituto Sabedoria Cósmica, integra o corpo docente do Instituto Saber Consciente, ministrando formações clínicas e supervisões ao vivo.
                </p>
              </div>

              {/* Key Credentials Strip */}
              <div className="mt-4 p-2.5 rounded-xl bg-gradient-to-r from-[#0d2e53] to-[#123e6f] border border-amber-400/40 text-left">
                <div className="flex items-center gap-1.5 text-amber-300 font-bold text-xs font-cinzel">
                  <Building2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Coordenação & Supervisão Clínica</span>
                </div>
                <p className="text-[11px] text-slate-200 mt-0.5 leading-snug">
                  Supervisão mensal ao vivo e formação ética de alto nível.
                </p>
              </div>
            </div>

            {/* Badges Footer */}
            <div className="mt-5 pt-3 border-t border-slate-700/60 flex flex-wrap gap-1.5 text-[10px] text-slate-300">
              <span className="bg-[#112a47] px-2 py-0.5 rounded border border-amber-500/30 font-medium">
                🏛️ Graduado USP
              </span>
              <span className="bg-[#112a47] px-2 py-0.5 rounded border border-amber-500/30 font-medium">
                🎓 Mestre em Psicologia (EUA)
              </span>
            </div>
          </div>

          {/* Card 3: Profª. Ana Esteves */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0a233f] via-[#081b30] to-[#051120] border-2 border-amber-400/50 p-6 shadow-2xl flex flex-col justify-between group hover:border-amber-400 transition-all duration-300">
            {/* Ambient Corner Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-amber-500/30 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center">
                    <Brain className="w-3.5 h-3.5 text-amber-300" />
                  </div>
                  <div>
                    <span className="font-cinzel text-[11px] font-bold text-amber-300 tracking-wider block">
                      CORPO DOCENTE & MINISTRANTE
                    </span>
                    <span className="text-[10px] text-slate-300">Neurociência, Psicanálise & Holística</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-amber-300 bg-[#123157] px-2.5 py-0.5 rounded-full border border-amber-400/40">
                  Saúde Mental
                </span>
              </div>

              {/* Photo & Name Display */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-5">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl p-1 bg-gradient-to-tr from-amber-400 via-amber-200 to-purple-600 shadow-xl flex-shrink-0">
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
                    <GraduationCap className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-400/30 inline-block">
                    Professora Ministrante
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-slate-100">
                    Profª. Ana Esteves
                  </h3>
                  <p className="text-xs text-amber-300 font-semibold">
                    Ministrante de Neurociência, Psicanálise e Terapias Holísticas
                  </p>
                  <div className="pt-1.5 flex flex-wrap justify-center sm:justify-start gap-1">
                    <span className="text-[10px] bg-slate-800/80 text-emerald-300 px-2 py-0.5 rounded border border-slate-700">
                      🌿 Terapias Holísticas
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-2.5 text-slate-300 text-xs leading-relaxed border-t border-slate-700/60 pt-4">
                <p>
                  A <strong>Profª. Ana Esteves</strong> é <strong>professora ministrante de Neurociência, Psicanálise e demais Terapias Holísticas</strong>. Psicoterapeuta, Psicanalista e Terapeuta Comportamental com vasta experiência em saúde mental.
                </p>
                <p>
                  Formada em <strong>terapia emocional, infantil, perdas e lutos, transtornos comportamentais, psicopatologia forense, psicanálise clínica e integrativa, Aplicadora ABA e Naturopata</strong>.
                </p>
              </div>

              {/* Key Credentials Strip */}
              <div className="mt-4 p-2.5 rounded-xl bg-gradient-to-r from-[#0d2e53] to-[#123e6f] border border-amber-400/40 text-left">
                <div className="flex items-center gap-1.5 text-amber-300 font-bold text-xs font-cinzel">
                  <HeartHandshake className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Saúde Mental & Comportamento</span>
                </div>
                <p className="text-[11px] text-slate-200 mt-0.5 leading-snug">
                  Psicopatologia forense, infância, luto e abordagens integrativas.
                </p>
              </div>
            </div>

            {/* Badges Footer */}
            <div className="mt-5 pt-3 border-t border-slate-700/60 flex flex-wrap gap-1.5 text-[10px] text-slate-300">
              <span className="bg-[#112a47] px-2 py-0.5 rounded border border-amber-500/30 font-medium">
                🧠 Neurociência
              </span>
              <span className="bg-[#112a47] px-2 py-0.5 rounded border border-amber-500/30 font-medium">
                🧸 Infantil & ABA
              </span>
              <span className="bg-[#112a47] px-2 py-0.5 rounded border border-amber-500/30 font-medium">
                🌿 Naturopatia
              </span>
            </div>
          </div>

          {/* Card 4: Prof. Francisco Miguel Kessler */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0a233f] via-[#081b30] to-[#051120] border-2 border-amber-400/50 p-6 shadow-2xl flex flex-col justify-between group hover:border-amber-400 transition-all duration-300">
            {/* Ambient Corner Glow */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-amber-500/30 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center">
                    <Brain className="w-3.5 h-3.5 text-amber-300" />
                  </div>
                  <div>
                    <span className="font-cinzel text-[11px] font-bold text-amber-300 tracking-wider block">
                      CORPO DOCENTE & MINISTRANTE
                    </span>
                    <span className="text-[10px] text-slate-300">Neurociência & Hipnoterapia</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-amber-300 bg-[#123157] px-2.5 py-0.5 rounded-full border border-amber-400/40">
                  Internacional
                </span>
              </div>

              {/* Photo & Name Display */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-5">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl p-1 bg-gradient-to-tr from-amber-400 via-amber-200 to-cyan-600 shadow-xl flex-shrink-0">
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
                    <GraduationCap className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-400/30 inline-block">
                    Professor Ministrante
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-slate-100">
                    Prof. Francisco Miguel Kessler
                  </h3>
                  <p className="text-xs text-amber-300 font-semibold">
                    Professor Ministrante de Neurociência
                  </p>
                  <div className="pt-1.5 flex flex-wrap justify-center sm:justify-start gap-1">
                    <span className="text-[10px] bg-slate-800/80 text-emerald-300 px-2 py-0.5 rounded border border-slate-700">
                      🌐 Hipnose Internacional
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-2.5 text-slate-300 text-xs leading-relaxed border-t border-slate-700/60 pt-4">
                <p>
                  O <strong>Prof. Francisco Miguel Kessler</strong> é <strong>professor ministrante de Neurociência</strong> no Instituto Saber Consciente. Hipnoterapeuta com <strong>certificação Nacional e Internacional</strong>, Psicoterapeuta e Mestre em REIKI.
                </p>
                <p>
                  Possui <strong>Especialização em Psicanálise e Neurociência</strong>, com atuação voltada à plasticidade neural, reprogramação mental e processos integrativos de alta eficácia.
                </p>
              </div>

              {/* Key Credentials Strip */}
              <div className="mt-4 p-2.5 rounded-xl bg-gradient-to-r from-[#0d2e53] to-[#123e6f] border border-amber-400/40 text-left">
                <div className="flex items-center gap-1.5 text-amber-300 font-bold text-xs font-cinzel">
                  <Sparkle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Neurociência & Reprogramação</span>
                </div>
                <p className="text-[11px] text-slate-200 mt-0.5 leading-snug">
                  Hipnoterapia internacional e especialização em neurociência.
                </p>
              </div>
            </div>

            {/* Badges Footer */}
            <div className="mt-5 pt-3 border-t border-slate-700/60 flex flex-wrap gap-1.5 text-[10px] text-slate-300">
              <span className="bg-[#112a47] px-2 py-0.5 rounded border border-amber-500/30 font-medium">
                🌐 Hipnoterapeuta
              </span>
              <span className="bg-[#112a47] px-2 py-0.5 rounded border border-amber-500/30 font-medium">
                🧠 Neurociência
              </span>
              <span className="bg-[#112a47] px-2 py-0.5 rounded border border-amber-500/30 font-medium">
                ✨ Mestre Reiki
              </span>
            </div>
          </div>

          {/* Card 5: Prof. Tibério */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0a233f] via-[#081b30] to-[#051120] border-2 border-amber-400/50 p-6 shadow-2xl flex flex-col justify-between group hover:border-amber-400 transition-all duration-300">
            {/* Ambient Corner Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-amber-500/30 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center">
                    <Gem className="w-3.5 h-3.5 text-amber-300" />
                  </div>
                  <div>
                    <span className="font-cinzel text-[11px] font-bold text-amber-300 tracking-wider block">
                      CORPO DOCENTE & MINISTRANTE
                    </span>
                    <span className="text-[10px] text-slate-300">Cristaloterapia & Terapia Quântica</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-amber-300 bg-[#123157] px-2.5 py-0.5 rounded-full border border-amber-400/40">
                  PNL & Quântica
                </span>
              </div>

              {/* Photo & Name Display */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-5">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl p-1 bg-gradient-to-tr from-amber-400 via-amber-200 to-teal-600 shadow-xl flex-shrink-0">
                  <div className="w-full h-full rounded-[14px] overflow-hidden bg-slate-900 relative flex items-center justify-center">
                    <img
                      src="https://saberconscienteinstituto.com/wp-content/uploads/2023/05/tiberio.png"
                      alt="Prof. Tibério - Professor de Cristaloterapia, Terapia Quântica, PNL e Atenção Plena"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a233f]/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-amber-500 text-slate-950 p-1.5 rounded-full shadow-lg border-2 border-slate-900">
                    <GraduationCap className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-400/30 inline-block">
                    Professor Ministrante
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-slate-100">
                    Prof. Tibério
                  </h3>
                  <p className="text-xs text-amber-300 font-semibold">
                    Cristaloterapia, Terapia Quântica, PNL e Mindfulness
                  </p>
                  <div className="pt-1.5 flex flex-wrap justify-center sm:justify-start gap-1">
                    <span className="text-[10px] bg-slate-800/80 text-emerald-300 px-2 py-0.5 rounded border border-slate-700">
                      💎 Metafísica & Quântica
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-2.5 text-slate-300 text-xs leading-relaxed border-t border-slate-700/60 pt-4">
                <p>
                  O <strong>Prof. Tibério</strong> é <strong>professor de Cristaloterapia, Terapia Quântica, PNL (Programação Neurolinguística) e Atenção Plena (Mindfulness)</strong> no Instituto Saber Consciente.
                </p>
                <p>
                  Metafísico e dedicado estudante da espiritualidade prática, ensina a harmonização vibracional, campos bioenergéticos sutis e expansão da consciência para potencializar atendimentos terapêuticos.
                </p>
              </div>

              {/* Key Credentials Strip */}
              <div className="mt-4 p-2.5 rounded-xl bg-gradient-to-r from-[#0d2e53] to-[#123e6f] border border-amber-400/40 text-left">
                <div className="flex items-center gap-1.5 text-amber-300 font-bold text-xs font-cinzel">
                  <Gem className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Bioenergia & Atenção Plena</span>
                </div>
                <p className="text-[11px] text-slate-200 mt-0.5 leading-snug">
                  Integração prática de PNL, cristais, física quântica e mindfulness.
                </p>
              </div>
            </div>

            {/* Badges Footer */}
            <div className="mt-5 pt-3 border-t border-slate-700/60 flex flex-wrap gap-1.5 text-[10px] text-slate-300">
              <span className="bg-[#112a47] px-2 py-0.5 rounded border border-amber-500/30 font-medium">
                💎 Cristaloterapia
              </span>
              <span className="bg-[#112a47] px-2 py-0.5 rounded border border-amber-500/30 font-medium">
                ⚛️ Terapia Quântica
              </span>
              <span className="bg-[#112a47] px-2 py-0.5 rounded border border-amber-500/30 font-medium">
                🧘 PNL & Mindfulness
              </span>
            </div>
          </div>

          {/* Card 6: Profª. Mariana Sallum */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0a233f] via-[#081b30] to-[#051120] border-2 border-amber-400/50 p-6 shadow-2xl flex flex-col justify-between group hover:border-amber-400 transition-all duration-300">
            {/* Ambient Corner Glow */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-amber-500/30 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center">
                    <Flower2 className="w-3.5 h-3.5 text-amber-300" />
                  </div>
                  <div>
                    <span className="font-cinzel text-[11px] font-bold text-amber-300 tracking-wider block">
                      CORPO DOCENTE & MINISTRANTE
                    </span>
                    <span className="text-[10px] text-slate-300">Aromaterapia & Terapias Naturais</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-amber-300 bg-[#123157] px-2.5 py-0.5 rounded-full border border-amber-400/40">
                  Práticas Naturais
                </span>
              </div>

              {/* Photo & Name Display */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-5">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl p-1 bg-gradient-to-tr from-amber-400 via-amber-200 to-emerald-600 shadow-xl flex-shrink-0">
                  <div className="w-full h-full rounded-[14px] overflow-hidden bg-slate-900 relative flex items-center justify-center">
                    <img
                      src="https://saberconscienteinstituto.com/wp-content/uploads/2023/05/mariana.png"
                      alt="Profª. Mariana Sallum - Professora de Aromaterapia, Cromoterapia, Ventosaterapia e Massagem com OE"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a233f]/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-amber-500 text-slate-950 p-1.5 rounded-full shadow-lg border-2 border-slate-900">
                    <GraduationCap className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-400/30 inline-block">
                    Professora Ministrante
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-slate-100">
                    Profª. Mariana Sallum
                  </h3>
                  <p className="text-xs text-amber-300 font-semibold">
                    Aromaterapia, Cromoterapia e Práticas Corporais
                  </p>
                  <div className="pt-1.5 flex flex-wrap justify-center sm:justify-start gap-1">
                    <span className="text-[10px] bg-slate-800/80 text-emerald-300 px-2 py-0.5 rounded border border-slate-700">
                      🌿 Aromaterapia & OE
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-2.5 text-slate-300 text-xs leading-relaxed border-t border-slate-700/60 pt-4">
                <p>
                  A <strong>Profª. Mariana Sallum</strong> é <strong>professora de Aromaterapia, Cromoterapia, Ventosaterapia e Massagem com Óleos Essenciais (OE)</strong> no Instituto Saber Consciente.
                </p>
                <p>
                  Especialista em terapias corporais e integrativas, conduz práticas clínicas com protocolos seguros de aplicação de óleos essenciais, relaxamento miofascial, equilíbrio dos chakras e regeneração física e emocional.
                </p>
              </div>

              {/* Key Credentials Strip */}
              <div className="mt-4 p-2.5 rounded-xl bg-gradient-to-r from-[#0d2e53] to-[#123e6f] border border-amber-400/40 text-left">
                <div className="flex items-center gap-1.5 text-amber-300 font-bold text-xs font-cinzel">
                  <Flower2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Terapias Corporais & Sensoriais</span>
                </div>
                <p className="text-[11px] text-slate-200 mt-0.5 leading-snug">
                  Aromaterapia clínica, ventosas, massagem com OE e cromoterapia.
                </p>
              </div>
            </div>

            {/* Badges Footer */}
            <div className="mt-5 pt-3 border-t border-slate-700/60 flex flex-wrap gap-1.5 text-[10px] text-slate-300">
              <span className="bg-[#112a47] px-2 py-0.5 rounded border border-amber-500/30 font-medium">
                🌿 Aromaterapia
              </span>
              <span className="bg-[#112a47] px-2 py-0.5 rounded border border-amber-500/30 font-medium">
                🌈 Cromoterapia
              </span>
              <span className="bg-[#112a47] px-2 py-0.5 rounded border border-amber-500/30 font-medium">
                💆 Ventosas & Massagem OE
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
                Aprenda diretamente com mestres, psicanalistas, neurocientistas e especialistas holísticos com vasta experiência clínica.
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




