// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.30;

import { Script } from "forge-std/Script.sol";
import {SubscriptionManager} from "../src/SubscriptionManager.sol";

contract SubscriptionScript is Script {
    SubscriptionManager public subscriptionManager;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        subscriptionManager = new SubscriptionManager();

        vm.stopBroadcast();
    }
}
