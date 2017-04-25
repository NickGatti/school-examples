function addition(x, y){
    this.x = x;
    this.y = y;
    // console.log(this);
}

var inputX = 1;
var inputY = 4;

let addFn = new addition(inputX, inputY);
// console.log(addFn.x + ' and ' + addFn.y);

//OOB

function outerFn() {
    this.anotherFn = function(msg) {
        //stuff out of this function can use this
        // console.log(msg);
    };
    let innerFn = () => {
        //stuff only in this function can only use this
        // console.log('Started');
    };
    innerFn();
}

const newFn = new outerFn();

var status = 'working';
newFn.anotherFn(status);