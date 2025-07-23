const fibonacci = function(max_step) {
//each number ( Fibonacci number ) is the sum of the two preceding numbers
// 1 1 2 3 5 8 12 20 etc...
if (max_step < 0) {
    return "OOPS"
}
let array = [0]
for (let index = 0; index < max_step; index++) {
    if (array.length < 2){
        array.push(1)
    }
    else {
        array.push(array[array.length-1] + array[array.length-2])
    }
}
return array[array.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
