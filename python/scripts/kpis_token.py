import os
import pandas as pd

def main():
    path = os.path.join('data', 'transfers.csv')
    if not os.path.exists(path):
        raise SystemExit('Ejecuta scripts/read_events.py primero')
    df = pd.read_csv(path)
    holders = set(df['to']).union(set(df['from']))
    top_receivers = df.groupby('to')['value'].sum().sort_values(ascending=False).head(10)
    print('Holders únicos:', len(holders))
    print('Top receptores:\n', top_receivers)

if __name__ == '__main__':
    main()

