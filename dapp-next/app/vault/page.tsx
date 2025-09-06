"use client";
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

export default function VaultPage(){
  const [balance, setBalance] = useState<string>('0');

  useEffect(() => { /* Placeholder UI */ }, []);

  return (
    <div>
      <h2>VaultRoxa</h2>
      <p>Vault protegido contra reentrancy. Usa Hardhat para interactuar con depósito/retiro.</p>
      <p>Tu balance (demo): {balance} ETH</p>
    </div>
  );
}

