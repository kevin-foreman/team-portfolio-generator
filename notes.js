
/*    Clean Code S.O.L.I.D    */

// **Single Responsibility Principle**

// **Open/Closed Princiiple**

// **Liskov Substitution Principle**

// **Interface Segregation Principle**

// **Dependency Inversion Principle**

var car1 = {
    make: "toyota",
    model: "prius",
    year: "2007",
    color: "grey",
};

function Car(make, model, year, color) {  // with this construcor, each car created will have these properties stored as an object
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;

    // this.printInfo = function(){} // Don't do this inside of a constructor
    // THIS CREATES MORE OVERHEAD, THUS POTENTIAL MEMORY ISSUES
}

var car2 = new Car("ford", "mustang-e", "2020", "midnight-blue");

console.log(car2);

Car.prototype.printInfo = function(){
    console.log(`${this.make} ${this.model} ${this.year} ${this.color}`);
};

// car2.printInfo();


// **** String.prototype.includes()


const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"