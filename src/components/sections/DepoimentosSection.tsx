"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Card } from '@/components/ui/Card';
import { siteConfig } from '@/config/siteConfig';

export const DepoimentosSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardWidth = 320; // approximate card width + gap
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, siteConfig.depoimentos.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState);
    updateScrollState();
    return () => el.removeEventListener('scroll', updateScrollState);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.querySelectorAll('.testimonial-card');
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }
  };

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-sage-soft/15 border-y border-sage-soft/30 overflow-hidden">
      <Container size="wide">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-sage-soft/50 shadow-sm">
              <div className="flex gap-0.5 text-olive">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-olive" />
                ))}
              </div>
              <span className="text-xs font-bold text-ink">5,0 ★★★★★</span>
              <span className="text-xs text-ink/60">· 18 avaliações no Google</span>
            </div>

            <Eyebrow>Histórias Reais de Alunos</Eyebrow>
            <h2 className="font-display text-section-title text-ink">
              A transformação na voz de quem vivencia o CabralMov.
            </h2>
          </div>

          {/* Botões de Navegação do Carrossel */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-200 select-none ${
                canScrollLeft
                  ? 'border-olive text-olive bg-white hover:bg-olive hover:text-paper shadow-warm active:scale-95'
                  : 'border-sage-soft/40 text-sage-soft bg-paper/50 cursor-not-allowed'
              }`}
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-200 select-none ${
                canScrollRight
                  ? 'border-olive text-olive bg-white hover:bg-olive hover:text-paper shadow-warm active:scale-95'
                  : 'border-sage-soft/40 text-sage-soft bg-paper/50 cursor-not-allowed'
              }`}
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carrossel Deslizável (Touch / Buttons) */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-4 px-1 -mx-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {siteConfig.depoimentos.map((depoimento, index) => (
            <motion.div
              key={depoimento.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="testimonial-card snap-start shrink-0 w-[290px] sm:w-[340px] md:w-[380px]"
            >
              <Card variant="white" className="h-full flex flex-col justify-between p-7 space-y-6 border border-sage-soft/40 hover:border-olive/40 shadow-warm">
                <div className="space-y-4">
                  {/* Rating & Quote */}
                  <div className="flex items-center justify-between text-olive">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-olive text-olive" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 opacity-30 text-olive" />
                  </div>

                  <p className="text-sm text-ink/85 italic leading-relaxed font-normal">
                    &quot;{depoimento.content}&quot;
                  </p>
                </div>

                <div className="pt-4 border-t border-sage-soft/30 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-sage-soft/40 border border-sage-soft flex items-center justify-center font-bold text-olive text-sm font-display shrink-0">
                    {depoimento.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-ink">
                      {depoimento.name}
                    </h3>
                    <p className="text-xs font-medium text-olive">
                      {depoimento.role}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Indicadores do Carrossel (Dots) */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {siteConfig.depoimentos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-8 bg-olive' : 'w-2 bg-sage-soft/60 hover:bg-sage'
              }`}
              aria-label={`Ir para o depoimento ${idx + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
