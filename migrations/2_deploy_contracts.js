var IERC20 = artifacts.require("./contracts/IERC20");
var SafeMath = artifacts.require("SafeMath");
var ERC20 = artifacts.require("ERC20");
var ERC20Detailed = artifacts.require("ERC20Detailed");
var MinterRole = artifacts.require("MinterRole");
var ERC20Mintable = artifacts.require("ERC20Mintable");
var ERC20Burnable = artifacts.require("ERC20Burnable");
var Pausable = artifacts.require("Pausable");
var ERC20Pausable = artifacts.require("ERC20Pausable");

var VitaToken = artifacts.require("VitaToken");

module.exports = function(deployer) {
    deployer.deploy(IERC20);
    deployer.deploy(SafeMath);
    deployer.deploy(ERC20);
    deployer.deploy(ERC20Detailed, {name:"Vita Token",  symbol:"VITA", decimals: 18});
    deployer.deploy(MinterRole);
    deployer.deploy(ERC20Mintable);
    deployer.deploy(ERC20Burnable);
    deployer.deploy(Pausable);
    deployer.deploy(ERC20Pausable);
    deployer.deploy(VitaToken, {name:"Vita Token",  symbol:"VITA", decimals: 18});
}