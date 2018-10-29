
const foo = {name: 'tom', age:30, nervous:false };
const bar = {name: 'dick', age:40, nervous:false };
const baz = {name: 'harry', age:50, nervous:true };


//shit code 💩
console.log(foo);


//good code 😀

console.log("%c My Friends”, “color : orange; front-weight: bold")
console.log({foo, bar, baz})
console.table([foo,bar,baz])


console.time("looper");

while(i<10000){i++}

console.timeEnd("looper")

//  重要的方法例如删除，不被意外的执行两次

 const deleteMe = () => console.trace('bye bye database');

 deleteMe()
 deleteMe()


//  destructuring.js
const turtle = {
    name: 'Bob',
    meal: 10,
    diet: 'berries'
    //...
}

//shit code 💩

function feed(animal) {
    return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`;
}

//good code 😀

function feed({name,meal,diet}) {
    return `Feed ${name} ${meal} kilos of ${diet}`;
}
//OR

function feed(animal) {
    const {name,meal, diet} = animal
    return `Feed ${name} ${meal} kilos of ${diet}`;
}

