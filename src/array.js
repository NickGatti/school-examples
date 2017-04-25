const newArray = [
    {key: 'value'}, //object
    [1,2,3],        //array inside arrary
    'string',       //string
    1000,           //number              
    function fn() { return 'fn'; }   //function in arrary
    ];
    
// console.log(newArray);

// console.log(newArray[4]());

let arrayTwo = [1, 2, 3, 4, 5];

// arrayTwo.forEach(function(element, i, arrayTwo){
    
// })


arrayTwo.forEach(function(element){  // GENERALLY THIS
    // console.log(element);
})

let mappedArray = arrayTwo.map((n) => {
    return n + 10;
})
// console.log(mappedArray);

// console.log(mappedArray.filter((a) => {
//     return a > 12;
// }));


// let mappedArray = arrayTwo.map((n) => {   // CHAINING METHODS
//     return n + 10;
// }).filter((a) => { 
//     return ma => 12;
// })

arrayTwo.reduce(function(int, itr) {
    // console.log(int + " and " + itr);
    return int + itr;
}, 0);