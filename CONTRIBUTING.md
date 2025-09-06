#+ Contribuir

¡Gracias por tu interés en contribuir! Este repositorio busca ser una guía práctica y abierta para aprender blockchain.

## Cómo proponer cambios
- Busca o crea un Issue describiendo el problema o la mejora.
- Acordemos el alcance antes de abrir un PR grande.
- Abre un PR con descripción clara, motivación y pruebas.

## Estilo
- Código: TypeScript/JavaScript con ESLint/Prettier; Python con Ruff; Solidity con estilo de OpenZeppelin.
- Nombres: títulos/identificadores en inglés (`kebab-case`/`camelCase`); documentación en español neutro.
- Comentarios didácticos “por qué/qué” cuando agreguen valor.

## Pruebas
- EVM/Hardhat: `npm test` y cobertura >80% preferible.
- Foundry: `forge test -vv`.
- dApp: `npm run build`.
- Python: `pytest` (cuando aplique) y scripts reproducibles.

## Seguridad
- Sin llaves reales. Usa `.env.example`.
- Ejecuta `slither` y `myth` cuando agregues contratos críticos.

¡Gracias por ayudar a enseñar a más personas! 🙌

