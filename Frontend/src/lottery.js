import web3 from './web3';
import contract from './abi/Hotel.json';
const address = '0xc3a323AE487a096f4374810b595e35621DaFa81A';

export default new web3.eth.Contract(JSON.parse(contract.interface),address);


