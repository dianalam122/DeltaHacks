require('dotenv').config()
const sdk = require('api')('@verbwire/v1.0#cfbl71zelo76w7am');

sdk.auth(`${process.env.VERBWIRE_API_KEY}`);
sdk.getNftDataOwned({
    walletAddress: '0x85369Ea2CADe67F2ad286f9d23C5BFbC19B0E406',
    chain: 'ethereum',
    tokenType: 'nft721',
    sortDirection: 'ASC',
    limit: '1000',
    page: '1'
})
    .then(({ data }) => console.log(data))
    .catch(err => console.error(err));