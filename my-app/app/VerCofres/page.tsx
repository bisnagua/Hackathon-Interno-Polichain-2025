'use client';

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

type Cofrinho = {
  id: number;
  address: string;
  nome: string;
};

export default function VerCofresPage() {
  const { address, isConnected } = useAccount();
  const router = useRouter();
  const [cofrinhos, setCofrinhos] = useState<Cofrinho[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isConnected || !address) return;

    const fetchCofres = async () => {
      try {
        const res = await fetch(`/api/cofrinhos?owner=${address}`);
        const data = await res.json();
        if (res.ok) {
          setCofrinhos(data.cofrinhos);
        } else {
          alert("Erro ao buscar cofrinhos: " + data.error);
        }
      } catch (err: any) {
        alert("Erro na requisição: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCofres();
  }, [address, isConnected]);

  const handleAcessarCofre = (address: string) => {
    router.push(`/AcessarCofre/${address}`);
  };

  const handleVoltar = () => {
    router.back();
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-pink-700 text-center">
          Seus Cofrinhos
        </h1>

        {loading ? (
          <p>Carregando...</p>
        ) : cofrinhos.length === 0 ? (
          <p className="text-gray-500">Nenhum cofrinho encontrado.</p>
        ) : (
          <ul className="w-full flex flex-col gap-4">
            {cofrinhos.map((cofre) => (
              <li
                key={cofre.id}
                className="bg-pink-100 hover:bg-pink-200 p-4 rounded-xl cursor-pointer shadow"
                onClick={() => handleAcessarCofre(cofre.address)}
              >
                <p className="font-semibold">{cofre.nome}</p>
                <p className="text-sm text-gray-600 break-all">{cofre.address}</p>
              </li>
            ))}
          </ul>
        )}

        <Button texto="Voltar" aoClicar={handleVoltar} cor="bg-white text-pink-600" />
      </div>
    </main>
  );
}