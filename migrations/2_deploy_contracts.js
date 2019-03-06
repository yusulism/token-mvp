var VitaToken = artifacts.require("VitaToken");

module.exports = function(deployer) {
    deployer.deploy(VitaToken);
};