import os
import requests
from dotenv import load_dotenv

load_dotenv()
WEBHOOK_URL = os.getenv('WEBHOOK_URL')

def send(msg: str):
    if not WEBHOOK_URL:
        print('Definir WEBHOOK_URL')
        return
    try:
        requests.post(WEBHOOK_URL, json={"text": msg}, timeout=10)
        print('Alerta enviada')
    except Exception as e:
        print('Error enviando alerta', e)

if __name__ == '__main__':
    send('Demo alerta: todo listo 🚀')
