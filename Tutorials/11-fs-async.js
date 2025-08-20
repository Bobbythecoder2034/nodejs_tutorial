const {readFile, writeFile} = require('fs')

//Asynchronous read and write example
readFile('./content/big.txt','utf8', (err, firstData)=>{
    if(err){console.log(err);return}

    readFile('./content/second.txt','utf8',(err,secondData)=>{
        if(err){console.log(err);return}

        const result = `${secondData} and ${firstData}`

        writeFile('./content/result-mind-grenade.txr',result,(err)=>{
            if(err){console.log(err);return}
            console.log('Asynchronous write completed')
        })
    })
    // writeFile('./content/result-mind-grenade.txt', result) one to one reading and writing
})