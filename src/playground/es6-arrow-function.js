/*

const square = function(x) {
    return x*x;
};

const squareArrow = (x) => {
    return x*x;
};

const squareArrow = (x) => x*x;

console.log(squareArrow(4));

*/


//const fullName = 'Scott Lonis';

const getFirstNameConcise = (fullName) => fullName.split(' ')[0];

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Scott Lonis'));
console.log(getFirstNameConcise('Fred Grabopple'));