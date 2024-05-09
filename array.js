// array method
const items = [
    {name:'Bike', price:100},
    {name:'TV', price:200},
    {name:'Album', price:10},
    {name:'Book', price:5},
    {name:'phone', price:500},
    {name:'computer', price:1000},
    {name:'keybord', price:25}

]

//1. Filter method
const filterItems = items.filter((item) => {
    return item.price <= 100
})

console.log(filterItems)

// 2. Map method 
const filterItems = items.map((item) => {
    return item.name
})
console.log(filterItems)


      /*-------example 2 of map method to find an item-------*/
  const  foundtItem = items.find((item) => {
    return item.name === 'Book'
  })
  console.log(foundtItem)


  //3.FOR EACH
    /*---------------1. iterrating over an array and each logical element---- */

    const fruits =["apple", "banana", "orange"];

    fruits.forEach(fruit =>{
        console.log(fruit)
    });

         // Output
            // apple
            // banana
            // orange




/*-----2.performing calculation or operation on each element----*/
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

numbers.forEach(number => {
  sum += number;
});

console.log(sum); 
            // Output: 15 (1 + 2 + 3 + 4 + 5)


/*----3.forEach() with object----*/
const person ={
   name: "John",
  age: 30,
  country: "USA" 
};

Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// Output:
// name: John
// age: 30
// country: USA




