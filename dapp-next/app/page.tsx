export default function Page() {
  return (
    <div>
      <h1>Roxa DApp</h1>
      <p>Bienvenido. Usa el menú para ir a Token, NFT y Vault.</p>
      <ul>
        <li>Token: leer <code>totalSupply</code> y hacer <code>mint</code>.</li>
        <li>NFT: explicación y uso de <code>tokenURI</code> con IPFS.</li>
        <li>Vault: depósito/retiro protegido contra reentrancy.</li>
      </ul>
    </div>
  );
}

