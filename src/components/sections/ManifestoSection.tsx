"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { siteConfig } from '@/config/siteConfig';

export const ManifestoSection: React.FC = () => {
  return (
    <section className="bg-ink text-paper py-24 md:py-32 relative overflow-hidden">
      {/* Filete sutil de madeira walnut no topo */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-walnut opacity-80" />

      <Container size="narrow" className="relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <Eyebrow dark>Manifesto CabralMov</Eyebrow>

          <blockquote className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-paper leading-[1.15]">
            &quot;{siteConfig.taglines.manifestoQuote}&quot;
          </blockquote>

          <div className="w-16 h-0.5 bg-olive mx-auto my-6" />

          <p className="text-lead text-sage-soft/90 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.taglines.manifestoSub} O Pilates e a Fisioterapia no CabralMov não tratam apenas sintomas. Nós reeducamos seu padrão motor para que você viva com amplitude, controle e zero limitações.
          </p>

          <p className="font-handwriting text-3xl text-sage pt-4">
            Seu corpo aprende.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};
