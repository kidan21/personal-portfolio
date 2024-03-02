const numbers = [2, 4, 60, 8, 10];
const average = numbers.reduce( (a, b) => {
    return a + b
});
const result = average / numbers.length;
console.log(result);