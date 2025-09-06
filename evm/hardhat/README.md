#+ Hardhat (EVM)

Proyecto TypeScript con Hardhat, mocha/chai, gas reporter y coverage. Contratos: `TokenRoxa` (ERC20 con roles/pausa/mint/burn), `NFTRoxa` (ERC721 baseURI + safeMint), `VaultRoxa` (reentrancy-safe) con pruebas y scripts.

## Requisitos
- Node 18+, npm.
- Copia `.env.example` (raíz del repo) a `evm/hardhat/.env` si deseas separar variables.

## Comandos
- Instalar: `npm install`
- Compilar: `npm run build`
- Test: `npm test` (incluye casos "should fail")
- Coverage: `npm run coverage`
- Deploy en Sepolia: `npm run deploy:sepolia`

## Variables
- `RPC_URL`, `PRIVATE_KEY`, `ETHERSCAN_API_KEY`.

## Verificación
- Tras el deploy, usa `npm run verify` con dirección y argumentos en `scripts/verify.ts`.

