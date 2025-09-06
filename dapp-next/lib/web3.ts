import { createConfig, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { getDefaultConfig } from 'connectkit';
import { ethers } from 'ethers';

export const chains = [sepolia, mainnet] as const;

export const wagmiConfig = createConfig(
  getDefaultConfig({
    appName: 'Roxa DApp',
    walletConnectProjectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || 'demo',
    chains,
    transports: {
      [sepolia.id]: http(process.env.NEXT_PUBLIC_RPC),
      [mainnet.id]: http(process.env.NEXT_PUBLIC_RPC_MAINNET || 'https://cloudflare-eth.com')
    }
  })
);

export const tokenRoxaAbi = [
  'function totalSupply() view returns (uint256)',
  'function mint(address to, uint256 amount)',
  'function balanceOf(address) view returns (uint256)',
  'event Transfer(address indexed from, address indexed to, uint256 value)'
];

export function getEthersProvider() {
  if (typeof window === 'undefined') return undefined;
  const anyWindow = window as any;
  if (!anyWindow.ethereum) return undefined;
  return new ethers.BrowserProvider(anyWindow.ethereum);
}

export async function getTokenContract() {
  const provider = getEthersProvider();
  if (!provider) throw new Error('Provider no disponible');
  const address = process.env.NEXT_PUBLIC_TOKEN_ADDRESS as string;
  const signer = await provider.getSigner();
  return new ethers.Contract(address, tokenRoxaAbi, signer);
}

