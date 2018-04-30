// pragma solidity ^0.4.17;
// // We have to specify what version of compiler this code will compile with

// contract Payment {
//   /* mapping field below is equivalent to an associative array or hash.
//   */
  
//   mapping (bytes32 => uint8) public paymentReceived;
  
//   /* We will use an array of bytes32 to store the list of movies
//   */
  
//   bytes32[] public activityList;

//   /* This is the constructor which will be called once when you
//   deploy the contract to the blockchain. When we deploy the contract,
//   we will pass an array of movies for which users will give ratings
//   */
//   function paymentsTest (bytes32[] activityNames) public {
//     activityList = activityNames;
//   }

//   // This function returns the total payment received for this activity
//   function totalPaymentFor(bytes32 activity) view public returns (uint8) {
//     return paymentReceived[activity];
//   }

//   // This function increments the vote count for the specified movie. Equivalent to upvoting
//   function payForActivity(bytes32 activity) public {
//     paymentReceived[activity] += 1;
//   }
// }


pragma solidity ^0.4.17;

contract Payment {
address[16] public activity;


function pay(uint activityId) public returns (uint) {
require(activityId >= 0 && activityId <= 15);

activity[activityId] = msg.sender;

return activityId;
}


// Retrieving the adopters
function getPayments() public view returns (address[16]) {
return activity;
}


}
