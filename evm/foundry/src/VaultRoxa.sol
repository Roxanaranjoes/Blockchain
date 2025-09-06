// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

contract VaultRoxa is ReentrancyGuard, AccessControl {
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    mapping(address => uint256) public balances;
    bool public paused;
    constructor() { _grantRole(DEFAULT_ADMIN_ROLE, msg.sender); _grantRole(PAUSER_ROLE, msg.sender); }
    modifier whenNotPaused(){ require(!paused, "PAUSED"); _; }
    function setPaused(bool v) external onlyRole(PAUSER_ROLE){ paused = v; }
    function deposit() external payable whenNotPaused { require(msg.value>0, "ZERO"); balances[msg.sender]+=msg.value; }
    function withdraw(uint256 amount) external nonReentrant whenNotPaused { require(amount>0, "ZERO"); require(balances[msg.sender]>=amount, "BAL_LOW"); balances[msg.sender]-=amount; (bool ok,)=msg.sender.call{value:amount}(""); require(ok, "SEND_FAIL"); }
}

