'use client';

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { usePublicClient, useContractRead } from "wagmi";
import { formatEther } from "viem";
import Button from "@/components/Button";
import CofrinhoABI from "@/artifacts/contracts/Cofrinho.sol/Cofrinho.json";

export default function ConferirCofrePage() {
  const { address } = useParams<{ address: string }>();
  const router = useRouter();
  const publicClient = usePublicClient();

  const [saldo, setSaldo] = useState<string | null>(null);

  // Buscar o owner do contrato
  const { data: dono, isLoading: loadingDono } = useContractRead({
    address: address as `0x${string}`,
    abi: CofrinhoABI.abi,
    functionName: 'owner',
  });

  // Buscar o nome do cofre
  const { data: nome, isLoading: loadingNome } = useContractRead({
    address: address as `0x${string}`,
    abi: CofrinhoABI.abi,
    functionName: 'nome',
  });

  // Buscar saldo do contrato (ETH)
  useEffect(() => {
    const fetchBalance = async () => {
      if (!address || !publicClient) return;
      const balance = await publicClient.getBalance({ address: address as `0x${string}` });
      setSaldo(formatEther(balance));
    };
    fetchBalance();
  }, [address, publicClient]);

  const handleBack = () => {
    router.back();
  };

  const loading = loadingDono || loadingNome || saldo === null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-8 w-full max-w-md">
        {loading ? (
          <p>Carregando cofre...</p>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-pink-700 text-center">
              {nome as string}
            </h1>
            <p><strong>Endereço:</strong> {address}</p>
            <p><strong>Dono:</strong> {dono as string}</p>
            <p><strong>Saldo:</strong> {saldo} ETH</p>
          </>
        )}

        <Button texto="Voltar" aoClicar={handleBack} cor="bg-white text-pink-600" />
      </div>
    </main>
  );
}