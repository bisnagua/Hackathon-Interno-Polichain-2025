/* eslint-disable @typescript-eslint/no-require-imports*/
const fs = require('fs');
const path = require('path');

async function main() {
    const artifactPath = path.join(__dirname, '../artifacts/contracts/Cofrinho.sol/Cofrinho.json');
    const artifact = JSON.parse(fs.readFileSync(artifactPath, 'utf8'));

    const abi = artifact.abi;

    const content = `// Auto-gerado pelo script extract-abi.js
export const ContractABI = ${JSON.stringify(abi, null, 2)} as const;

// COLE AQUI O ENDEREÇO DO DEPLOY
export const CONTRACT_ADDRESS = "SEU_ENDEREÇO_AQUI" as const;
`;

    const outputPath = path.join(__dirname, '../lib/contracts.ts');
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, content);

    console.log('ABI extraído para lib/contracts.ts');
    console.log('Lembre-se de atualizar o CONTRACT_ADDRESS');
}

main().catch(console.error);
