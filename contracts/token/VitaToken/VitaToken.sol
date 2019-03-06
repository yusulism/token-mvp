pragma solidity ^0.5.2;

import "./ERC20.sol";
import "./ERC20Detailed.sol";
import "./ERC20Mintable.sol";
import "./ERC20Burnable.sol";
import "./ERC20Pausable.sol";

contract VitaToken is ERC20, ERC20Detailed, ERC20Mintable, ERC20Burnable, ERC20Pausable {
    
    uint private INITIAL_SUPPLY = 1000000000; 

    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals 
    ) 
        ERC20()
        ERC20Detailed(name, symbol, decimals)
        ERC20Mintable()
        ERC20Burnable()
        ERC20Pausable()
    public {
        mint(msg.sender, INITIAL_SUPPLY);
    }
}