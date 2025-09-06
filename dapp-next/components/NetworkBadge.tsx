"use client";
import { useAccount, useChainId } from 'wagmi';
import { chains } from '../lib/web3';

export function NetworkBadge() {
  const chainId = useChainId();
  const { address } = useAccount();
  const chain = chains.find((c) => c.id === chainId);
  return (
    <div style={{ fontSize: 12, opacity: 0.8 }}>
      Network: {chain?.name ?? 'Desconocida'} | {address ? `${address.slice(0,6)}…${address.slice(-4)}` : 'No wallet'}
    </div>
  );
}

