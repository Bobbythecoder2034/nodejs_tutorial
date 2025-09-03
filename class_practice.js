class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    introduce(){
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
    }
}
const bob = new Person("Bob", 43)
const ryan = new Person("Ryan", .456)
bob.introduce()
ryan.introduce()

class Vehicle{
    constructor(brand, year){
        this.brand = brand
        this.year = year
    }
    drive(){
        console.log(`The ${this.brand} is driving`)
    }
}
class Car extends Vehicle{
    constructor(brand, year, doors){
        super(brand, year)
        this.doors = doors
    }
    honk(){
        console.log("Beep beep! The car honked")
    }
}
class Motorcycle extends Vehicle{
    constructor(brand, year, type){
        super(brand, year)
        this.type = type
    }
    revEngine(){
        console.log(`Vroom! The motorcycle revs its engine.`)
    }
}

const corvette = new Car("Honda", 12, 7.5)
const harley = new Motorcycle("Ducati", 2028, "cruiser")

corvette.drive()
harley.drive()
corvette.honk()
harley.revEngine()


class VideoGame{
    constructor(name, studio, platform){
        this.studio = studio
        this.name = name
        this.platform = platform
    }
    bootUp(){
        console.log(`"${this.name}" by ${this.studio} is booting up on your ${this.platform}`)
    }
}
class BattleRoyale extends VideoGame{
    constructor(name, studio, platform, num_players){
        super(name, studio, platform)
        this.num_players = num_players
    }
    begin(){
        console.log(`${this.num_players} players are dropping into the arena!`)
    }
}
class SinglePlayer extends VideoGame{
    constructor(name, studio, platform, genre){
        super(name, studio, platform)
        this.genre = genre
    }
    review(){
        console.log(`${this.name} is a very popular ${this.genre} single-player game.`)
    }
}
const hollowKnight = new SinglePlayer("Hollow Knight", "Team Cherry", "PC", "Metroidvania")
const Warzone = new BattleRoyale("Call of Duty: Warzone", "Activision", "Xbox", 100)

hollowKnight.bootUp()
Warzone.bootUp()
hollowKnight.review()
Warzone.begin()