import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
let paymentABI = '[{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"paymentReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"activityList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"activityNames","type":"bytes32[]"}],"name":"paymentsTest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"activity","type":"bytes32"}],"name":"totalPaymentFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"activity","type":"bytes32"}],"name":"payForActivity","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'
let paymentAddress = '0x631fae2f41346afe3e646729ea07ce73b112bf37';
web3.eth.defaultAccount = web3.eth.accounts[0]


const paymentContract = web3.eth.contract(paymentABI).at(paymentAddress);
export { paymentContract };