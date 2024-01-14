import requests
import dotenv, os

dotenv.load_dotenv()

snoopdogg= '0xce90a7949bb78892f159f428d0dc23a8e3584d75'

url = f'https://api.verbwire.com/v1/nft/data/owned?walletAddress={snoopdogg}&chain=ethereum&tokenType=nft721&sortDirection=ASC&limit=1000&page=1'
verbwire_key = os.getenv('VERBWIRE_API_KEY')
headers = {
    "accept": "application/json",
    "X-API-Key": verbwire_key
}

response = requests.get(url, headers=headers)

print(response.text)