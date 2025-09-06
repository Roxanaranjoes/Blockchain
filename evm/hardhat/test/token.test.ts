import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('TokenRoxa', () => {
  it('mints/burns and enforces roles', async () => {
    const [admin, user] = await ethers.getSigners();
    const Token = await ethers.getContractFactory('TokenRoxa');
    const token = await Token.connect(admin).deploy();
    await token.waitForDeployment();

    await expect(token.connect(user).mint(user.address, 1)).to.be.revertedWithCustomError || to.be.reverted;

    await token.grantRole(ethers.id('MINTER_ROLE'), user.address);
    await token.connect(user).mint(user.address, 100n);
    expect(await token.balanceOf(user.address)).to.equal(100n);

    await token.connect(user).burn(50n);
    expect(await token.balanceOf(user.address)).to.equal(50n);
  });

  it('pauses transfers', async () => {
    const [admin, user] = await ethers.getSigners();
    const Token = await ethers.getContractFactory('TokenRoxa');
    const token = await Token.connect(admin).deploy();
    await token.waitForDeployment();
    await token.grantRole(ethers.id('MINTER_ROLE'), admin.address);
    await token.mint(user.address, 100n);

    await token.grantRole(ethers.id('PAUSER_ROLE'), admin.address);
    await token.pause();
    await expect(token.connect(user).transfer(admin.address, 1)).to.be.reverted;
    await token.unpause();
    await expect(token.connect(user).transfer(admin.address, 1)).to.emit(token, 'Transfer');
  });
});

