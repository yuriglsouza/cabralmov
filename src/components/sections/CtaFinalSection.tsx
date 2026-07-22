"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { LinhaDeMovimento } from '@/components/ui/LinhaDeMovimento';
import { siteConfig } from '@/config/siteConfig';

export const CtaFinalSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-ink text-paper relative overflow-hidden">
      {/* Moldura de fundo com a Linha de Movimento */}
      <LinhaDeMovimento variant="cta" color="#9AA47D" />

      <Container size="narrow" className="relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8 max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-sage px-4 py-1.5 rounded-full border border-sage/30 bg-white/5">
            Sua saúde não pode esperar
          </span>

          <h2 className="font-display text-section-title text-paper leading-tight">
            {siteConfig.taglines.ctaFinalQuestion}
          </h2>

          <p className="text-lead text-sage-soft/90 max-w-xl mx-auto font-normal">
            Agende uma avaliação inicial e sinta a diferença de um treino desenhado exclusivamente para a biologia do seu corpo.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              isWhatsappLink
              whatsappMessage="Olá! Quero agendar minha aula experimental no CabralMov agora."
              className="gap-3 group px-10 py-5 text-base font-semibold shadow-glow"
            >
              <Calendar className="w-5 h-5" />
              <span>Agendar Aula Experimental</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="text-xs text-sage-soft/60 pt-4">
            Atendimento com hora marcada · Turmas reduzidas · Aparelhos Kauffer
          </p>
        </motion.div>
      </Container>
    </section>
  );
};
