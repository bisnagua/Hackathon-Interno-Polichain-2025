//scripts → automatizar interações com contratos
//esse script faz deploy do contrato 

// eslint-disable-next-line @typescript-eslint/no-require-imports
const hre = require("hardhat");

async function main() {
    console.log("Fazendo deploy do cofrinho...");

    const Cofrinho = await hre.ethers.getContractFactory("Cofrinho");
    const cofrinho = await Cofrinho.deploy(); //necessario um ajuste pra passar os parametros do contrato Cofrinho.sol

    await cofrinho.waitForDeployment();

    const address = await cofrinho.getAddress();
    console.log(`ItemManager deployed em: ${address}`);

    console.log(`\n COPIE ESSE ENDEREÇO: ${address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})