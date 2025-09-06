#+ Solana (Rust)

Programa mínimo y cliente TS de ejemplo. Requiere toolchain de Solana.

## Toolchain
- Instalar: `sh -c "$(curl -sSfL https://release.solana.com/stable/install)"`
- `solana --version`

## Build local
- `cd hello-roxa && cargo build-bpf` (o `cargo build-sbf` según tu toolchain)

## Client TS
- Cliente de ejemplo en `hello-roxa/client-ts/index.ts` que envía una instrucción no-op al programa.

