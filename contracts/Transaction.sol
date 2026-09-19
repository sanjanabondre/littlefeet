// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Transaction {

    event PaymentSent(
        address indexed sender,
        address indexed receiver,
        uint256 amount
    );

    function sendPayment(
        address payable receiver
    ) external payable {

        require(
            msg.value > 0,
            "Amount must be greater than zero"
        );

        require(
            receiver != address(0),
            "Invalid receiver address"
        );

        receiver.transfer(msg.value);

        emit PaymentSent(
            msg.sender,
            receiver,
            msg.value
        );
    }

    function getBalance()
        external
        view
        returns (uint256)
    {
        return address(this).balance;
    }
}