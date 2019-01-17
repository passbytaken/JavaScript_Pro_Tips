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
for (let i = 0; i < arr.length; i++) {

}

console.timeEnd('h');

const equine = {horse: '🐴', cat: '🐱', unicorn: '🦄'}

for (const key of equine) {
    console.log(equine[key]);
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
console.log(faces); //['💰']