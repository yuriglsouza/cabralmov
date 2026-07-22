"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { LinhaDeMovimento } from '@/components/ui/LinhaDeMovimento';
import { siteConfig } from '@/config/siteConfig';

export const MetodoSection: React.FC = () => {
  return (
    <section id="metodo" className="py-24 md:py-32 bg-paper relative">
      <Container size="wide">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-16 space-y-4">
          <Eyebrow>O Que Fazemos</Eyebrow>
          <h2 className="font-display text-section-title text-ink">
            Três pilares integrados para o seu bem-estar duradouro.
          </h2>
          <p className="text-lead text-ink/80">
            Combinamos a precisão do Pilates clássico em aparelhos Kauffer com a força do funcional e a inteligência da reabilitação fisioterapêutica.
          </p>
        </div>

        {/* Grid de Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.pilares.map((pilar, index) => {
            const imageMap: Record<string, string> = {
              pilates: '/images/metodo-pilates1.jpeg',
              funcional: '/images/metodo-funcional1.jpeg',
              reabilitacao: '/images/metodo-reabilitacao1.jpeg',
            };

            return (
              <motion.div
                key={pilar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card variant="white" className="h-full flex flex-col justify-between group hover:-translate-y-1 transition-transform">
                  <div className="space-y-6">
                    {/* Imagem do Pilar (proporção 4:5) */}
                    <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-sage-soft/30 border border-sage-soft/40">
                      <Image
                        src={imageMap[pilar.id] || '/images/metodo-pilates1.jpeg'}
                        alt={`Prática de ${pilar.title} no estúdio CabralMov`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 bg-paper/90 backdrop-blur-md rounded-full border border-sage-soft/40 text-[0.7rem] font-bold text-olive uppercase">
                        Pilar 0{index + 1}
                      </div>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-ink group-hover:text-olive transition-colors">
                      {pilar.title}
                    </h3>

                    <p className="text-sm text-ink/75 leading-relaxed font-normal">
                      {pilar.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-sage-soft/30 mt-6">
                    <Button
                      variant="ghost"
                      size="sm"
                      isWhatsappLink
                      whatsappMessage={`Olá! Gostaria de saber mais sobre o pilar de ${pilar.title} no CabralMov.`}
                      className="px-0 text-olive font-semibold hover:bg-transparent"
                    >
                      <span>Saber mais sobre {pilar.title.split(' ')[0]} →</span>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Divisor suave com Linha de Movimento */}
        <LinhaDeMovimento variant="divider" className="mt-16" />
      </Container>
    </section>
  );
};
