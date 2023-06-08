const {expect} = require('chai');

let Box;
let box;

describe('test box proxy functionality',function(){
    beforeEach(async function(){
        Box = await ethers.getContractFactory('Box');
        box = await upgrades.deployProxy(Box,[10],{initializer:"store"});
        await box.deployed();
    });

    // test case
    it('retrieve - returns a value priviously initialised', async function(){
        expect((await box.retrieve()).toString()).to.equal('10');
    })
})