"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { LinhaDeMovimento } from '@/components/ui/LinhaDeMovimento';
import { siteConfig } from '@/config/siteConfig';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-paper">
      {/* Elemento-Assinatura: Linha de Movimento animada no load */}
      <LinhaDeMovimento variant="hero" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Tese & Mensagem Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 md:space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-soft/30 border border-sage-soft/60">
              <span className="w-2 h-2 rounded-full bg-olive animate-pulse" />
              <Eyebrow className="mb-0 text-olive font-semibold">
                Estúdio de Pilates & Reabilitação Fisioterapêutica
              </Eyebrow>
            </div>

            <h1 className="font-display text-hero-display text-ink tracking-tight">
              Devolvemos a sua{' '}
              <span className="relative inline-block text-olive">
                liberdade
              </span>{' '}
              de movimento.
            </h1>

            <p className="font-handwriting text-2xl md:text-3xl text-walnut -mt-2">
              {siteConfig.taglines.longevidade}
            </p>

            <p className="text-lead text-ink/80 max-w-2xl font-normal leading-relaxed">
              {siteConfig.taglines.heroSubtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                isWhatsappLink
                whatsappMessage="Olá! Quero agendar uma aula experimental de Pilates/Reabilitação no CabralMov."
                className="gap-3 group shadow-glow"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar Aula Experimental</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="ghost"
                size="lg"
                href="#metodo"
                className="gap-2 text-ink/80 hover:text-olive"
              >
                <span>Conheça nosso método</span>
              </Button>
            </div>

            {/* Micro diferenciais de autoridade */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-sage-soft/40">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-olive shrink-0" />
                <span className="text-xs font-medium text-ink/80">Atendimento Individualizado</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-olive shrink-0" />
                <span className="text-xs font-medium text-ink/80">Aparelhos Kauffer Clássicos</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <span className="w-2 h-2 rounded-full bg-olive shrink-0" />
                <span className="text-xs font-medium text-ink/80">Avaliação por Fisioterapeuta</span>
              </div>
            </div>
          </motion.div>

          {/* Container de Vídeo em Proporção Panorâmica Sem Cortes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Moldura de acento */}
              <div className="absolute -inset-3 bg-sage-soft/30 rounded-2xl transform rotate-1 scale-[0.99] -z-10" />
              <div className="relative rounded-xl overflow-hidden shadow-warm border border-sage-soft/50 bg-ink aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center">
                {/* Vídeo em Loop no Hero sem cortes */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster="/images/estudio1.jpeg"
                  aria-label="Vídeo de apresentação dos exercícios e aparelhos de Pilates no estúdio CabralMov"
                  className="w-full h-full object-contain bg-ink rounded-xl"
                >
                  <source src="/images/hero-movimento.mp4" type="video/mp4" />
                  Seu navegador não suporta a exibição de vídeos HTML5.
                </video>
                
                {/* Selo sobreposto sutil */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-lg bg-paper/90 backdrop-blur-md border border-sage-soft/40 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-olive">Movimento Intencional</p>
                    <p className="text-xs text-ink/70 font-medium">Estúdio CabralMov · Blumenau</p>
                  </div>
                  <span className="text-xs font-bold text-walnut">@cabralmov</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
