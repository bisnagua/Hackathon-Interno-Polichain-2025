import { getDefaultConfig } from '@rainbow-me/rainbowkit'; //vem do pacote do rainbowkit já instalado
import { sepolia } from 'wagmi/chains'; //já vem na bibiloteca instalada do wagmi (na subpasta chains)

const hardhat = { // configuração personalizada para a rede Hardhat que não vem pronta no pacote wagmi/chains
    id: 31337,
    name: 'Hardhat',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: { http: ['http://127.0.0.1:8545'] },
    },
    blockExplorers: {
        default: { name: 'Hardhat', url: 'http://localhost:8545' },
    },
    testnet: true,
} as const;

//configura o RainbowKit e o Wagmi para conectar a aplicação a carteiras Web3 
export const config = getDefaultConfig({//cria e exporta um objeto de configuração que será usado para inicializar o WagmiConfig
    appName: 'Cofrinho Compartilhado',
    projectId: '5b9dca6cc895bd95e28442e7ec697435', //integra o RainbowKit com wagmi e permite conexão com carteiras via WalletConnect
    chains: [sepolia, hardhat], //quais redes a aplicação suporta
    ssr: true,
});

/** getDefaultConfig → função oferecida pelo RainbowKit que gera automaticamente a configuração básica que o wagmi e o RainbowKit precisam para funcionar no app.
Ao invés de ter que escrever toda a configuração manualmente,a função faz isso com base em alguns parâmetros fornecidos:
appName, projectId, chains e ssr
 */