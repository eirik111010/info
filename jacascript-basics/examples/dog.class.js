/* Dog class - to be used in objects.html */
"use strict";

class Dog {
    constructor(name, weight, breed) {
        this.name = name;
        this.weight = weight;
        this.breed = breed;
    }

    info() {
        console.log("name:   " + this.name);
        console.log("weight: " + this.weight);
        console.log("breed:  " + this.breed);
    }   
}

// Alternative syntax using prototypes
function Dog2(name, weight, breed) {
    this.name = name;
    this.weight = weight;
    this.breed = breed;
}

function printInfo() {
    console.log("name:   " + this.name);
    console.log("weight: " + this.weight);
    console.log("breed:  " + this.breed);
}

// Adding an info() method to the Dog prototype
Dog2.prototype.info = printInfo;

let mydog = new Dog("Tiffy", 3.4, "mixed");
mydog.info();

if (mydog instanceof Dog) {
    console.log("it's a dog");
}
