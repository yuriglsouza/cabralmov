"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';
import { Button } from './Button';
import { Container } from './Container';
import { siteConfig } from '@/config/siteConfig';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          ? 'bg-paper/90 backdrop-blur-md py-3 shadow-warm border-b border-sage-soft/30'
          : 'bg-transparent py-5'
      }`}
    >
      <Container size="wide" className="flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="flex flex-col">
            <span className="font-display text-2xl md:text-3xl font-bold tracking-tight text-ink group-hover:text-olive transition-colors duration-300">
              CabralMov
            </span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-olive -mt-1">
              Pilates & Saúde
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-ink/80 hover:text-olive transition-colors duration-200"
            >
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
            className="hidden sm:inline-flex gap-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Agendar Aula</span>
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full text-ink hover:bg-sage-soft/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-olive"
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
            className="lg:hidden bg-paper/95 backdrop-blur-lg border-t border-sage-soft/30 overflow-hidden shadow-2xl"
          >
            <Container className="py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-ink hover:text-olive transition-colors py-2 border-b border-sage-soft/20"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3">
                <Button
                  variant="primary"
                  size="md"
                  isWhatsappLink
                  whatsappMessage="Olá! Gostaria de agendar uma aula experimental no CabralMov."
                  className="w-full gap-2"
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
