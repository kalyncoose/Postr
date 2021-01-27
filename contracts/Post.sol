pragma solidity ^0.5.0;

contract Post {
    event StorageSet(string _message);

    string public storedData;

    function post(string memory x) public {
        storedData = x;
        emit StorageSet("Posted!");
    }
}
