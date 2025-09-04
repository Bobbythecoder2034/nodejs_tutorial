class Animal{
    constructor(name, genus){
        this.name = name
        this.genus = genus
    }
    makeSound(){
        console.log(`The ${this.name} made a noise`)
    }
    science(){
        console.log(`The ${this.name} is of the genus ${this.genus}`)
    }
}
class Bird extends Animal{
    constructor(name, genus, canFly){//canFly is a boolean
        super(name,genus)
        this.canFly = canFly;
    }
    migrate(){
        console.log(`The ${this.name} flew South for the winter`)
    }
}
class Fish extends Animal{
    constructor(name, genus, freshWater){//freshWater is a boolean for what kind of water it lives in
        super(name,genus)
        this.freshWater = freshWater;
    }
    //Overrides the original makeSound()
    makeSound(){
        console.log("Fish can't make sounds.")
    }
    intoOcean(){
        if(this.freshWater){
            console.log(`The ${this.name} died because it needs fresh water`)
        }else{
            console.log(`The ${this.name} loves the ocean`)
        }
    }
}

const clown = new Fish("Clownfish", "Amphiprion", false)
const chicken = new Bird("Chicken", "Tasty", true)
const bass = new Fish("Large-Mouth Bass", "Fish", true)
const bear = new Animal("Black Bear", "Ursus")
//All subclass methods are called in the loop to avoid redundancy
console.log("________________________________")
clown.science()
clown.makeSound()
console.log("________________________________")
chicken.science()
chicken.makeSound()
console.log("________________________________")
bass.science()
bass.makeSound()
console.log("________________________________")
bear.science()
bear.makeSound()
console.log("________________________________")

const zoo = [clown, bass, chicken, bear]
zoo.forEach(x => {
    x.science()
    if(x instanceof Bird){
        x.migrate()
        console.log("________________________________")
    }else if(x instanceof Fish){
        x.intoOcean()
        console.log("________________________________")
    }
});