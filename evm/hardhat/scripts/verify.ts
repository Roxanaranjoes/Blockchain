import { run } from 'hardhat';

async function main() {
  // Ajusta direcciones/args tras el deploy
  const tokenAddr = process.env.TOKEN_ROXA_ADDRESS || '';
  const nftAddr = process.env.NFT_ROXA_ADDRESS || '';
  const vaultAddr = process.env.VAULT_ROXA_ADDRESS || '';

  if (tokenAddr) {
    await run('verify:verify', { address: tokenAddr, constructorArguments: [] });
  }
  if (nftAddr) {
    await run('verify:verify', { address: nftAddr, constructorArguments: ['ipfs://BASE_CID/'] });
  }
  if (vaultAddr) {
    await run('verify:verify', { address: vaultAddr, constructorArguments: [] });
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

