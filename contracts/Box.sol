// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract Box{
    uint256 private value;
    
    // emitted when the stored value changes
    event valueChanged(uint256 newValue);

    // stores a new value in the smart contract state variable
    function store(uint256 newValue) public {
        value = newValue;
        emit valueChanged(newValue);
    }

    // reads the last stored value
    function retrieve() public view returns(uint256) {
        return value;
    }
}