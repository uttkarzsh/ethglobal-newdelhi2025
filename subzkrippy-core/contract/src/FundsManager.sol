//SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;


contract FundsManager{
  

    mapping(address => uint256) public merchantBalance;
    address[] public merchants;

    function addFunds() payable external {
    }

    function updateMerchantBalance(uint256 amount, address merchant) external {
        if(merchantBalance[merchant] == 0){
            merchants.push(merchant);
        }
        merchantBalance[merchant] += amount;
    }

    function payMerchants() external {
        for(uint256 i = merchants.length; i >=0; i--){
            address m = merchants[i];
            uint256 bal = merchantBalance[m];
            merchants.pop();
            merchantBalance[m] = 0;
            (bool sent,) = payable(m).call{value: bal}("");
            require(sent, "Failed to send Ether");
        }
    }

}