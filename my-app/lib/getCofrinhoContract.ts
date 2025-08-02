import { ethers } from "ethers";
import { ContractABI } from "./contracts";

export function getCofrinhoContract(address: string, signerOrProvider: ethers.Signer | ethers.Provider) {
  return new ethers.Contract(address, ContractABI, signerOrProvider);
}