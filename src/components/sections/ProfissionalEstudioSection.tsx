"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, HeartHandshake } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { siteConfig } from '@/config/siteConfig';

export const ProfissionalEstudioSection: React.FC = () => {
  return (
    <section id="estudio" className="py-24 md:py-32 bg-paper">
      <Container size="wide" className="space-y-24">
        
        {/* Bloco 1: O Profissional Responsável */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Foto do Profissional (4:5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-xl overflow-hidden shadow-warm border border-sage-soft/40 aspect-[4/5] bg-sage-soft">
              {/* Slot de Imagem: profissional.jpg (4:5) */}
              <Image
                src="/images/profissional.svg"
                alt={`Fisioterapeuta responsável ${siteConfig.nomeProfissional}`}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-paper/90 backdrop-blur-md border border-sage-soft/40">
                <p className="text-xs font-bold text-ink">{siteConfig.nomeProfissional}</p>
                <p className="text-[0.7rem] font-semibold text-olive">{siteConfig.crefitoOuFormacao}</p>
              </div>
            </div>
          </motion.div>

          {/* Bio & Formação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <Eyebrow>Responsabilidade Técnica</Eyebrow>
            <h2 className="font-display text-section-title text-ink">
              Ciência do movimento à serviço da sua saúde.
            </h2>

            <div className="p-4 rounded-lg bg-white border-l-4 border-olive border-sage-soft/30 shadow-sm">
              <p className="font-semibold text-ink text-base">
                {siteConfig.nomeProfissional}
              </p>
              <p className="text-xs text-olive font-medium">
                {siteConfig.crefitoOuFormacao}
              </p>
            </div>

            <p className="text-lead text-ink/80 leading-relaxed">
              Especialista em fisioterapia neuro-musculoesquelética, biomecânica e reabilitação postural. Nosso compromisso é identificar a causa raiz do seu desconforto motor, aplicando intervenções precisas que promovem alívio duradouro e ganho real de autonomia física.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-olive shrink-0" />
                <span className="text-sm font-medium text-ink/90">Avaliação postural minuciosa antes da primeira sessão</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-olive shrink-0" />
                <span className="text-sm font-medium text-ink/90">Metodologia pautada na literatura científica recente</span>
              </div>
              <div className="flex items-center gap-3">
                <HeartHandshake className="w-5 h-5 text-olive shrink-0" />
                <span className="text-sm font-medium text-ink/90">Acompanhamento contínuo da evolução da sua mobilidade</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bloco 2: O Estúdio Panorâmico (16:9) */}
        <div className="space-y-8 pt-12 border-t border-sage-soft/40">
          <div className="max-w-3xl space-y-3">
            <Eyebrow>O Espaço CabralMov</Eyebrow>
            <h3 className="font-display text-3xl font-bold text-ink">
              Estrutura idealizada para o seu máximo conforto.
            </h3>
            <p className="text-sm text-ink/80 leading-relaxed">
              Equipado com aparelhos clássicos Kauffer (Reformer, Cadillac, Wall Chair, Step Barrel). Ambiente climatizado, silencioso e com luz natural para uma experiência imersiva de autocuidado.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-warm border border-sage-soft/40 aspect-[16/9] bg-sage-soft">
            {/* Slot de Imagem: estudio.jpg (16:9) */}
            <Image
              src="/images/estudio.svg"
              alt="Visão geral do espaço CabralMov com equipamentos clássicos Kauffer"
              fill
              className="object-cover hover:scale-102 transition-transform duration-700"
            />
          </div>
        </div>

      </Container>
    </section>
  );
};
