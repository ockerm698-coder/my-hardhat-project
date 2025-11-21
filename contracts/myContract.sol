// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.20;

import "hardhat/console.sol";

contract MyContract {
    string public message;

    constructor(string memory _message) {
        message = _message;
        console.log("message:",message);
    }
}