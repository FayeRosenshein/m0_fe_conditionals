var goodDrivingRecord = true
var isOver25 = true

if ( goodDrivingRecord === true && isOver25 === true) {
  console.log("You get a discount on your rental car");
} else if (goodDrivingRecord === false && isOver25 === false) {
  console.log("You need someone to sign the rental car for you");
} else {
  console.log("You have to pay full price for your rental car");
}
