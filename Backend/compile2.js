const path=require('path');
const fs=require('fs-extra');
const solc=require('solc');

const buildPath=path.resolve(__dirname,'..','frontend','src','abi');

fs.removeSync(buildPath);

 const contractpath=path.resolve(__dirname,'contracts','contract.sol');
 const source=fs.readFileSync(contractpath,'utf8');
 const output=solc.compile(source,1).contracts;

fs.ensureDirSync(buildPath);

for(let contract in output) {
    fs.outputJsonSync(
      path.resolve(buildPath,contract.replace(':','') +'.json'),
      output[contract]
    );
}