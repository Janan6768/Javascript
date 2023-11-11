//-------array

const array = [1,2,3,4,5]

const array2 = new Array(1,2,3,4)
// console.log(array[0]);

//--------array methods

array.push(6)
array.push(7,8,9,10)
array.pop()
// console.log(array);

// console.log(array.includes(10));

//--------if not exist the index it tell you (-1)

// console.log(array.indexOf(9));
// console.log(array.indexOf(19));

const newArray = array.join()
// console.log(array);
// console.log(newArray);

// console.log(typeof newArray);

// console.log("A " , array);
const nA1 = array.slice(1,3)
// console.log(nA1);

// console.log("B " , array);
const nA2 = array.splice(1,3)
// console.log("C " , array);
// console.log(nA2);

const myHeroes1 = ["Ironman", "Spiderman", "Dr.strange"]
const myHeroes2 = ["Thor", "Hulk", "Wonderwomen"]

//myHeroes1.push(myHeroes2)
// console.log(myHeroes1);

// console.log(myHeroes1[2][2]);

// const allHeroes = myHeroes1.concat(myHeroes2)
// console.log(allHeroes);

//-------(Spread opreator) for murging multiple array

const all_new_Heroes = [...myHeroes1,...myHeroes2]
// console.log(all_new_Heroes);

const new_Array = [1,2, [3,4,[5,6,[7,8,9]]]]

const useble_Array = new_Array.flat(Infinity);
// console.log(useble_Array);

// console.log(Array.isArray("Janan"));
// console.log(Array.from("Janan"));
//console.log(Array.from({name : "Janan"}));  //--Intresting -----/if not define key or value its give you null value/----

let score1 = 100
let score2 = 200
let score3 = 300

//console.log(Array.of(score1,score2,score3));

//------------------------------- Practice-----------------------
const a = ["Janan", 28, "Pakistani"]
//console.log(a);

const b = new Array(1,2,3,4,5,)
//console.log(b);

//push
b.push(7,8,9,10)

//pop
b.pop()

let c =[...a,...b]
//console.log(typeof(c));

//For loop
for(i=0;i<all_new_Heroes.length;i++){
  //console.log(all_new_Heroes[i])
}

//for of
for(let name of all_new_Heroes){
    //console.log(name);
}

//for-Each

all_new_Heroes.forEach(function(name,index){
   // console.log(index,name)
})

//join

let myName = ['J','A','N','A','N']
//console.log(myName.join(''));

let cities = 
[
    {name:'karachi', population:20000},
    {name:'Islamabad', population:30000},
    {name:'Lahore', population:29000},
    {name:'Punjab', population:40000}
]

//console.log(cities.filter(city => city.population  >= 30000));