const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider( 
	'pudding depend usual nest tennis wide expire wreck north critic famous object', 'https://rinkeby.infura.io/v3/7a2abee48e8c4fc1b82156537ab58b77' );

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log('Attempting to deploy from account', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(interface))
	               .deploy({ data: bytecode })
	               .send({ gas: '3000000', from: accounts[0] });
	
	console.log('Contract deployed to', result.options.address);
};

deploy();
