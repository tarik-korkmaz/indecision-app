// const square = function (x) {
//     return x * x;
// }

// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));

const getFirstName = (name) => {
    if(name){
        return name.split(' ')[0];
    }
};
console.log(getFirstName('Tarik Korkmaz'));

const getFirstName2 = (name) => name.split(' ')[0];
console.log(getFirstName2('Tarik Korkmaz')); 