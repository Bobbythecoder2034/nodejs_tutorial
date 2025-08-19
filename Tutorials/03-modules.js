//CommonJS, every file is a module (by default)
//Modules - Encapsulated code (only share the minimum amount of info, properties, and methods)

const name = require('./04-name')
const message = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade') //Not equal to a variable, so it instantly runs when this file reaches line 7, while the other files wait until the variable is called

//name
console.log(name.Shakira)
console.log(name.Pitbull)
//utils
message("Kaden")
//data
console.log(data.items[0])
console.log(data.marriedPerson)