import { ethers } from 'hardhat';

async function main() {
  const tokenAddr = process.env.TOKEN_ROXA_ADDRESS;
  if (!tokenAddr) throw new Error('Define TOKEN_ROXA_ADDRESS');

  const token = await ethers.getContractAt('TokenRoxa', tokenAddr);
  const [signer] = await ethers.getSigners();

  // Ejemplo: mintear 1 ROXA si tienes rol
  const tx = await token.mint(signer.address, ethers.parseUnits('1', 18));
  console.log('Mint tx:', tx.hash);
  await tx.wait();
  console.log('TotalSupply:', (await token.totalSupply()).toString());
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

