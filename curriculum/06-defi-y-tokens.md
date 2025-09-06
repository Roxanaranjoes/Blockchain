#+ DeFi y tokens

Estándares ERC20/721/1155, AMMs, stablecoins; riesgos.

- ERC20: fungible; ERC721: no fungible; ERC1155: multi-tipo.
- AMMs: x*y=k, slippage, IL (impermanent loss).
- Stablecoins: colateralizadas vs algorítmicas.
- Riesgos: oráculos, reentrancy, permisos, upgrades.

## Casos de uso reales
- Pagos y remesas (USDC/USDT), mercados NFT (ERC721), juegos (ERC1155), préstamos (Aave/Compound).

## Noticias y lecciones
- De-peg y colapsos (UST 2022): importancia del diseño de estabilidad y colateral.
- Exploits en DeFi (reentrancy/oracle manipulation): refuerza usar oráculos robustos, límites y pausas.

## Aprovals y seguridad del usuario
- El patrón `approve` permite gastar tus tokens: usa aprovals limitados y revoca permisos que no uses.

## Ejercicio
- Agrega un `maxMintPerAddress` a `TokenRoxa` y pruebas de borde.

