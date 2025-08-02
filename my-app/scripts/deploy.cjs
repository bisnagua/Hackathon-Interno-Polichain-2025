//scripts → automatizar interações com contratos
//esse script faz deploy do contrato 

// eslint-disable-next-line @typescript-eslint/no-require-imports
const hre = require("hardhat");

async function main() {
    const [_, __, nomeArg, metaArg, diasArg, modoArg, curadoresArg] = process.argv;

    const nome = nomeArg;
    const meta = BigInt(metaArg); 
    const numeroDeDias = Number(diasArg);
    const modo = Number(modoArg);
    const numeroDeCuradores = Number(curadoresArg);

    console.log("Fazendo deploy do cofrinho...");
    console.log({ nome, meta, numeroDeDias, modo, numeroDeCuradores });

    const Cofrinho = await hre.ethers.getContractFactory("Cofrinho");
    const cofrinho = await Cofrinho.deploy(nome, meta, numeroDeDias, modo, numeroDeCuradores);

    await cofrinho.waitForDeployment();

    const address = await cofrinho.getAddress();
    console.log(`Cofrinho deployado em: ${address}`);

    console.log(`\n COPIE ESSE ENDEREÇO: ${address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})