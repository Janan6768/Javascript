//for loop
for (let i = 1; i <= 10; i++) {
    const element = i;
   // console.log(element);
    
};

for (let i = 1; i <=10; i++) {
    const element = i;
    if (i == 7) {
    //    console.log(`${element} : is best vlue`);
    }
   // console.log(element);
};

//print 1 to 10 tables 
for (let i = 1; i <=10; i++) {
    const element = i;
    // console.log(`\nTable of : ${i}`);
    for (let j = 1; j <=10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

//Table of two
for (let i = 1; i <=10; i++) {
    const element = i;
   // console.log(`2 * ${i} = ${2*i}`);           //first and easy way to print
   // console.log(2 + " * " + i  + " = " + i);    //Second way
}

// we used break opt to break Loop8
for (let k = 1; k <=20; k++) {
    if (k == 5) {
       // console.log(`Detected 5`);
        break
    }
   // console.log(`Value of k is : ${k}`);
    
}

//while loop
 let num = 1
while (num <= 10) {
   // console.log(num);
    num = num + 2
};

let table = 1
// console.log(`Table of five in while Loop`);
while (table <= 10) {
    //console.log(`5 * ${table} = ${5*table}`);
    table++
};

//do while loop
let score = 1  //let score = 15
do {
   // console.log(`score Is : ${score}`);
    score++
} while (score <=10);


// forof loop

const number = [1,2,3,4,5,]
for (const num of number) {
    //console.log(num);
}

const Greetings = "Hello World!"
for (const greet of Greetings) {
   // console.log(`Each char is : ${greet}`);
   // console.log(greet);
}

//remove space b/w hello world
const Greeting = "Hello World!"
for (const greet of Greeting) {
    if (greet == " ") {
        continue
    }
   // console.log(`Each char is : ${greet}`);
   // console.log(greet);
}

//Map
const map = new Map()
map.set('AFG', "Afganistan")
map.set('PAK', "Pakistan")
map.set('IND', "India")
map.set('AUS', "Australia")
//console.log(map);

//Loop on map to print value and key
for (const [key,value] of map) {
  //  console.log(`${key} --> Shortcut for : ${value}`);
}

// forof loop not working at this time on OBJECT
//lets try forin loop for object
const myobject = {
    JS: 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    php: 'Hyper text processor'
}
for (const key in myobject) {
    //console.log(`${key} Shortcut for : ${myobject[key]}`);
    }

    //foreach loop
    const coding = ['Html', 'Css', 'JavaScript', 'React', 'Php']
    coding.forEach( function (val) {
        // console.log(val);
    } )
    
    // foreach loop with arrow function
    const languages = ['Html', 'Css', 'JavaScript', 'React', 'Php']
    languages.forEach( (item) => {
        // console.log(item);
    } )

    function printMe(val) {
        //console.log(val);
    }
    languages.forEach(printMe)

//iteration Important for database 
    const myCoding = [
        {
            LanguageName: 'JavaScript',
            LanguageFileName: 'js'
        },
        {
            LanguageName: 'C++',
            LanguageFileName: 'cpp'
        },
        {
            LanguageName: 'Hyper text processor',
            LanguageFileName: 'php'
        },
    ]
    myCoding.forEach( (item) => {
       // console.log(item.LanguageFileName);
    })

    //filter
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const newnum = nums.filter( (num) => num > 6 )
    //console.log(newnum);

    //return key word is important if you used block scope
    const numbers = [1,2,3,4,5,6,7]
    const n_num = numbers.filter( (num) =>{
       return num < 5
        
    } )
    //console.log(n_num);

    //practice
    let Books = [
        { title: "The Great Gatsby", genre: "Fiction", publish: 1925, edition: 1925 },
        { title: "To Kill a Mockingbird", genre: "Classics", publish: 1995, edition: 2010 },
        { title: "wrong title", genre: "Dystopian", publish: 1949, edition: 1949 },
        { title: "Pride and Prejudice", genre: "Romance", publish: 1813, edition: 1995 },
        { title: "The Catcher in the Rye", genre: "Coming-of-age", publish: 2000, edition: 2018 }
      ];
      
      let userbooks = Books.filter( (bk) => bk.genre === 'Fiction') //in single line
      //with bolck scope
      userbooks = Books.filter( (bk) => {
        return bk.edition === 1995
    } )
      //console.log(userbooks);

      const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      const new_num = myNumbers.map( (num) => num + 10 )
     // console.log(new_num);

      const myNums = myNumbers
                    .map( (num) => num*10 )
                    .map( (num) => num+1 )
                    .filter( (num) => num>=40 )

        //console.log(myNums);


        //reduce

        // acc = Accumelator , Currval = Current Value
        //for understanding code
        //------
        // const mynum = myNumbers.reduce( function(acc,currval) {
            //  console.log(`acc: ${acc} and currval: ${currval}`);   
            //  return acc + currval
            // }, 0)
            

            //reduce method acha hay kisi inventory item k price add karney k leay
            const myTotal = myNumbers.reduce( (accumelator, curentvalue) =>  accumelator + curentvalue, 0)
           // console.log(myTotal);

            //practice //reduce

            const shoppingCart = [
                {
                    itemName: 'Js Course',
                    itemPrice: 7000
                },
                {
                    itemName: 'Php Course',
                    itemPrice: 13000
                },
                {
                    itemName: 'C# Course',
                    itemPrice: 9000
                },
                {
                    itemName: '.Net Course',
                    itemPrice: 12000
                },
            ]

            const PriceToPay = shoppingCart.reduce( (acc,item) => acc + item.itemPrice,0)
            console.log(PriceToPay);
