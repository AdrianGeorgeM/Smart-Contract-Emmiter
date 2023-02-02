// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
interface WinnerContract {
    function attempt() external;
}

contract EmitEvent {
    // This is the event that will be emitted when the function is called from the other contract 
    function sendAttempt(address _contract) public {
        WinnerContract(_contract).attempt();
    }
}

