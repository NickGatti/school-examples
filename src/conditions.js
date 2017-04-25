var array = [1,2,3];
var index = 0;

// ternary:

index === 0 ? console.log(array) : console.log('else-nothing');


// THIS IS THE SAME AS =>
var test = index === 0 ? 0 : 'test';
// THIS =>
var test;
if (index === 0) {
    test = 0;
} else {
    test = 'test';
}




/* Ternary:

? is then

: is else

*/