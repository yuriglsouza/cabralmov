import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-paper text-ink p-8 text-center">
      <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-ink">
        Página não encontrada
      </h1>
      <p className="font-sans text-base text-walnut mb-8 max-w-md">
        Desculpe, a página que você está procurando não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-olive text-paper font-medium hover:bg-olive/90 transition-colors"
      >
        Voltar para a Página Inicial
      </Link>
    </div>
  );
}
