import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('VaultRoxa (reentrancy)', () => {
  it('blocks reentrancy with CEI + ReentrancyGuard', async () => {
    const [deployer, attacker] = await ethers.getSigners();
    const Vault = await ethers.getContractFactory('VaultRoxa');
    const vault = await Vault.deploy();
    await vault.waitForDeployment();

    // Deploy attacker que intenta reentrar
    const Attacker = await ethers.getContractFactory(`
      // SPDX-License-Identifier: MIT
      pragma solidity ^0.8.24;
      interface IVault { function deposit() external payable; function withdraw(uint256) external; }
      contract Attacker {
        IVault public v; bool public attacked; address owner;
        constructor(address _v) { v = IVault(_v); owner = msg.sender; }
        function attack() external payable { v.deposit{value: msg.value}(); v.withdraw(msg.value); }
        receive() external payable { if(!attacked){ attacked = true; v.withdraw(1); } }
      }
    `);
    const attackerC = await Attacker.connect(attacker).deploy(await vault.getAddress());
    await attackerC.waitForDeployment();

    await expect(attackerC.connect(attacker).attack({ value: ethers.parseEther('1') })).to.be.reverted;
    // Aún así, el atacante no drena el vault
    const bal = await ethers.provider.getBalance(await vault.getAddress());
    expect(bal).to.equal(0n);
  });
});

