// it is commonly used for iterating over arrays and performin operations on each element
//sybtax for Each
array.forEach(function(currentValu, index, array){
    //code to execute on each element
})


//Example 1  Basic usage
const numbers = [1, 2, 3, 4,7];

numbers.forEach(function(number){
    console.log(number)
})

                //output 1 2 3 4  7


//Example 2 Using Index
const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(function(fruit, index ){
    console.log(index + ': ' + fruit);

});
                    //output 0: apple
                    //       1: banana 
                    //       2: cherry




//Example 3 Modfying Elements
         //While 'forEacach'  does not return a new array, you can modify the elemnt within the original array

let scores = [10, 20 ,  40, 70];


scores.forEach(function(score, index, array){
    array[index] = score * 2;

});
console.log(scores);

                    //output [20,40,80, 140]


//Example 4 summing Elements

const number = [1, 2, 3, 4, 7];
let sum = 0;

numbers.forEach(function(number){
    sum += number;
});
console.log(sum);
                
                //output:   17


// Example 4  iterating Over Objects properties
const person = {
    name: 'John',
    age: 30,
    city: 'New York' 
};

Object.keys(person).forEach(function(key) {
  console.log(key + ': ' + person[key]);
});

// Output:
// name: John
// age: 30
// city: New York