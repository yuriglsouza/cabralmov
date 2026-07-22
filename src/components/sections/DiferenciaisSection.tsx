"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { siteConfig } from '@/config/siteConfig';

export const DiferenciaisSection: React.FC = () => {
  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-paper relative">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Lado Esquerdo - Título & Manuscrito */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <Eyebrow>Diferenciais Exclusivos</Eyebrow>
            <h2 className="font-display text-section-title text-ink">
              Por que treinar e se reabilitar no CabralMov?
            </h2>
            <p className="text-lead text-ink/80">
              Ambiente planejado para oferecer alta performance biomecânica em um espaço acolhedor, silencioso e estritamente focado no seu progresso.
            </p>

            <div className="pt-4 border-t border-sage-soft/50">
              <p className="font-handwriting text-3xl md:text-4xl text-walnut">
                &quot;{siteConfig.taglines.diferencialHandwriting}&quot;
              </p>
            </div>
          </div>

          {/* Lado Direito - Diferenciais */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {siteConfig.diferenciais.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border border-sage-soft/40 shadow-warm flex flex-col justify-between space-y-4 hover:border-olive/40 transition-colors"
              >
                <div>
                  <span className="text-sm font-bold tracking-widest text-olive block mb-2 font-display">
                    [{item.number}]
                  </span>
                  <h3 className="font-display text-xl font-bold text-ink mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};
