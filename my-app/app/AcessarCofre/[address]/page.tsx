'use client';

import { useAccount } from "wagmi";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { usePublicClient, useContractRead } from "wagmi";
import { formatEther } from "viem";
import Button from "@/components/Button";
import CofrinhoABI from "@/artifacts/contracts/Cofrinho.sol/Cofrinho.json";
import { parseUnits } from "viem";
import { useContractWrite } from "wagmi";
import { useTransactionReceipt } from 'wagmi';
import { useWriteContract } from 'wagmi';

export default function ConferirCofrePage() {
  const [valorDoacao, setValorDoacao] = useState("");
  const { address } = useParams<{ address: string }>();
  const router = useRouter();
  const publicClient = usePublicClient();
  const { address: walletAddress } = useAccount();
  const [novaProposta, setNovaProposta] = useState("");
  const [propostas, setPropostas] = useState<any[]>([]);
  const [votouEm, setVotouEm] = useState<string | null>(null);
  const [saldo, setSaldo] = useState<string | null>(null);
  const addressTyped = address as `0x${string}`;

  const { data: dono, isLoading: loadingDono } = useContractRead({
    address: addressTyped,
    abi: CofrinhoABI.abi,
    functionName: 'owner',
  });

  const { data: nome, isLoading: loadingNome } = useContractRead({
    address: addressTyped,
    abi: CofrinhoABI.abi,
    functionName: 'nome',
  });

  const { data: meta, isLoading: loadingMeta } = useContractRead({
    address: addressTyped,
    abi: CofrinhoABI.abi,
    functionName: 'meta',
  });

  const { data: dataFim, isLoading: loadingDataFim } = useContractRead({
    address: addressTyped,
    abi: CofrinhoABI.abi,
    functionName: 'dataFim',
  });

  const { data: modoDeHierarquia, isLoading: loadingModoHierarquia } = useContractRead({
    address: addressTyped,
    abi: CofrinhoABI.abi,
    functionName: 'modoDeHierarquia',
  });

  const { data: numeroDeCuradores, isLoading: loadingCuradores } = useContractRead({
    address: addressTyped,
    abi: CofrinhoABI.abi,
    functionName: 'numeroDeCuradores',
  });

  const { writeContract, data: dataTx, isPending: isEnviando } = useWriteContract();

  const { data: recibo, status: statusTx } = useTransactionReceipt({
    hash: dataTx,
  });

    const donoString = typeof dono === 'string' ? dono : undefined;
    const metaBigInt = typeof meta === 'bigint' ? meta : undefined;

  const sacar = async () => {
    try {
      writeContract({
        address: addressTyped,
        abi: CofrinhoABI.abi,
        functionName: 'sacar',
      });
    } catch (e) {
      console.error("Erro ao sacar:", e);
    }
  };


  const handleDoar = () => {
    if (!valorDoacao) return;

    writeContract({
      address: addressTyped,
      abi: CofrinhoABI.abi,
      functionName: 'doar',
      value: parseUnits(valorDoacao, 18),
    });
  };

  useEffect(() => {
    if (statusTx === 'success') {
      const fetchBalance = async () => {
        if (!addressTyped || !publicClient) return;
        const balance = await publicClient.getBalance({ address: addressTyped });
        setSaldo(formatEther(balance));
      };
      fetchBalance();
      setValorDoacao(""); // limpa o campo
    }
  }, [statusTx]);

  useEffect(() => {
    const fetchBalance = async () => {
      if (!addressTyped || !publicClient) return;
      const balance = await publicClient.getBalance({ address: addressTyped });
      setSaldo(formatEther(balance));
    };
    fetchBalance();
  }, [addressTyped, publicClient]);

  useEffect(() => {
    const fetchPropostas = async () => {
      const res = await fetch(`/api/proposals?vaultAddress=${address}`);
      const data = await res.json();
      setPropostas(data);

      if (walletAddress) {
        const propostaComVoto = data.find((p: any) =>
          p.votes.some((v: any) => v.wallet.toLowerCase() === walletAddress.toLowerCase())
        );
        setVotouEm(propostaComVoto?.id || null);
      }
    };

    fetchPropostas();
  }, [address, walletAddress]);

  const handleBack = () => {
    router.back();
  };

  const criarProposta = async () => {
    const res = await fetch("/api/proposals", {
      method: "POST",
      body: JSON.stringify({
        vaultAddress: address,
        title: novaProposta,
      }),
      headers: { "Content-Type": "application/json" },
    });

    const propostaCriada = await res.json();

    setPropostas((old) => [...old, propostaCriada]);
    setNovaProposta("");
  };

  const votar = async (proposalId: string) => {
    if (!walletAddress || votouEm) return;

    const res = await fetch("/api/votes", {
      method: "POST",
      body: JSON.stringify({ proposalId, wallet: walletAddress }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setVotouEm(proposalId);

      setPropostas((old) =>
        old.map((p) =>
          p.id === proposalId
            ? { ...p, votes: [...(p.votes || []), { wallet: walletAddress }] }
            : p
        )
      );
    } else {
      console.error("Erro ao votar");
    }
  };

  const modoTexto = (modoVal: unknown) => {
    switch (Number(modoVal)) {
      case 0: return "Apenas o dono decide";
      case 1: return "Múltiplas pessoas votam";
      case 2: return "Todos votam";
      default: return "Desconhecido";
    }
  };

  const loading = loadingDono || loadingNome || loadingMeta ||
    loadingModoHierarquia || loadingCuradores || loadingDataFim || saldo === null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-6 w-full max-w-xl">
        {loading ? (
          <p className="text-pink-700 text-lg font-semibold">Carregando cofre...</p>
        ) : (
          <>
            <h1 className="text-4xl font-extrabold text-pink-700 text-center">
              {typeof nome === "string" ? nome : "Cofrinho"}
            </h1>
            <div className="text-gray-800 text-base w-full">
              <p><strong>Endereço:</strong> {address}</p>
              <p><strong>Dono:</strong> {typeof dono === "string" ? dono : '-'}</p>
              <p><strong>Saldo:</strong> {saldo} ETH</p>
              <p><strong>Meta:</strong> {meta ? formatEther(meta as bigint) + ' ETH' : '-'}</p>
              <p><strong>Data fim:</strong> {dataFim ? new Date(Number(dataFim) * 1000).toLocaleDateString() : '-'}</p>
              <p><strong>Modo de hierarquia:</strong> {modoTexto(modoDeHierarquia)}</p>
              <p><strong>Número de curadores:</strong> {numeroDeCuradores?.toString() || '-'}</p>

              <div className="w-full flex gap-2 mt-6">
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={valorDoacao}
                  onChange={(e) => setValorDoacao(e.target.value)}
                  placeholder="Quanto depositar (em ETH)"
                  className="flex-1 border rounded-xl px-3 py-2"
                />
                <Button
                  texto={isEnviando ? "Enviando..." : "Depositar"}
                  aoClicar={handleDoar}
                  disabled={isEnviando || !valorDoacao}
                />
              </div>

              <hr className="w-full border-t border-pink-300 my-4" />
              <h2 className="text-xl font-bold text-pink-700">Propostas</h2>

              <div className="w-full flex gap-2 mb-4">
                <input
                  type="text"
                  value={novaProposta}
                  onChange={(e) => setNovaProposta(e.target.value)}
                  placeholder="Nova proposta"
                  className="flex-1 border rounded-xl px-3 py-2"
                />
                <Button texto="Enviar" aoClicar={criarProposta} />
              </div>

              <ul className="w-full mt-4 space-y-2">
                {propostas.length === 0 && (
                  <p className="text-gray-500 text-center">Nenhuma proposta criada ainda.</p>
                )}
                {propostas.map((p) => (
                  <li
                    key={p.id}
                    className="border border-pink-300 rounded-xl px-4 py-2 flex justify-between items-center"
                  >
                    <div>
                      <strong>{p.title}</strong>
                      <span className="ml-2 text-sm text-pink-500">
                        ({p.votes?.length || 0} {p.votes?.length === 1 ? "voto" : "votos"})
                      </span>
                    </div>
                    <Button
                      texto={votouEm === p.id ? "Votado" : "Votar"}
                      aoClicar={() => votar(p.id)}
                      cor={votouEm === p.id ? "bg-pink-300 text-white" : ""}
                      disabled={!!votouEm}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        <hr className="w-full border-t border-pink-300 my-4" />
{walletAddress?.toLowerCase() === donoString?.toLowerCase() &&
 saldo && metaBigInt && 
 BigInt(parseUnits(saldo, 18)) >= metaBigInt && (
  <Button texto="Sacar" aoClicar={sacar} cor="bg-green-500 text-white" />
)}



        <Button texto="Voltar" aoClicar={handleBack} cor="bg-white text-pink-600" />
      </div>
    </main>
  );
}
