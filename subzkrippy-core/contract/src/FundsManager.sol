//SPDX_License-Identifier: MIT
pragma solidity ^0.8.30;

import { IERC20 } from "openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";

contract FundsManager{
    IERC20 public usdc;

    constructor(){
        usdc = IERC20(0xe7E15A3027b6A08d2a6a3a9dc9250E711c206767);
    }

    mapping(address => uint256) public merchantBalance;
    address[] public merchants;

    function addFunds(address user, uint256 amount) external {
        usdc.transferFrom(user, address(this), amount);
    }

    function updateMerchantBalance(uint256 amount, address merchant) external {
        if(merchantBalance[merchant] == 0){
            merchants.push(merchant);
        }
        merchantBalance[merchant] += amount;
    }

    function payMerchants() external {
        for(uint256 i = 0; i < merchants.length; i++){

            uint256 bal = merchantBalance[merchants[i]];
            if( bal == 0){ continue; }
            merchantBalance[merchants[i]] = 0;
            usdc.transferFrom(address(this), merchants[i], bal);
        }
    }

}