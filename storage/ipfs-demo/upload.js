import fs from 'fs';
import { create, urlSource } from 'ipfs-http-client';
import 'dotenv/config';

async function main() {
  const endpoint = process.env.IPFS_ENDPOINT || 'https://ipfs.infura.io:5001';
  const projectId = process.env.IPFS_PROJECT_ID;
  const projectSecret = process.env.IPFS_PROJECT_SECRET;
  const auth = projectId && projectSecret ? 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64') : undefined;

  const client = create({ url: endpoint + '/api/v0', headers: auth ? { authorization: auth } : {} });

  const filePath = process.argv[2];
  if (!filePath) throw new Error('Uso: node upload.js <path-a-archivo>');

  const file = fs.readFileSync(filePath);
  const { cid } = await client.add({ path: filePath, content: file });
  console.log('CID:', cid.toString());
}

main().catch((e) => { console.error(e); process.exit(1); });

