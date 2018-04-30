var Payments = artifacts.require("./Payment.sol");

module.exports = function (deployer) {
    deployer.deploy(Payments, ['Bachelorette', 'Lawnmower'], { gas: 6700000 });
};