"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldAlert, HeartPulse, Baby, Waves, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Card } from '@/components/ui/Card';
import { siteConfig } from '@/config/siteConfig';

export const ParaQuemSection: React.FC = () => {
  const icons = [
    Activity,     // Dor crônica
    ShieldAlert,  // Lesão
    HeartPulse,   // Longevidade
    Baby,         // Gestantes
    Waves,        // Lipedema
    Sparkles,     // Performance
  ];

  return (
    <section id="para-quem" className="py-24 md:py-32 bg-paper/60 border-y border-sage-soft/30">
      <Container size="wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Eyebrow>Público & Objetivos</Eyebrow>
          <h2 className="font-display text-section-title text-ink">
            Para quem é o estúdio CabralMov?
          </h2>
          <p className="text-lead text-ink/80">
            Não acreditamos em fórmulas prontas. Nosso acompanhamento atende desde quem busca sair da dor crônica até quem deseja envelhecer com força e liberdade.
          </p>
        </div>

        {/* Grid 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.publicoAlvo.map((item, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="white" className="h-full space-y-4 border border-sage-soft/40 hover:border-olive/50 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-sage-soft/30 flex items-center justify-center text-olive mb-2">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink/75 leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
