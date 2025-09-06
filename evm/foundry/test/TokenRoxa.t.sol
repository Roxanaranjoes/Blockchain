// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
import "forge-std/Test.sol";
import {TokenRoxa} from "../src/TokenRoxa.sol";

contract TokenRoxaTest is Test {
    TokenRoxa token;
    address user = address(0xBEEF);

    function setUp() public {
        token = new TokenRoxa();
    }

    function testMintRequiresRole() public {
        vm.expectRevert();
        token.mint(user, 1);
    }
}

