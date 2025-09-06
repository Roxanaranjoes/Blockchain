#+ Frontend dApp

Next.js 14 + ethers.js + wagmi/connectkit para conectar wallet, leer y escribir en contratos.

## Pasos
- Instala: `npm install` en `dapp-next`.
- Variables: copia `.env.example` y agrega `NEXT_PUBLIC_RPC` y direcciones.
- Corre: `npm run dev` y abre `http://localhost:3000`.

## UX
- Muestra estado de transacción y errores legibles.
- Deshabilita botones mientras hay transacción pendiente.

## Qué es y por qué importa
La dApp es la “cara” del contrato: guía al usuario, evita errores (por red equivocada, falta de rol), y comunica costos/tiempos de transacción.

## Patrones prácticos
- Detectar red: mostrar badge de red y sugerir cambiar si no es soportada.
- Estimar gas y mostrar feedback: “Enviando… Confirmada… Revertida”.
- Validar inputs antes de enviar una transacción on-chain.

## Ejemplo real
- Uniswap/OpenSea: conexión de wallet, firma (EIP-712) y luego transacción on-chain. Evitan transacciones innecesarias usando firmas off-chain cuando se puede.

