'use client';


import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import { deployCofrinhoFrontend } from "../utils/deployCofrinhoFrontend";
import { parseUnits } from "viem";

export default function CreateVaultPage() {
  const [vaultName, setVaultName] = useState("");
  const [guests, setGuests] = useState<string[]>([""]);
  const { address } = useAccount();
  const router = useRouter();
  const [goalEth, setGoalEth] = useState("");
  const [days, setDays] = useState("");
  const [hierarchyMode, setHierarchyMode] = useState("1");

  const handleGuestChange = (index: number, value: string) => {
    const updated = [...guests];
    updated[index] = value;
    setGuests(updated);
  };


  const addGuestField = () => {
    setGuests([...guests, ""]);
  };


  const handleCreate = async () => {
    if (!vaultName.trim()) {
      alert("Por favor, informe o nome do cofrinho.");
      return;
    }


    const metaNumber = Number(goalEth);
    const prazoNumber = Number(days);
    const hasValidGuest = guests.some(guest => guest.trim() !== "");


    if (isNaN(metaNumber) || metaNumber <= 0) {
      alert("A meta deve ser um número maior que zero.");
      return;
    }


    if (isNaN(prazoNumber) || prazoNumber <= 0) {
      alert("O prazo deve ser um número maior que zero.");
      return;
    }


    if (!hasValidGuest) {
      alert("Você precisa adicionar pelo menos uma pessoa.");
      return;
    }


    try {

      const cleanedCuradores = guests
        .filter(g => g.trim() !== "")
        .map(g => g.trim().toLowerCase());

      const metaBigInt = parseUnits(goalEth || "0", 18);

      const addressDeployed = await deployCofrinhoFrontend({
        nome: vaultName,
        meta: metaBigInt,
        dias: prazoNumber,
        modo: Number(hierarchyMode),
        curadores: cleanedCuradores,
      });


      alert(`Cofrinho deployado com sucesso! Endereço: ${addressDeployed}`);


      const res = await fetch("/api/cofrinhos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: vaultName,
          address: addressDeployed,
          owner: address,
          curadores: cleanedCuradores,
        }),
      });


      const data = await res.json();


      if (res.ok) {
        router.push(`/AcessarCofre/${addressDeployed}`);
      } else {
        alert(`Erro ao salvar no banco: ${data.error}`);
      }
    } catch (error: any) {
      alert("Erro ao criar cofrinho: " + error.message);
    }
  };


  const handleBack = () => {
    router.back();
  };


  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-stretch gap-1 w-full max-w-md">
        <h1 className="text-3xl font-bold text-pink-700 mb-6 text-center">
          Criar um novo cofrinho
        </h1>


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


        <label className="block mb-4">
          <span className="text-pink-700 font-semibold">Meta</span>
          <div className="flex gap-2">
            <input
              type="number"
              min="0"
              className="flex-grow mt-1 p-2 border border-pink-300 rounded"
              value={goalEth}
              onChange={(e) => setGoalEth(e.target.value)}
              placeholder="ex: 5"
            />
          </div>
        </label>


        <label className="block mb-4">
          <span className="text-pink-700 font-semibold">Prazo (dias)</span>
          <input
            type="number"
            min="0"
            className="w-full mt-1 p-2 border border-pink-300 rounded"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            placeholder="ex: 30"
          />
        </label>


        <label className="block mb-4">
          <span className="text-pink-700 font-semibold">Modo de Hierarquia</span>
          <select
            className="w-full mt-1 p-2 border border-pink-300 rounded"
            value={hierarchyMode}
            onChange={(e) => setHierarchyMode(e.target.value)}
          >
            <option value="0">Apenas o dono do cofrinho decide</option>
            <option value="1">Múltiplas pessoas votam</option>
            <option value="2">Todos votam</option>
          </select>
        </label>


        <div className="block mb-4">
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