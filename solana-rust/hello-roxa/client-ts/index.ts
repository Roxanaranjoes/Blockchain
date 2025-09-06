import { Connection, Keypair, PublicKey, SystemProgram, Transaction, TransactionInstruction, sendAndConfirmTransaction } from '@solana/web3.js';

async function main() {
  const url = process.env.SOLANA_RPC || 'http://127.0.0.1:8899';
  const programId = new PublicKey(process.env.PROGRAM_ID || '11111111111111111111111111111111');
  const connection = new Connection(url, 'confirmed');
  const payer = Keypair.generate();

  // Airdrop para localnet
  try { await connection.requestAirdrop(payer.publicKey, 1e9); } catch {}

  const ix = new TransactionInstruction({ keys: [], programId, data: Buffer.alloc(0) });
  const tx = new Transaction().add(ix);
  const sig = await sendAndConfirmTransaction(connection, tx, [payer]);
  console.log('Sent TX', sig);
}

main().catch(console.error);

