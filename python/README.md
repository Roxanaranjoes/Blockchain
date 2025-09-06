#+ Python scripts

Scripts prácticos con `web3.py` para leer eventos y calcular KPIs. Usa `.env` con `RPC_URL` y direcciones.

## Instalar
- `python -m venv .venv && . .venv/bin/activate` (Windows: `.venv\\Scripts\\activate`)
- `pip install -r requirements.txt`

## Scripts
- `scripts/read_events.py`: lee eventos `Transfer` y guarda `data/transfers.csv`.
- `scripts/kpis_token.py`: holders únicos, top transfers.
- `scripts/alert_tx.py`: alerta a Telegram/Slack vía webhook.

