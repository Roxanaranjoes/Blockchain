#+ Cross-chain y bridges

Modelos de puente y riesgos.

- Light client, multisig, liquidez nativa, rollup bridges.
- Riesgos: validadores comprometidos, bugs de verificación, replay.
- Mitigación: límites, pausas, monitoreo, pruebas formales.

## Noticias y casos
- Wormhole (2022) y Ronin (2022) sufrieron exploits multimillonarios: la seguridad depende del “guardado” de firmas o verificaciones.
- Lección: preferir verificaciones criptográficas (light clients) sobre “confianza social” (multisigs) cuando sea posible.

## Ejercicio
- Dibuja un diagrama de secuencia del flujo de un puente “lock & mint” y marca puntos de fallo.

