const argumentsArray = require("../arguments.js");
async function main(){
    let delayTime = argumentsArray[0];
    let proposersArray = argumentsArray[1];
    let executorsArray = argumentsArray[2];

    const[deployer] = await ethers.getSigners();
    console.log(
        "Deploying contracts with the account: ",
        deployer.address
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Token = await ethers.getContractFactory("TimelockContoller");
    const token = await Token.deploy(delayTime, proposersArray, executorsArray);

    console.log("Timelock address: ", Token.address);
}

main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
})