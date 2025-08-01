'use client';

import Image from "next/image";
import './globals.css';
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from "wagmi";
import { useEffect } from "react";
//import { ContractABI, CONTRACT_ADDRESS } from '@/lib/contracts'; //CONTRACT_ADRESS é o endereço do contrato deployado - quando deixar de ser localmente, necessario mudar pro endereço da sepolia 

export default function Home() {
  const { isConnected } = useAccount();
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-8 w-full max-w-md">
        <h1 className="text-4xl text-center font-extrabold text-pink-900"> Cofrinho Compartilhado </h1>

        <div className="flex justify-between items-center mb-8">
          <ConnectButton />
        </div>

        {!isConnected ? (
          <p className="text-pink-700 font-semibold text-center">
            Por favor, conecte sua carteira para acessar o conteúdo.
          </p>
        ) : (
          <>
        <p className="text-slate-600 text-center">Gerencie e compartilhe seu dinheiro de forma simples e divertida!</p>
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <Button 
            texto="Acessar Cofrinho" 
            cor="bg-pink-500 hover:bg-pink-600 text-white font-bold shadow-md hover:shadow-lg transition" 
            aoClicar={() => router.push('/VerCofres')} 
          />
          <Button 
            texto="Criar um Cofrinho" 
            cor="bg-zinc-200 hover:bg-zinc-300 text-pink-600 font-bold shadow-md hover:shadow-lg transition" 
            aoClicar={() => router.push('/NovoCofre')} 
          />
        </div>
          </>
        )}
      </div>
    </main>
  );
}

