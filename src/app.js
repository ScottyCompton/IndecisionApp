import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';


ReactDOM.render(<IndecisionApp />,document.getElementById('app'));


class OldSyntax {
    constructor(props) {
        this.name = "Mike";
    }
}


const oldSyntax = new OldSyntax();
console.log(oldSyntax);


// ---------------------------

class NewSyntax {
    name = "Jen";
    getGreeting = () => {
        return `Hi, my name is ${this.name}.`;
    }
}

const newSyntax = new NewSyntax();
const getGreeting = newSyntax.getGreeting;
console.log(getGreeting());