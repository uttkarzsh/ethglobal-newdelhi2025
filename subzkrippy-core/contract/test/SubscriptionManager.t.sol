// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.30;

import {Test} from "forge-std/Test.sol";
import {SubscriptionManager} from "../src/SubscriptionManager.sol";

contract CounterTest is Test {
    SubscriptionManager public contract;

    function setUp() public {
        contract = new SubscriptionManager();
    }

}
