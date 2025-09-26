// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.30;

import {Test} from "forge-std/Test.sol";
import {SubscriptionManager} from "../src/SubscriptionManager.sol";

contract SubscriptionTest is Test {
    SubscriptionManager public subscriptionManager;

    function setUp() public {
        subscriptionManager = new SubscriptionManager();
    }

}
