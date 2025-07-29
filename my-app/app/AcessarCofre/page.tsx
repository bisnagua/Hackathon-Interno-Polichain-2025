'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

export default function ConferirCofrePage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-pink-700 mb-6 text-center">
          CRIAR A PAGINA PARA CONSULTAR UMA CARTEIRA
        </h1>
        <Button texto="Voltar" aoClicar={handleBack} cor="bg-white text-pink-600" />
      </div>
    </main>
  );
}