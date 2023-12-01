//function

function myName() {
console.log('J');
console.log('A');
console.log('N');
console.log('A');
console.log('N');
}
//myName();

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1+number2
    
}
const result = addTwoNumbers(7,8);
//console.log('Result: ',result);


function loginUser(username){
    if(!username)
    {
        console.log('Enter Your Name!');
        return
    }
    return `${username} Just Logged In....`
}
//console.log(loginUser('Janan Khan'));
//console.log(loginUser());

//Used object in function 
const user = {
    UserName: 'Khan',
    UserAge: 28
}
function handleObj(anyobject){
   // console.log(`User Name is ${anyobject.UserName} and price is ${anyobject.UserAge}`);
}
// handleObj(user);

//2nd way Used object in Function

handleObj({
    UserName: 'Ali',
    UserAge: 26
});

//Array in function
const myNewArray = [200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));

function calculatePrice(num1){
    return num1
}
//console.log(calculatePrice(200));

//using rest operator
function calculatePrice2(...num1){
    return num1
}
//console.log(calculatePrice2(200,300,400));

// Basic arrow function
//   () => {}

const add = (num1,num2) => {
    return num1 + num2;
}
// console.log(add(3,7));

const AddNumber = (n1,n2) => n1 + n2;
// console.log(AddNumber(2,5));

const addNum = (num1,num2) => (num1 + num2)
// console.log(addNum(8,3));

const num = (num1,num2) => ({name: 'Janan'})
//console.log(num());


//Immediatly Invoked function Expression -> IIFE

(function chai(){
    console.log(`DB Connected`);
})();
( () => {console.log(`DB connected with Arrow Function`);})();
