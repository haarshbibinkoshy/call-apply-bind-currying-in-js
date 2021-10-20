//call, apply, bind

// let obj={x:2}
// function add(a,b) {
//     return this.x+a+b;
// }
// let arr=[2,4]
// console.log(add.call(obj,2,4));
// console.log(add.apply(obj,arr)); 
// let bound= add.bind(obj,2,4);
// console.log(bound());


// let student={age:20}
// function printAge() {
//     console.log(this.age);
// }
// let print= printAge.bind(student) 
// print()

// currying
//using bind method
// function multiply(x,y) {
//     console.log(x*y);
// }
// let multiplyByTwo=multiply.bind(this,2)
// // multiplyByTwo(5)
// // multiplyByTwo(3,5)
// let multiplyByThree=multiply.bind(this,3)
// multiplyByThree(5)


//using closure
function multiply(x){
    return function(y){
        console.log(x*y); 
    }
}
let multiplyByTwo=multiply(2)
multiplyByTwo(5)
let multiplyByThree=multiply(3)
multiplyByThree(5)