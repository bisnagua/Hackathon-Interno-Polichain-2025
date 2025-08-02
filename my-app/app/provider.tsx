'use client';

/* providers → componentes que envolvem a aplicação ou partes dela para fornecer contexto ou funcionalidades globais
“fornecem” um contexto ou funcionalidade para qualquer componente filho através da árvore do React. **/

import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { config } from '../lib/wagmi';
import React from 'react';

const queryClient = new QueryClient(); //armazena, controla e gerencia o cache e os estados de carregamento/erro das requisições de dados no app

export default function Providers({ //função que cria um componente que envolve tudo o que você colocar dentro dele com alguns "providers" importantes (RAINBOWKIT, WAGMI, QUERYCLIENT)
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}