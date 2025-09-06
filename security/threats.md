#+ Amenazas comunes

- Reentrancy: múltiples entradas antes de actualizar estado. Mitigar con CEI y `ReentrancyGuard`.
- Overflow/Underflow: en ^0.8.* Solidity ya verifica por defecto, pero cuida conversiones.
- Front-running: validaciones de slippage/plazos y usar `permit`/EIP-712 si aplica.
- Oracle risk: valida fuentes, límites, feeds múltiples.
- Access control: revisa `onlyOwner`/roles y eventos.

