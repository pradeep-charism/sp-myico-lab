pragma solidity ^0.5.8;
import 'openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol';
contract MyToken is ERC20Mintable {
string public name = "pradtoken";
string public symbol = "PKT";
uint8 public decimals = 18;
}