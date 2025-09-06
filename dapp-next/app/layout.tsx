import './globals.css';
import { ReactNode } from 'react';
import { WagmiConfig } from 'wagmi';
import { ConnectKitProvider } from 'connectkit';
import { wagmiConfig } from '../lib/web3';
import { WalletButton } from '../components/WalletButton';
import { NetworkBadge } from '../components/NetworkBadge';

export const metadata = {
  title: 'Roxa DApp',
  description: 'Demo educativa blockchain'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <WagmiConfig config={wagmiConfig}>
          <ConnectKitProvider>
            <header style={{ display: 'flex', gap: 12, padding: 12, borderBottom: '1px solid #eee' }}>
              <a href="/">Home</a>
              <a href="/token">Token</a>
              <a href="/nft">NFT</a>
              <a href="/vault">Vault</a>
              <div style={{ marginLeft: 'auto' }}>
                <NetworkBadge />
              </div>
              <WalletButton />
            </header>
            <main style={{ padding: 16 }}>{children}</main>
          </ConnectKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}

