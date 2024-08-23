const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superhero", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][0]);

const heros = marvel_heros.concat(dc_heros)    // return new array
// console.log(heros);

const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros);

const arr = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [11, 12, 13, [14, 15]]]]
// const real_arr = arr.flat(2)
const real_arr = arr.flat(Infinity)
console.log(real_arr);


console.log(Array.isArray("Aayush"))
console.log(Array.from("Aayush"))
console.log(Array.from({name: "Aayush"}))       // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
