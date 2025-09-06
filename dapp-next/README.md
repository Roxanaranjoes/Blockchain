#+ dApp Next.js

Next.js 14 + wagmi/connectkit + ethers.js. Conecta tu wallet, lee `totalSupply` y ejecuta `mint` (si tu cuenta tiene rol).

## Setup
- `npm install`
- Copia `.env.example` → `.env.local` y define `NEXT_PUBLIC_RPC` y direcciones de contratos.
- `npm run dev`

## UX
- Componente `TxStatus` muestra estado básico del hash enviado.
- Manejo de errores sencillo (muestra revert si no tienes rol de minter).

