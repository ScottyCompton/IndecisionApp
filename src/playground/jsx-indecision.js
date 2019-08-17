class Person {
    constructor(name='Anonymous', age=0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        //return 'Hi I am ' + this.name + '!';
        return `Hi I am ${this.name}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}


class Student extends Person {
    constructor(name,age,major) {
        super(name,age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += ` There major is ${this.major}`;
        }
        return description;
    }
}


class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if(this.hasHomeLocation()) {
            greeting += ` I am visting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}

const me = new Student('Scotty',18, 'Computer Science');
const other = new Student();
const traveler = new Traveler('Scotty', 53, 'Dallas');
const unknownTraveler = new Traveler();

console.log(me.getDescription());
console.log(other.getDescription());
console.log(traveler.getGreeting());
console.log(unknownTraveler.getGreeting());


