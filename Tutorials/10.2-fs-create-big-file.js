const {writeFileSync} = require('fs')

//Every bit of data is written to the end of the file
for(let i = 0; i < 2000; i++){
    writeFileSync('./content/big.txt',`Hello Idiot ${i}\n`,{flag:'a'})
}

//Every bit of data overwrites the last bit of data
for(let i = 0; i < 2000; i++){
    writeFileSync('./content/big.txt',`Hello Idiot ${i}\n`,{flag:'w'})
}