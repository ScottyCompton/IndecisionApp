const add = (a,b) => {
    //console.log(arguments);
    return a+b;
}

console.log(add(55,1,1001));

const user = {
    name: 'Scotty',
    cities: ['Dallas', 'Los Angeles', 'Jaco Costa Rica', 'Fort Worth', 'Lubbock'],
    placesLived() {
        console.log(this.name);
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });

    }
};

console.log(user.placesLived());


const multiplier = {
    numbers: [1,2,3,4,5],
    multiplier: 4,
    multiply() {
        return this.numbers.map((nbr) => this.multiplier * nbr);
    }
    // numbers - array of numbers
    // single number multiply by
    // multiply - method - returns new array with numbes multiplied
}


console.log(multiplier.multiply());