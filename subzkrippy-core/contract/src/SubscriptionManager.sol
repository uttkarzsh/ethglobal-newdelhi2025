//SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

contract SubscriptionManager {
    struct Plan {
        string name;  
        uint256 price;        
        uint256 duration;     
        address merchant;     
        bool exists;
    }

    mapping(bytes32 => Plan) public plans;
    error SubscriptionManager_PlanAlreadyExists();
    error SubscriptionManager_PlanDoesNotExist();
    error SubscriptionManager_SubscriptionInactive();

    struct Subscription {
        bytes32 proofHash;
        uint256 startTime;
        uint256 endTime;
        bool active;
    }

    mapping(bytes32 => mapping(bytes32 => Subscription)) public subscriptions;

    function createPlan(string calldata name, uint256 price, uint256 durationInDays) public {
        bytes32 planId = keccak256(abi.encodePacked(msg.sender, name));
        if(plans[planId].exists){
            revert SubscriptionManager_PlanAlreadyExists();
        }
        
        plans[planId] = Plan({
            name: name,
            price: price,
            duration: durationInDays * 24 * 3600,
            merchant: msg.sender,
            exists: true
        });
    }

    function subscribe(bytes32 planId, bytes32 userId, bytes32 proofHash) external{
        Plan memory plan = plans[planId];
        if(!plan.exists){
            revert SubscriptionManager_PlanDoesNotExist();
        }

        uint256 startTime = block.timestamp;
        uint256 endTime = startTime + plan.duration;

        subscriptions[planId][userId] = Subscription({
            proofHash: proofHash,
            startTime: startTime,
            endTime: endTime,
            active: true
        });
    }

    function renewSubscription(bytes32 planId, bytes32 userId, bytes32 newProofHash) external {
        Plan memory plan = plans[planId];
        if(!plan.exists){
            revert SubscriptionManager_PlanDoesNotExist();
        }
        
        Subscription storage sub = subscriptions[planId][userId];

        if(!sub.active){
            revert SubscriptionManager_SubscriptionInactive();
        }

        uint256 currentEnd = sub.endTime;
        uint256 newEndTime = block.timestamp > currentEnd ? block.timestamp + plan.duration : currentEnd + plan.duration;

        sub.endTime = newEndTime;
        sub.proofHash = newProofHash;
    }
}