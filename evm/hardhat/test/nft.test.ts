import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('NFTRoxa', () => {
  it('mints with role and sets tokenURI', async () => {
    const [admin, user] = await ethers.getSigners();
    const NFT = await ethers.getContractFactory('NFTRoxa');
    const nft = await NFT.connect(admin).deploy('ipfs://base/');
    await nft.waitForDeployment();

    await expect(nft.connect(user).safeMint(user.address, 'ipfs://token/1')).to.be.reverted;
    await nft.grantRole(ethers.id('MINTER_ROLE'), user.address);
    await nft.connect(user).safeMint(user.address, 'ipfs://token/1');
    expect(await nft.ownerOf(1)).to.equal(user.address);
    expect(await nft.tokenURI(1)).to.equal('ipfs://token/1');
  });
});

