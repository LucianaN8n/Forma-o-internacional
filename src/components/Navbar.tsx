import React, { useState, useEffect } from 'react';
import { INSTITUTION_INFO } from '../data/coursesData';
import { Award, Sparkles, Menu, X, ArrowRight, Globe2, GraduationCap, MessageCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = "https://wa.me/5511992338606?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20forma%C3%A7%C3%B5es%20com%20certifica%C3%A7%C3%A3o%20internacional.";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner Announcement */}
      <div className="bg-[#173574] text-[#ecdcb9] font-medium text-xs md:text-sm py-2 px-4 text-center border-b border-[#c5a059]/30 shadow-inner flex items-center justify-center gap-2">
        <Globe2 className="w-4 h-4 text-[#c5a059] animate-spin" style={{ animationDuration: '10s' }} />
        <span>
          <strong>CURSOS 100% ONLINE (EUA):</strong> Emissão pela Saber Consciente Worldwide LLC • Avalizado por @fgu_online & @cel.education
        </span>
        <span className="hidden sm:inline-block bg-[#001f57] text-[#ecdcb9] text-[11px] px-2.5 py-0.5 rounded border border-[#c5a059]/40 font-bold uppercase tracking-wider ml-1">
          Inscrições Abertas
        </span>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-[#001f57]/95 backdrop-blur-md border-b border-[#173574] py-3 shadow-xl' 
          : 'bg-[#001f57]/85 backdrop-blur-sm py-4 border-b border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group" id="navbar-brand-logo">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#c5a059] via-[#ecdcb9] to-[#c5a059] flex items-center justify-center p-0.5 shadow-md shadow-black/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#001f57] rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#c5a059]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-base sm:text-lg font-bold tracking-wider text-white uppercase">
                Instituto <span className="gold-gradient-text">Saber Consciente</span>
              </span>
              <span className="text-[10px] text-[#dae2ff] font-medium tracking-widest uppercase">
                Worldwide LLC • Certificação Internacional
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-100">
            <a href="#cursos-elegiveis" className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5" id="nav-link-cursos">
              <GraduationCap className="w-4 h-4 text-[#c5a059]" />
              Cursos Elegíveis
            </a>
            <a href="#certificado" className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5" id="nav-link-certificado">
              <Award className="w-4 h-4 text-[#c5a059]" />
              Certificado Internacional
            </a>
            <a href="#luciana" className="hover:text-[#c5a059] transition-colors" id="nav-link-diretora">
              Diretoria & Docentes
            </a>
            <a href="#depoimentos" className="hover:text-[#c5a059] transition-colors" id="nav-link-depoimentos">
              Depoimentos
            </a>
            <a href="#faq" className="hover:text-[#c5a059] transition-colors" id="nav-link-faq">
              Dúvidas
            </a>
          </div>

          {/* Action CTA Button & WhatsApp */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp"
              title="Falar no WhatsApp (11) 99233-8606"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold text-xs transition-all shadow-sm"
              id="navbar-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              <span className="hidden xl:inline">(11) 99233-8606</span>
              <span className="xl:hidden">WhatsApp</span>
            </a>

            <a
              href="#cursos-elegiveis"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#c5a059] hover:bg-[#b38c3c] text-[#001438] font-bold text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              id="navbar-cta-button"
            >
              <span>Ver Cursos & Inscrição</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#c5a059] focus:outline-none"
            aria-label="Abrir menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#001f57] border-b border-[#173574] px-6 py-5 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top text-white">
            <a 
              href="#cursos-elegiveis" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#c5a059] font-medium py-1 flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4 text-[#c5a059]" />
              🎓 Cursos com Certificação Internacional
            </a>
            <a 
              href="#certificado" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#c5a059] font-medium py-1 flex items-center gap-2"
            >
              <Award className="w-4 h-4 text-[#c5a059]" />
              Certificado Internacional
            </a>
            <a 
              href="#luciana" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#c5a059] font-medium py-1"
            >
              Diretoria & Docentes
            </a>
            <a 
              href="#depoimentos" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#c5a059] font-medium py-1"
            >
              Depoimentos de Alunos
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#c5a059] font-medium py-1"
            >
              Perguntas Frequentes
            </a>

            <div className="pt-2 border-t border-[#173574] flex flex-col gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#25d366] text-white font-bold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                <span>WhatsApp: (11) 99233-8606</span>
              </a>

              <a
                href="#cursos-elegiveis"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#c5a059] text-[#001438] font-bold text-base shadow-md"
              >
                <span>Ver Cursos Disponíveis</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
