
// ----------singleton
// ----------object.create


//-----------Object Literal

const mySym = Symbol('key1');
const JsUser = {
    name: 'Janan',
    age: 28,
    city: 'Karachi',
    email: '02.95.janan@gmail.com',
    [mySym]: 'mykey1',
    isLogedIn: false,
    lastLogedInDays: ['saturday', 'Monday']
   
}
//console.log(JsUser[mySym]);

JsUser.greeting = function(){
    //console.log('Hello JS Users');
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
   // console.log(`Hello Js User, ${this.name}`);
}

//console.log(JsUser.greetingTwo());

const Tinder = new Object()
Tinder.id = 1,
Tinder.myName = 'Brother'

//console.log(Tinder);

//-------
const myTinder = {}
myTinder.id = 2,
myTinder.name = 'Khan'

//console.log(myTinder);

const regularUser = {
    email: 'google@gmail.com',
    fulname: {
        fName: 'Janan',
        lName: 'Khan'
    }
}
//console.log(regularUser.fulname.lNamegit);

const car = {
    make : 'Toyota',
    model : 'camrey',
    start : function(){
        console.log('Engine Started...');
    },
    stop(){
        console.log('Engine Stoped...');
    },
};
car.start();
car.stop();