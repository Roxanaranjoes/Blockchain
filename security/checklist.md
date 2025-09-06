#+ Checklist pre-deploy

- [ ] Revisión de roles y permisos (`DEFAULT_ADMIN_ROLE`, `MINTER_ROLE`, `PAUSER_ROLE`).
- [ ] Pausas y guardianes (`Pausable`, `setPaused`).
- [ ] Protección de reentrancy (`ReentrancyGuard`, CEI).
- [ ] Límite de `mint`/`cap` si aplica.
- [ ] Eventos emitidos en acciones críticas.
- [ ] Tests unitarios y de fallos, cobertura >80%.
- [ ] Slither y Mythril ejecutados sin findings críticos.
- [ ] Verificación en explorador (Etherscan) y direcciones documentadas.
- [ ] Variables `.env` saneadas, sin llaves reales.
- [ ] Plan de respuesta a incidentes y posibilidad de `pause`.

