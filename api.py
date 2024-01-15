import requests
import dotenv, os

dotenv.load_dotenv()

snoopdogg = '0xce90a7949bb78892f159f428d0dc23a8e3584d75'
test = '0x85369Ea2CADe67F2ad286f9d23C5BFbC19B0E406'
verbwire_key = 'pk_live_86e4136a-6d63-424e-9969-7dcff049c405'
contract_address = '0x3c3Dc19ad8f714fD7e158B8Fa4BAfF1bF98688aB'

# deploy smart contract
def deploy(name, sym):
    url = "https://api.verbwire.com/v1/nft/deploy/deployContract"

    payload = f"-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"chain\"\r\n\r\ngoerli\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"contractType\"\r\n\r\nnft1155\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"contractCategory\"\r\n\r\nsimple\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"isCollectionContract\"\r\n\r\ntrue\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"contractName\"\r\n\r\n{name}\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"contractSymbol\"\r\n\r\n{sym}\r\n-----011000010111000001101001--\r\n\r\n"
    headers = {
        "accept": "application/json",
        "content-type": "multipart/form-data; boundary=---011000010111000001101001",
        "X-API-Key": verbwire_key
    }

    response = requests.post(url, data=payload, headers=headers)

    print(response.text)


# create token

def create_tokens(quantity, contract, recip=''):
    url = "https://api.verbwire.com/v1/nft/mint/createToken1155"

    payload = "-----011000010111000001101001\r\n""Content-Disposition: form-data; name=\"allowPlatformToOperateToken\"\r\n\r\ntrue\r\n-----011000010111000001101001\r\n"\
            "Content-Disposition: form-data; name=\"chain\"\r\n\r\ngoerli\r\n-----011000010111000001101001\r\n"\
                f"Content-Disposition: form-data; name=\"tokenInitialSupply\"\r\n\r\n{quantity}\r\n-----011000010111000001101001\r\n"\
                    f"Content-Disposition: form-data; name=\"contractAddress\"\r\n\r\n{contract}\r\n-----011000010111000001101001\r\n"#\
                        #f"Content-Disposition: form-data; name=\"recipientAddress\"\r\n\r\n{recip}\r\n-----011000010111000001101001--\r\n\r\n"
    headers = {
        "accept": "application/json",
        "content-type": "multipart/form-data; boundary=---011000010111000001101001",
        "X-API-Key": verbwire_key
    }

    response = requests.post(url, data=payload, headers=headers)

    print(response.text)

# set mint price
def set_mint_price(contract, price): # in Wei
    url = "https://api.verbwire.com/v1/nft/update/setMintPrice"

    payload = "-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"chain\"\r\n\r\ngoerli\r\n-----011000010111000001101001\r\n"\
        f"Content-Disposition: form-data; name=\"contractAddress\"\r\n\r\n{contract}\r\n-----011000010111000001101001\r\n"\
            f"Content-Disposition: form-data; name=\"mintPriceInWei\"\r\n\r\n{price}\r\n-----011000010111000001101001--\r\n\r\n"
    headers = {
        "accept": "application/json",
        "content-type": "multipart/form-data; boundary=---011000010111000001101001",
        "X-API-Key": verbwire_key
    }

    response = requests.post(url, data=payload, headers=headers)

    print(response.text)


# get contract balance
def balance(contract):
    url = f"https://api.verbwire.com/v1/nft/userOps/contractBalance?contractAddress={contract}&chain=goerli"

    headers = {
        "accept": "application/json",
        "X-API-Key": verbwire_key
    }

    response = requests.get(url, headers=headers)

    print(response.text)

def main():
    print(verbwire_key)
    deploy('test','t')

if __name__ == '__main__':
    main()