
var arrayjs = [100, 20, 32, 43, 51, 89, 54, 99,100,100,100,100,100,20,32,43,34,43,43,43,43];

const occurences = {};

arrayjs.forEach(element => {
    if (occurences[element]) {
        occurences[element] += 1;
    } else {
        occurences[element] = 1;
    }
});

console.log(occurences)
