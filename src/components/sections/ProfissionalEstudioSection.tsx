"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, ExternalLink, GraduationCap, HeartPulse } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { siteConfig } from '@/config/siteConfig';

export const ProfissionalEstudioSection: React.FC = () => {
  return (
    <section id="estudio" className="py-24 md:py-32 bg-paper">
      <Container size="wide" className="space-y-24">
        
        {/* Bloco 1: O Profissional Responsável (Com dados do Lattes) */}
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
              {/* Foto Real do Profissional (4:5) */}
              <Image
                src="/images/profissional1.jpeg"
                alt={`Fisioterapeuta responsável ${siteConfig.nomeProfissional}`}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-paper/95 backdrop-blur-md border border-sage-soft/50 shadow-md">
                <p className="text-sm font-bold text-ink">{siteConfig.nomeProfissional}</p>
                <p className="text-xs font-semibold text-olive">{siteConfig.crefitoOuFormacao}</p>
                <a
                  href={siteConfig.lattesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-walnut hover:underline"
                >
                  <span>Ver Currículo Lattes CNPq</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bio & Formação Acadêmica Lattes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <Eyebrow>Responsabilidade Técnica & Rigor Científico</Eyebrow>
            <h2 className="font-display text-section-title text-ink">
              Ciência do movimento à serviço do seu bem-estar.
            </h2>

            <div className="p-5 rounded-xl bg-white border-l-4 border-olive border-sage-soft/30 shadow-warm space-y-2">
              <div className="flex items-center justify-between">
                <p className="font-bold text-ink text-lg font-display">
                  {siteConfig.nomeProfissional}
                </p>
                <span className="px-2.5 py-0.5 rounded-full bg-sage-soft/30 text-olive text-xs font-bold">
                  {siteConfig.crefitoOuFormacao}
                </span>
              </div>
              <p className="text-xs text-ink/70">
                Graduado pela Faculdade Estácio de Alagoas (Estácio FAL) com especialização em Reabilitação Cardiopulmonar (Instituto HIB).
              </p>
            </div>

            <p className="text-lead text-ink/80 leading-relaxed">
              Com formação continuada focada em **Prática Baseada em Evidências (PBE)**, **Formação Completa em Pilates VOLL (120h)** e **Fisiologia Clínica do Exercício (CCR)**, o Dr. Mateus Cabral aplica protocolos científicos para dor crônica, lesões articulares e reeducação motora.
            </p>

            {/* Lista de Certificações Lattes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {siteConfig.qualificacoes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-white/70 border border-sage-soft/30">
                  <CheckCircle2 className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-ink/90 leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href={siteConfig.lattesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-soft/30 hover:bg-sage-soft/50 text-olive text-xs font-bold transition-colors border border-sage-soft/60"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Currículo Lattes Oficial CNPq</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bloco 2: O Estúdio Panorâmico (16:9) */}
        <div className="space-y-8 pt-12 border-t border-sage-soft/40">
          <div className="max-w-3xl space-y-3">
            <Eyebrow>O Espaço CabralMov</Eyebrow>
            <h3 className="font-display text-3xl font-bold text-ink">
              Estrutura idealizada para o seu máximo conforto no Centro de Blumenau.
            </h3>
            <p className="text-sm text-ink/80 leading-relaxed">
              Equipado com aparelhos clássicos Kauffer (Reformer, Cadillac, Wall Chair, Step Barrel). Ambiente climatizado, silencioso e com luz natural para uma experiência imersiva de saúde e longevidade.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-warm border border-sage-soft/40 aspect-[16/9] bg-sage-soft">
            {/* Foto Real do Estúdio (16:9) */}
            <Image
              src="/images/estudio1.jpeg"
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
