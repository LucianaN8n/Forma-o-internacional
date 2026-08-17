import React from 'react';
import { Sparkles, ShieldCheck, Award, Globe, Heart, MessageCircle, Phone } from 'lucide-react';
import { ELIGIBLE_COURSES } from '../data/coursesData';

export const Footer: React.FC = () => {
  const whatsappUrl = "https://wa.me/5511992338606?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20forma%C3%A7%C3%B5es%20com%20certifica%C3%A7%C3%A3o%20internacional.";

  return (
    <footer className="bg-[#001438] text-[#dae2ff] text-xs pt-16 pb-24 lg:pb-16 border-t border-[#425c9d]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#425c9d]/30">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#c5a059] to-[#ecdcb9] p-0.5 shadow-md">
                <div className="w-full h-full bg-[#001f57] rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#c5a059]" />
                </div>
              </div>
              <div>
                <span className="font-cinzel text-lg font-bold text-white uppercase tracking-wider block">
                  Instituto <span className="text-[#c5a059]">Saber Consciente</span>
                </span>
                <span className="text-[10px] text-[#ecdcb9] uppercase tracking-widest font-medium">
                  Worldwide LLC • Formação Internacional
                </span>
              </div>
            </div>

            <p className="text-[#dae2ff] text-xs leading-relaxed max-w-md">
              Instituição dedicada à excelência no ensino e na formação profissional com reconhecimento global, promovendo capacitação baseada em rigor científico, abordagens integrativas e ética.
            </p>

            <div className="pt-2 text-[11px] text-[#ecdcb9] space-y-1">
              <p className="flex items-center gap-1.5 font-medium">
                <Globe className="w-3.5 h-3.5 text-[#c5a059]" />
                ✔ Emissão pela Saber Consciente Worldwide LLC (EUA)
              </p>
              <p className="flex items-center gap-1.5 font-medium text-[#dae2ff]">
                <Award className="w-3.5 h-3.5 text-[#b2c5ff]" />
                <a 
                  href="https://cel.education/aliados/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#c5a059] transition-colors underline decoration-[#425c9d] hover:decoration-[#c5a059]"
                >
                  “Certificado por @cel.education e avalizado por @fgu_online”
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Cursos Elegíveis
            </h4>
            <ul className="space-y-2 text-xs">
              {ELIGIBLE_COURSES.map((c) => (
                <li key={c.id}>
                  <a href={c.checkoutUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5 text-[#dae2ff]">
                    <span>{c.emoji}</span>
                    <span>{c.title}</span>
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-[#425c9d]/30">
                <a href="#certificado" className="hover:text-[#c5a059] transition-colors text-[#dae2ff]">Certificado Internacional</a>
              </li>
              <li>
                <a href="#luciana" className="hover:text-[#c5a059] transition-colors text-[#dae2ff]">Diretoria & Docentes</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#c5a059] transition-colors text-[#dae2ff]">Dúvidas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Atendimento e WhatsApp */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Atendimento & Contato
            </h4>
            <p className="text-xs text-[#dae2ff] leading-relaxed">
              Fale diretamente com nossa equipe pedagógica para esclarecer dúvidas sobre matrículas, acesso às aulas e emissão de certificados internacionais.
            </p>

            <div className="pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] hover:text-emerald-300 font-semibold text-xs transition-all shadow-md group"
                id="footer-whatsapp-button"
              >
                <div className="w-7 h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow">
                  <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                </div>
                <div>
                  <span className="block text-[10px] text-[#dae2ff] uppercase tracking-wider leading-none">WhatsApp Direto:</span>
                  <span className="text-sm font-bold text-white group-hover:text-[#25D366] transition-colors">+55 (11) 99233-8606</span>
                </div>
              </a>
            </div>

            <div className="pt-2">
              <h5 className="text-[11px] font-bold text-white uppercase tracking-wider mb-2">Reconhecimento & Parcerias:</h5>
              <div className="flex flex-wrap gap-2 text-[10px]">
                <span className="bg-[#001f57] border border-[#425c9d]/40 px-2.5 py-1 rounded text-[#dae2ff]">
                  Florida Global University (FGU)
                </span>
                <a 
                  href="https://cel.education/aliados/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#001f57] hover:bg-[#173574] border border-[#425c9d]/40 hover:border-[#c5a059]/50 px-2.5 py-1 rounded text-[#ecdcb9] hover:text-[#c5a059] transition-all flex items-center gap-1"
                  id="footer-link-cel-education"
                >
                  <span>CEL Education Leadership</span>
                  <span className="text-[9px]">↗</span>
                </a>
                <span className="bg-[#001f57] border border-[#425c9d]/40 px-2.5 py-1 rounded text-[#dae2ff]">
                  Saber Consciente Worldwide LLC (EUA)
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer and Copyright */}
        <div className="pt-8 space-y-4 text-center text-[11px] text-[#dae2ff]/80">
          <p className="max-w-4xl mx-auto leading-relaxed">
            Aviso Legal: Os resultados podem variar de pessoa para pessoa. As formações capacitam o profissional segundo as diretrizes de desenvolvimento pessoal, práticas integrativas e complementares e psicanálise clínica livre.
          </p>
          <p className="text-[#dae2ff]/80">
            © {new Date().getFullYear()} Instituto Saber Consciente Worldwide LLC. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};
