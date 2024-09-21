const accountId = 4447877
let accountEmail = "navlesh@gmail.com"
var accountPassword = "123264"
let accountState
// not used in var because of issue in block of scope and functional scope
// accountId = 2; not allowed
// console.log(accountId);
accountEmail = "hbsah@gmail.com"
accountPassword = "78945465"
accountCity = "patna"

console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountState]);

// "user strict" treat all js code as never version

console.log(typeof undefined);// output - undefined
console.log(typeof null); // output // object
// let veryBigNumber = 548941115454115415148745411421154142120121212102110154541212;
// console.log(veryBigNumber);
let veryBigNumber = 548941115454115415148745411421154142120121212102110154541212n;
console.log(veryBigNumber);
let socialHandles={
        fb : "null",
        insta : 458964,
        linkedin : 54541,
        x : 5000

};

let x = 10;
let y = 20;
console.log(x+y);

console.log(x-y);

console.log(x*y);
console.log(x/y);
console.log(x**y);
console.log(x%y);




