"use client";
import { useEffect, useState } from 'react';

export function TxStatus({ hash }: { hash?: string }) {
  const [status, setStatus] = useState<string>('');

  useEffect(() => {
    if (!hash) return;
    setStatus('Enviada…');
  }, [hash]);

  if (!hash) return null;
  return (
    <p style={{ fontSize: 12 }}>
      Tx: {hash} — {status}
    </p>
  );
}

