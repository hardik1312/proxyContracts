require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.6",
  networks:{
    hardhat:{
      chainId:1337
    },
    goerli:{
      url:'https://goerli.infura.io/v3/bc0e451f336944e2b2ab25a161076ef4', 
      accounts:['ea2497681e7e98a8c0bca14f836bcf97fdc3ad9f75956acf8feefcc1c5a4d789']
    }
  }
};
