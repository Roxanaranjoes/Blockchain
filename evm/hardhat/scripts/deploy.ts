import { ethers, network } from 'hardhat';
import * as fs from 'fs';

async function main() {
  console.log(`Deploying to ${network.name}...`);

  const Token = await ethers.getContractFactory('TokenRoxa');
  const token = await Token.deploy();
  await token.waitForDeployment();

  const NFT = await ethers.getContractFactory('NFTRoxa');
  const nft = await NFT.deploy('ipfs://BASE_CID/');
  await nft.waitForDeployment();

  const Vault = await ethers.getContractFactory('VaultRoxa');
  const vault = await Vault.deploy();
  await vault.waitForDeployment();

  const addresses = {
    network: network.name,
    token: await token.getAddress(),
    nft: await nft.getAddress(),
    vault: await vault.getAddress()
  };

  console.log('Deployed:', addresses);
  fs.mkdirSync('artifacts-addresses', { recursive: true });
  fs.writeFileSync(`artifacts-addresses/${network.name}.json`, JSON.stringify(addresses, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

