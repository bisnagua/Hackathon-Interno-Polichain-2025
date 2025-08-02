import { useAccount } from "wagmi";
import { ethers } from "ethers";
import CofrinhoArtifact from "@/artifacts/contracts/Cofrinho.sol/Cofrinho.json";

export async function deployCofrinhoFrontend({
  nome,
  meta,
  dias,
  modo,
  curadores,
  unidade,
}: {
  nome: string;
  meta: bigint;
  dias: number;
  modo: number;
  curadores: string[];
  unidade: number; // 0 = Wei, 1 = Gwei, 2 = Ether
}) {
  if (!window.ethereum) {
    throw new Error("MetaMask não detectado");
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  const factory = new ethers.ContractFactory(
    CofrinhoArtifact.abi,
    CofrinhoArtifact.bytecode,
    signer
  );

  const cofrinho = await factory.deploy(nome, meta, unidade, dias, modo, curadores.length);

  console.log("Esperando deploy confirmar...");
  await cofrinho.waitForDeployment();

  const address = await cofrinho.getAddress();

  console.log(`Contrato deployado em: ${address}`);
  return address;
}