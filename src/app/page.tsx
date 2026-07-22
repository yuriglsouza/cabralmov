import React from 'react';
import { Header } from '@/components/ui/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { ManifestoSection } from '@/components/sections/ManifestoSection';
import { MetodoSection } from '@/components/sections/MetodoSection';
import { ParaQuemSection } from '@/components/sections/ParaQuemSection';
import { DiferenciaisSection } from '@/components/sections/DiferenciaisSection';
import { DepoimentosSection } from '@/components/sections/DepoimentosSection';
import { ProfissionalEstudioSection } from '@/components/sections/ProfissionalEstudioSection';
import { LocalizacaoSection } from '@/components/sections/LocalizacaoSection';
import { CtaFinalSection } from '@/components/sections/CtaFinalSection';
import { Footer } from '@/components/ui/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink selection:bg-olive selection:text-paper">
      {/* Header Fixo Minimalista */}
      <Header />

      {/* Conteúdo Principal em Landing Longa (10 Seções) */}
      <main className="flex-grow">
        {/* 1. HERO */}
        <HeroSection />

        {/* 2. MANIFESTO */}
        <ManifestoSection />

        {/* 3. O MÉTODO / O QUE FAZEMOS */}
        <MetodoSection />

        {/* 4. PARA QUEM É */}
        <ParaQuemSection />

        {/* 5. POR QUE CABRALMOV */}
        <DiferenciaisSection />

        {/* 6. DEPOIMENTOS */}
        <DepoimentosSection />

        {/* 7. O PROFISSIONAL / O ESTÚDIO */}
        <ProfissionalEstudioSection />

        {/* 8. LOCALIZAÇÃO & HORÁRIOS */}
        <LocalizacaoSection />

        {/* 9. CTA FINAL */}
        <CtaFinalSection />
      </main>

      {/* 10. RODAPÉ */}
      <Footer />
    </div>
  );
}
