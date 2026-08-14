import React from 'react';
import { ShieldCheck, ArrowRight, GraduationCap } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#050e18] border-y border-slate-800 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#091b2e] border-2 border-amber-500/30 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          
          {/* Shield Badge Visual */}
          <div className="flex-shrink-0 flex flex-col items-center text-center">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-500 p-1 shadow-2xl shadow-amber-500/30 flex items-center justify-center">
              <div className="w-full h-full bg-[#061220] rounded-full flex flex-col items-center justify-center p-3 text-center">
                <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400" />
                <span className="font-cinzel text-xs sm:text-sm font-bold text-slate-100 uppercase mt-1">7 DIAS</span>
                <span className="text-[9px] text-amber-300 font-semibold uppercase">GARANTIA TOTAL</span>
              </div>
            </div>
          </div>

          {/* Guarantee Copy */}
          <div className="space-y-4 text-center md:text-left flex-1">
            <div className="inline-block text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
              Risco Zero Para Você
            </div>

            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-slate-100">
              Garantia Incondicional de <span className="gold-gradient-text">7 Dias</span>
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Temos tanta certeza da excelência pedagógica e do valor transformador do Instituto Saber Consciente que oferecemos uma garantia blindada de satisfação.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Matricule-se hoje, acesse todas as aulas, baixe as apostilas e experimente o conteúdo. Se dentro de 7 dias você entender que o curso não é para você, basta solicitar o reembolso na Hotmart e devolveremos <strong>100% do seu investimento</strong>. Sem perguntas, sem burocracia.
            </p>

            <div className="pt-2">
              <a
                href="#cursos-elegiveis"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Escolher um curso e experimentar por 7 dias sem compromisso</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
