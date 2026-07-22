"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Card } from '@/components/ui/Card';
import { siteConfig } from '@/config/siteConfig';

export const DepoimentosSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-sage-soft/15 border-y border-sage-soft/30">
      <Container size="wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Eyebrow>Histórias de Alunos</Eyebrow>
          <h2 className="font-display text-section-title text-ink">
            A transformação na voz de quem vivencia o CabralMov.
          </h2>
          <p className="text-sm text-ink/60 font-medium">
            (Cards placeholder preparados para os depoimentos reais dos alunos)
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.depoimentos.map((depoimento, index) => (
            <motion.div
              key={depoimento.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="white" className="h-full flex flex-col justify-between p-6 space-y-6">
                <div className="space-y-4">
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between text-olive">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-olive text-olive" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 opacity-40" />
                  </div>

                  <p className="text-sm text-ink/80 italic leading-relaxed">
                    &quot;{depoimento.content}&quot;
                  </p>
                </div>

                <div className="pt-4 border-t border-sage-soft/30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sage-soft/50 flex items-center justify-center font-bold text-olive text-sm font-display shrink-0">
                    {depoimento.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-ink">
                      {depoimento.name}
                    </h4>
                    <p className="text-xs text-ink/60">
                      {depoimento.role}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
