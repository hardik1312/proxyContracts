// scripts/prepare_upgrade.js
async function main() {
    const proxyAddress = '0x839b158bE33322fAAC7a2730930a97Ae01b7f27D';    // This is the proxy address NOT the admin of the proxy.
   
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Preparing upgrade...");
    const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2);
    console.log("BoxV2 at:", boxV2Address);
  }
   
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });