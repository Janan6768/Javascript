const UserEmail = [];

if (UserEmail) {
    //console.log('Got User Email');
}
else {
  //  console.log("Dont't have an Email");
}

//false Values
// -----------------> false, 0, -0, "", undefined, NaN, BigInt 0n, null

// True values
// -----------------> 'false', '0', ' ', [], {}, function(){},


// check Array is Empty or not
if (UserEmail.length === 0) {
  //  console.log("Array Is Empty");
}

// check Object is Empty or not
const emptyobj = {}
if (Object.keys(emptyobj).length === 0) {
   // console.log("Object Is Empty");
}

// Nulish coalescing Operator ---> ?? ----> null , undefined
// Using for Saftey Checking....

let val1 = 5 ?? 10
// console.log(val1);

let val2 = null ?? 10
// console.log(val2);

let val3 = undefined ?? 20
// console.log(val3);

//terniary Operator
//Condition ? true:false

const teaPrice = 90;
teaPrice < 80 ? console.log("Less Then 80") : console.log('Price is Greater then 80');
teaPrice < 80 ? console.log("Less Then 80") : teaPrice == 90 ? console.log("Price Is Equal to 90"): console.log('Price is Greater then 90');
