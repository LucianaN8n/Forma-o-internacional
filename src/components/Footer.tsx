import React from 'react';
import { Sparkles, ShieldCheck, Award, Globe, Heart } from 'lucide-react';
import { ELIGIBLE_COURSES } from '../data/coursesData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#040a12] text-slate-400 text-xs pt-16 pb-24 lg:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-200 p-0.5 shadow-md">
                <div className="w-full h-full bg-[#061220] rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div>
                <span className="font-cinzel text-lg font-bold text-slate-100 uppercase tracking-wider block">
                  Instituto <span className="gold-gradient-text">Saber Consciente</span>
                </span>
                <span className="text-[10px] text-amber-300/80 uppercase tracking-widest font-medium">
                  Worldwide LLC • Formação Internacional
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Instituição dedicada à excelência no ensino e na formação profissional com reconhecimento global, promovendo capacitação baseada em rigor científico, abordagens integrativas e ética.
            </p>

            <div className="pt-2 text-[11px] text-amber-300/90 space-y-1">
              <p className="flex items-center gap-1.5 font-medium">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                ✔ Emissão pela Saber Consciente Worldwide LLC (EUA)
              </p>
              <p className="flex items-center gap-1.5 font-medium text-slate-300">
                <Award className="w-3.5 h-3.5 text-blue-400" />
                <a 
                  href="https://cel.education/aliados/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-amber-400 transition-colors underline decoration-slate-700 hover:decoration-amber-400"
                >
                  “Certificado por @cel.education e avalizado por @fgu_online”
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-slate-200 uppercase tracking-wider">
              Cursos Elegíveis
            </h4>
            <ul className="space-y-2 text-xs">
              {ELIGIBLE_COURSES.map((c) => (
                <li key={c.id}>
                  <a href={c.checkoutUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                    <span>{c.emoji}</span>
                    <span>{c.title}</span>
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-800/60">
                <a href="#certificado" className="hover:text-amber-400 transition-colors">Certificado Internacional</a>
              </li>
              <li>
                <a href="#luciana" className="hover:text-amber-400 transition-colors">Diretora Luciana Domingos</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">Dúvidas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Legal / Security */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-slate-200 uppercase tracking-wider">
              Segurança & Reconhecimento
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Processamento seguro via Hotmart com criptografia SSL 256-bit. Seus dados estão 100% protegidos e confidenciais.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-[10px]">
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300">
                Florida Global University (FGU)
              </span>
              <a 
                href="https://cel.education/aliados/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-400/50 px-2.5 py-1 rounded text-amber-300/90 hover:text-amber-300 transition-all flex items-center gap-1"
                id="footer-link-cel-education"
              >
                <span>CEL Education Leadership</span>
                <span className="text-[9px]">↗</span>
              </a>
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300">
                Saber Consciente Worldwide LLC (EUA)
              </span>
            </div>
          </div>

        </div>

        {/* Disclaimer and Copyright */}
        <div className="pt-8 space-y-4 text-center text-[11px] text-slate-400">
          <p className="max-w-4xl mx-auto leading-relaxed">
            Aviso Legal: Os resultados podem variar de pessoa para pessoa. As formações capacitam o profissional segundo as diretrizes de desenvolvimento pessoal, práticas integrativas (CBO 3221-25) e psicanálise clínica livre.
          </p>
          <p className="text-slate-400">
            © {new Date().getFullYear()} Instituto Saber Consciente Worldwide LLC. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};
