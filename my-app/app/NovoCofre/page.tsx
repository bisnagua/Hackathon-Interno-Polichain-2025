'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

export default function CreateVaultPage() {
  const [vaultName, setVaultName] = useState("");
  const [guests, setGuests] = useState<string[]>([""]);
  const router = useRouter();

  const handleGuestChange = (index: number, value: string) => {
    const updated = [...guests];
    updated[index] = value;
    setGuests(updated);
  };

  const addGuestField = () => {
    setGuests([...guests, ""]);
  };

  const handleCreate = () => {
    console.log("Vault name:", vaultName);
    console.log("Guests:", guests);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-pink-700 mb-6 text-center">Criar um novo Cofrinho</h1>

        <label className="block mb-4">
          <span className="text-pink-700 font-semibold">Nome do Cofrinho</span>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-pink-300 rounded"
            value={vaultName}
            onChange={(e) => setVaultName(e.target.value)}
            placeholder="ex: viagem ano novo"
          />
        </label>

        <div className="mb-4">
          <span className="text-pink-700 font-semibold">Convidar pessoas</span>
          {guests.map((guest, index) => (
            <input
              key={index}
              type="text"
              value={guest}
              onChange={(e) => handleGuestChange(index, e.target.value)}
              placeholder={`Endereço da pessoa ${index + 1}`}
              className="w-full mt-2 p-2 border border-pink-300 rounded"
            />
          ))}
          <button
            type="button"
            onClick={addGuestField}
            className="mt-3 text-sm text-pink-600 hover:underline"
          >
            + Adicionar outra pessoa
          </button>
        </div>

        <div className="flex flex-col gap-4 mt-6">
          <Button texto="Criar" aoClicar={handleCreate} cor="bg-pink-500 text-white" />
          <Button texto="Voltar" aoClicar={handleBack} cor="bg-white text-pink-600" />
        </div>
      </div>
    </main>
  );
}
