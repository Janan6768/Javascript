const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descripter);

// console.log(Math.PI);
// Math.PI = 7;
// console.log(Math.PI);


const detail = {
    name:'janan',
    age:28,
    isAvailable:true,

    orderDetail: function(){
        console.log('Nahi hay');
    }
}
console.log(Object.getOwnPropertyDescriptor(detail, 'age'));

Object.defineProperty(detail, 'age',{
    writable: false,
    enumerable:false,
    configurable:false
})
console.log(Object.getOwnPropertyDescriptor(detail, 'age'));

for (const [key,value] of Object.entries(detail)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
