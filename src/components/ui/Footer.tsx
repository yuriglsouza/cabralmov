import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';
import { Container } from './Container';
import { siteConfig } from '@/config/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-paper pt-16 pb-12 border-t border-white/10">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-display text-3xl font-bold text-paper tracking-tight">
                {siteConfig.name}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-soft mt-0.5">
                {siteConfig.subtitle}
              </span>
            </div>
            <p className="text-sm text-sage-soft/80 leading-relaxed">
              &quot;{siteConfig.taglines.heroTitle}&quot;
            </p>
            <p className="font-handwriting text-xl text-sage">
              {siteConfig.taglines.longevidade}
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-sage-soft">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-paper/80">
              <li>
                <a href="#metodo" className="hover:text-sage transition-colors">
                  O Método
                </a>
              </li>
              <li>
                <a href="#para-quem" className="hover:text-sage transition-colors">
                  Para Quem É
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-sage transition-colors">
                  Por que o CabralMov
                </a>
              </li>
              <li>
                <a href="#estudio" className="hover:text-sage transition-colors">
                  O Estúdio & Profissional
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-sage transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-sage transition-colors">
                  Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-sage-soft">
              Atendimento & Contato
            </h4>
            <ul className="space-y-3 text-sm text-paper/80">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                <a
                  href={siteConfig.getWhatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sage transition-colors"
                >
                  {siteConfig.whatsappNumber}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sage transition-colors"
                >
                  {siteConfig.handle}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-sage-soft/90">
                  {siteConfig.horariosAtendimento}
                </span>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-sage-soft">
              Endereço
            </h4>
            <div className="flex items-start gap-3 text-sm text-paper/80">
              <MapPin className="w-4 h-4 text-sage shrink-0 mt-0.5" />
              <span className="text-xs leading-relaxed text-sage-soft/90">
                {siteConfig.enderecoCompleto}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-sage-soft/60 gap-4">
          <p>© {new Date().getFullYear()} CabralMov · Pilates & Saúde. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sage transition-colors"
            >
              Instagram {siteConfig.handle}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
