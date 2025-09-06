"use client";
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { getEthersProvider, getTokenContract } from '../../lib/web3';
import { TxStatus } from '../../components/TxStatus';

export default function TokenPage() {
  const [supply, setSupply] = useState<string>('0');
  const [amount, setAmount] = useState<string>('1');
  const [txHash, setTxHash] = useState<string | undefined>();
  const [busy, setBusy] = useState(false);

  async function refresh() {
    try {
      const provider = getEthersProvider();
      if (!provider) return;
      const address = process.env.NEXT_PUBLIC_TOKEN_ADDRESS as string;
      const token = new ethers.Contract(address, [ 'function totalSupply() view returns (uint256)' ], await provider.getSigner());
      const s = await token.totalSupply();
      setSupply(ethers.formatUnits(s, 18));
    } catch (e) { console.error(e); }
  }

  async function doMint() {
    setBusy(true);
    try {
      const token = await getTokenContract();
      const val = ethers.parseUnits(amount || '0', 18);
      const signer = await (getEthersProvider()!.getSigner());
      const tx = await token.mint(await signer.getAddress(), val);
      setTxHash(tx.hash);
      await tx.wait();
      await refresh();
    } catch (e:any) {
      alert(e?.shortMessage || e?.message || 'Error');
      console.error(e);
    } finally { setBusy(false); }
  }

  useEffect(() => { refresh(); }, []);

  return (
    <div>
      <h2>TokenRoxa</h2>
      <p>Total supply: {supply}</p>
      <div style={{ display: 'flex', gap: 8 }}>
        <input value={amount} onChange={(e)=>setAmount(e.target.value)} />
        <button onClick={doMint} disabled={busy}>Mint</button>
      </div>
      <TxStatus hash={txHash} />
      <p style={{ fontSize: 12, opacity: 0.7 }}>Nota: el mint requiere rol. Si falla, verás un error.</p>
    </div>
  );
}

