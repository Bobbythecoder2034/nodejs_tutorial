/*
    We are going to make a custom emitter class needed if you want to custom extend from classes other than the main class or any custom features you would like added. This class will handle the emitting and handles events that create an instance of this class
*/

const EventEmiiter = require('events')
// const { EventEmitter } = require('stream')

const customEmitter = new EventEmitter

/*
The on and emit methods are to keep track of the order. You can also use additional argument/parameters and the built in function/module can utilize it
*/
class TemperatureSensor extends EventEmiiter{
    constructor(){
        // A super class is a parent class that other classes can extend from (inherit from). It defines the properties and methods that can be reused by child classes (called subclasses). This avoids rewriting code.
        super()
        this.temp = 95
    }
}



//_____________JS CLASSES___________________________
/*
In JS a class is like a blueprint for creating objects. It defines the properties(data) and the methods(functions) that the objects created from it will have

Think of it like the design for a car: the class is the design and the cars you build from it are the actual objects.
*/

// class Car{
//     constructor(make,model,year){//The constructor is a special method that runs when you create a new object
//         this.make = make
//         this.model = model
//         this.year = year
//     }
//     startEngine(){
//         console.log(`${this.make} ${this.model} engine started`)
//     }
//     drive(){
//         console.log(`${this.make} ${this.model} is in Drive`)
//     }
//     reverse(){
//         console.log(`${this.make} ${this.model} is in Reverse`)
//     }
//     neutral(){
//         console.log(`${this.make} ${this.model} is in Neutral`)
//     }
// }
// const montes_car = new Car("Jeep", "Renegade", 2016)
// montes_car.reverse()