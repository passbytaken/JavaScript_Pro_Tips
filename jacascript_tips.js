
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

//template-literals.js

const horse = {
    name: 'Topher',
    size: 'large',
    skills: ['jousting','racing'],
    age: '17'
}

//shit code 

let bio = horse.name + ' is a ' + horse.size + 'hourse skilled in ' + horse.skills.join(' & ')

//good code 

const {name, size, skills} = horse;

bio = `${name} is a ${size} skilled in ${skills.join(' & ')}`

console.log(bio);

//Advanced Tag Example 

function hourseAge(str, age) {
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`;
}

const bio2 = hourseAge `This hourse is ${hourse.age}`;

//polymer project

//Spread Syntax

const pikachu = {name: 'Pikachu'};
const stats = {hp: 40, attack: 60, defense: 45};

//shit code 

pikachu['hp'] = stats.hp
pikachu['attack'] = stats.attack
pikachu['defense'] = stats.defense

//OR

const lvl0 = Object.assign(pikachu, stats)
const lvl1 = Object.assign(pikachu, {hp: 45})

//good code 

const lvl0 = { ...pikachu, ...stats }
const lvl1 = { ...pikachu, hp: 45 }

//Arrays

let pokemon = ['Arbok', 'Raichu', 'Sandshrew']

//bad Array code 
pokemon.push('Bulbasaur')
pokemon.push('Metapod')
pokemon.push('Weedle')
//good array code 
//push 
pokemon = [ ...pokemon, 'Bulbasaur', 'Metapod', 'Weedle']
//Shift
pokemon = ['Bulbasaur', 'Metapod', 'Weedle', ...pokemon]

//loops

//bad loop code 
const total = 0;
const withTax = [];
const highValue = [];
for (i = 0; i < orders.length; i++) {
    //Reduce
    total += orders[i];

    //Map
    withTax.push(orders[i] * 1.1);

    //Filter
    if (orders[i] > 100)  {
        highValue.push(order[i]);
    }
}

//good 
const total = orders.reduce((acc, cur) => acc + cur)

//Map
const withTax = orders.map(v => v* 1.1)

//Filter
const highValue = orders.filter(v => v > 100);

//Async/Await
const random = () => {
    return Promise.resolve(Math.random())
}

//bad
const sumRandomAsyncNums = () => {
    let first;
    let second;
    let third;

    return random()
        .then(v => {
            first = v;
            return random();
        })
        .then(v => {
            second = v;
            return random();
        })
        .then(v => {
            third = v;
            return random();
        })
}

//good

const sumRandomAsyncNums = async() => {

    const first = await random();
    const second = await random();
    const third = await random();
    console.log(`Result ${first} + ${second} + ${third}`);
    if (await random()) {}
    //OR
    const randos = Promise.all([
        random(),
        random(),
        random()
    ])
    for (const r of await randos) {
        
    }
}