const numbers = [3, 4, 5, 6, 7, 9];
const output =[];

for(let i=0; i = numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);