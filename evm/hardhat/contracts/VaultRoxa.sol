// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

// Vault simple con protección de reentrancy y patrón CEI.

import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

contract VaultRoxa is ReentrancyGuard, AccessControl {
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    mapping(address => uint256) public balances;
    bool public paused;

    event Deposited(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    event Paused(bool paused);

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(PAUSER_ROLE, msg.sender);
    }

    modifier whenNotPaused() {
        require(!paused, "PAUSED");
        _;
    }

    function setPaused(bool v) external onlyRole(PAUSER_ROLE) {
        paused = v;
        emit Paused(v);
    }

    function deposit() external payable whenNotPaused {
        require(msg.value > 0, "ZERO");
        balances[msg.sender] += msg.value; // Effects
        emit Deposited(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) external nonReentrant whenNotPaused {
        require(amount > 0, "ZERO");
        require(balances[msg.sender] >= amount, "BAL_LOW");
        balances[msg.sender] -= amount; // Effects primero
        emit Withdrawn(msg.sender, amount);
        (bool ok, ) = msg.sender.call{value: amount}(""); // Interactions al final
        require(ok, "SEND_FAIL");
    }
}

