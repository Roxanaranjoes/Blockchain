import os
import csv
from dotenv import load_dotenv
from web3 import Web3
from rich import print

load_dotenv()

RPC_URL = os.getenv("RPC_URL")
TOKEN_ADDRESS = os.getenv("TOKEN_ROXA_ADDRESS")

ABI = [
    {
        "anonymous": False,
        "inputs": [
            {"indexed": True, "internalType": "address", "name": "from", "type": "address"},
            {"indexed": True, "internalType": "address", "name": "to", "type": "address"},
            {"indexed": False, "internalType": "uint256", "name": "value", "type": "uint256"}
        ],
        "name": "Transfer",
        "type": "event"
    }
]

def main():
    assert RPC_URL, "Define RPC_URL en .env"
    assert TOKEN_ADDRESS, "Define TOKEN_ROXA_ADDRESS en .env"
    w3 = Web3(Web3.HTTPProvider(RPC_URL))
    token = w3.eth.contract(address=Web3.to_checksum_address(TOKEN_ADDRESS), abi=ABI)

    start = int(os.getenv("START_BLOCK", 0))
    end = int(os.getenv("END_BLOCK", w3.eth.block_number))
    print(f"Leyendo Transfer {start}..{end} de {TOKEN_ADDRESS}")
    logs = token.events.Transfer.get_logs(fromBlock=start, toBlock=end)

    os.makedirs("data", exist_ok=True)
    with open("data/transfers.csv", "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["blockNumber", "txHash", "from", "to", "value"])
        for e in logs:
            writer.writerow([e.blockNumber, e.transactionHash.hex(), e.args["from"], e.args["to"], e.args["value"]])
    print("OK -> data/transfers.csv")

if __name__ == "__main__":
    main()

