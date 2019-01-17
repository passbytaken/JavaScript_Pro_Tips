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
