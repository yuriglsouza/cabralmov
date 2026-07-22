"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';
import { Button } from './Button';
import { Container } from './Container';
import { siteConfig } from '@/config/siteConfig';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Método', href: '#metodo' },
    { name: 'Para Quem É', href: '#para-quem' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'O Estúdio', href: '#estudio' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Localização', href: '#localizacao' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-paper/90 backdrop-blur-xl py-3 shadow-warm border-b border-sage-soft/40'
          : 'bg-transparent py-5'
      }`}
    >
      <Container size="wide" className="flex items-center justify-between">
        
        {/* Brand Logo Boutique */}
        <Link href="/" className="group flex items-center gap-3 select-none">
          <div className="w-9 h-9 rounded-full bg-olive flex items-center justify-center text-paper font-display font-extrabold text-lg shadow-sm group-hover:scale-105 transition-transform">
            C
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl font-bold tracking-tight text-ink group-hover:text-olive transition-colors">
              CabralMov
            </span>
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-olive -mt-1">
              Pilates & Saúde
            </span>
          </div>
        </Link>

        {/* Floating Glassmorphic Pill Navbar (Design Boutique) */}
        <nav
          onMouseLeave={() => setHoveredIndex(null)}
          className="hidden lg:inline-flex items-center gap-1 bg-white/80 backdrop-blur-md border border-sage-soft/60 shadow-warm px-3 py-1.5 rounded-full relative"
        >
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(idx)}
              className="relative px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ink/85 hover:text-ink transition-colors z-10"
            >
              {hoveredIndex === idx && (
                <motion.div
                  layoutId="hover-pill"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  className="absolute inset-0 bg-sage-soft/40 rounded-full -z-10"
                />
              )}
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Button
            variant="primary"
            size="sm"
            isWhatsappLink
            whatsappMessage="Olá! Gostaria de agendar uma aula experimental de Pilates/Reabilitação no CabralMov."
            className="hidden sm:inline-flex gap-2 shadow-glow hover:shadow-warm-hover"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Agendar Aula</span>
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full text-ink bg-white/80 border border-sage-soft/60 hover:bg-sage-soft/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-olive"
            aria-label="Alternar Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-paper/98 backdrop-blur-2xl border-t border-sage-soft/40 overflow-hidden shadow-2xl"
          >
            <Container className="py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-ink hover:text-olive transition-colors py-2.5 border-b border-sage-soft/20 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <Sparkles className="w-4 h-4 text-olive opacity-40" />
                </a>
              ))}
              <div className="pt-3">
                <Button
                  variant="primary"
                  size="md"
                  isWhatsappLink
                  whatsappMessage="Olá! Gostaria de agendar uma aula experimental no CabralMov."
                  className="w-full gap-2 justify-center"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Aula Experimental</span>
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
