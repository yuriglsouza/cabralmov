"use client";

import React from 'react';
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/siteConfig';

export const LocalizacaoSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 md:py-32 bg-paper/70 border-t border-sage-soft/30">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Informações de Endereço & Horários */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <Eyebrow>Localização & Horários</Eyebrow>
              <h2 className="font-display text-section-title text-ink">
                Fácil acesso no coração da cidade.
              </h2>
              <p className="text-lead text-ink/80">
                Estamos situados em ambiente privativo e de fácil estacionamento para garantir total tranquilidade no seu momento de saúde.
              </p>
            </div>

            {/* Cards de Detalhes */}
            <div className="space-y-4">
              {/* Endereço */}
              <Card variant="white" className="p-6 flex items-start gap-4 border border-sage-soft/40">
                <div className="w-10 h-10 rounded-full bg-sage-soft/30 flex items-center justify-center text-olive shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-ink mb-1">
                    Endereço
                  </h3>
                  <p className="text-sm text-ink/80 leading-relaxed font-medium">
                    {siteConfig.enderecoCompleto}
                  </p>
                </div>
              </Card>

              {/* Horários */}
              <Card variant="white" className="p-6 flex items-start gap-4 border border-sage-soft/40">
                <div className="w-10 h-10 rounded-full bg-sage-soft/30 flex items-center justify-center text-olive shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-ink mb-1">
                    Horários de Atendimento
                  </h3>
                  <p className="text-sm text-ink/80 leading-relaxed font-medium">
                    {siteConfig.horariosAtendimento}
                  </p>
                </div>
              </Card>

              {/* WhatsApp */}
              <Card variant="white" className="p-6 flex items-start gap-4 border border-sage-soft/40">
                <div className="w-10 h-10 rounded-full bg-sage-soft/30 flex items-center justify-center text-olive shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-ink mb-1">
                    Atendimento Direto
                  </h3>
                  <p className="text-sm text-ink/80 leading-relaxed font-medium">
                    {siteConfig.whatsappNumber}
                  </p>
                </div>
              </Card>
            </div>

            <Button
              variant="primary"
              size="lg"
              isWhatsappLink
              whatsappMessage="Olá! Gostaria de agendar um horário para conhecer o estúdio CabralMov."
              className="gap-2.5 w-full justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar no WhatsApp Direct</span>
            </Button>
          </div>

          {/* Iframe Mapa Google Maps Embed */}
          <div className="lg:col-span-7 min-h-[380px] lg:min-h-full rounded-2xl overflow-hidden shadow-warm border border-sage-soft/40 relative">
            <iframe
              src={siteConfig.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Estúdio CabralMov no Google Maps"
              className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
            />
          </div>

        </div>
      </Container>
    </section>
  );
};
