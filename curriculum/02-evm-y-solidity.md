#+ EVM y Solidity

Conceptos: memoria vs storage, gas, ABI; guía rápida de Solidity.

## Memoria vs Storage
- `storage`: persistente en cadena; caro. `memory`: temporal por llamada.
- Tip: minimiza escrituras a `storage`.

### También: `calldata`
Parámetros de función externos se leen desde `calldata` (más barato que copiar a `memory`). Ej.: `function f(uint256[] calldata xs) external { ... }`.

## Gas y costos
- Cada operación consume gas; el usuario paga gasPrice*gasUsed.

### Tips de gas
- Lee a memoria local antes de loops si vas a repetir lecturas de `storage`.
- Emite eventos para “logs” en vez de guardar strings en `storage`.

## ABI
- Interfaz binaria para invocar funciones y eventos.

## Guía rápida de Solidity
- Versionado `pragma solidity ^0.8.20;`
- Importa OpenZeppelin para estándares (ERC20/721, AccessControl, Pausable).
- Patrones: Ownable, Pausable, ReentrancyGuard.

```solidity
// Función segura con Checks-Effects-Interactions
function safeAction() external nonReentrant {
    require(hasRole(EXECUTOR_ROLE, msg.sender), "NO_ROLE");
    internalState += 1; // Effects
    (bool ok,) = target.call(payload); // Interactions al final
    require(ok, "CALL_FAIL");
}
```

### Errores comunes
- Usar `transfer()`/`send()` y asumir seguridad: prefiera `call{value:...}` y maneje resultado.
- Falta de validación de permisos/roles antes de efectos.
- No emitir eventos en acciones críticas (auditoría difícil).

### Ejercicio
- Añade un `cap` a `TokenRoxa` y tests que fallen si se supera el tope.

