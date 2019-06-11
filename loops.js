const arr = ['badger', 'beaver', 'baboon']

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
//badger, beaver, badoon

for (const e of arr) {
    console.log(e)
}
//badger, beaver, badoon

arr.forEach(v => console.log(v))
//badger, beaver, badoon

const mil = 1000000;
const arr = Array(mil);

console.time('h');

//for (let i = 0; i < arr.length; i++) {} // 11.7ms
for (let i = 0; i < mil; i++){} // 1.6ms
//for (const v of arr) {} //11.7ms
//arr.map(v => v).forEach(v => v) 2ms

// loop mil is faster the loop Array   `mil and arr.length`

console.timeEnd('h');

const equine = {horse: '🐴', cat: '🐱', unicorn: '🦄'}

for (const key of equine) {
    console.log(equine[key]);
} // undefine should v of Object.value(equine) console.log(v)

for (const key in equine) {
    console.log(equine[key])
}

for (const v of Object.values(equine)) {
    console.log(v);
}

const equine1 = new Map(
    Object.entries({horse: '🐴', cat: '🐱', unicorn: '🦄'})
) 

for (const v of equine1.values()) {
    console.log(v);
}

const faces = ['😆', '😔', '💰', '😁', '😓']

const faces = faces.filter(v => v === '💰')
console.log(faces); // ['💰']

const cleand = faces.map(v => 'hhah')
console.log(cleand) //['hhah']

//filter() map() some() every() forEach() reduce() sort() splice() indexOf()