// Load env 
require('dotenv').config()

const { INFURA_ID } = process.env
console.log(INFURA_ID)
// Infura API Endpoints for 3 networks
export default {
    "MAINNET": `https://mainnet.infura.io/v3/${INFURA_ID}`,
    "ROPSTEN": `https://ropsten.infura.io/v3/${INFURA_ID}`,
    "KOVAN": `https://kovan.infura.io/v3/${INFURA_ID}`,
}