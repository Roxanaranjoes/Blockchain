import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('VaultRoxa (reentrancy)', () => {
  it('blocks reentrancy with CEI + ReentrancyGuard', async () => {
    const [deployer, attacker] = await ethers.getSigners();
    const Vault = await ethers.getContractFactory('VaultRoxa');
    const vault = await Vault.deploy();
    await vault.waitForDeployment();

    // Deploy attacker que intenta reentrar (contrato en contracts/test/Attacker.sol)
    const Attacker = await ethers.getContractFactory('Attacker');
    const attackerC = await Attacker.connect(attacker).deploy(await vault.getAddress());
    await attackerC.waitForDeployment();

    await expect(attackerC.connect(attacker).attack({ value: ethers.parseEther('1') })).to.be.reverted;
    // Aún así, el atacante no drena el vault
    const bal = await ethers.provider.getBalance(await vault.getAddress());
    expect(bal).to.equal(0n);
  });
});
