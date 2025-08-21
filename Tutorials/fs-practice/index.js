const {readFileSync, writeFileSync} = require('fs')
const {readFile, writeFile} = require('fs')

// Part 2
readFile('./notes.txt','utf8',(err, noteData)=>{
    if(err){console.log(err);return}
    console.log(noteData)
})
let synced = readFileSync('./notes.txt','utf8')
console.log(synced)
//Sync blocks the program's execution

//Part 3
writeFile('./asyncOuput.txt','Written with fs.writeFile (asynchronous)',(err)=>{
    if(err){console.log(err);return}
})

writeFileSync('./syncOutput.txt', 'Written with fs.writeFileSync (synchronous)')

//Part 4
writeFile('./notes.txt','This was added',{flag:'a'},(err)=>{
    if(err){console.log(err);return}
})
//Appends to the end of the text file. Makes a new file if path doesn't exist

writeFile('./notes.txt','This overwrote it',{flag:'w'},(err)=>{
    if(err){console.log(err);return}
})
//Writes a new file if the path doesn't exist and 

writeFile('./notes.txt','Hola',{flag:'wx'},(err)=>{
    if(err){console.log(err);return}
})
//Only writes new files and errors if the path exists

readFile('./notes.txt','utf8',(err, data)=>{
    if(err){console.log(err);return}
    console.log(data)
},{flag:'r'})
//Only reads the file

//Part 5
const prompt = require('prompt-sync')()
let writing = true
do{
    let writer = prompt('Do you want to make an entry? (y/n) ')
    if(writer.match(/^y$/i) != null){
        let rewrite = prompt('Do you want to redo the journal? (y/n) ')
        if(rewrite.match(/^y$/i) != null){
            let journalEntry = prompt('Write the first line of your journal: ')  + '\n'
            writeFileSync('./journal.txt', journalEntry,{flag:'w'})
        }else{
            let journalEntry = prompt('Write a journal entry: ')  + '\n'
            writeFileSync('./journal.txt', journalEntry,{flag:'a'})
        }
    }else{
        let reader = prompt('Do you want to read the journal? (y/n) ')
        if(reader.match(/^y$/i) != null){
            console.log(readFileSync('./journal.txt','utf8'))
        }else{
            writing = false
        }
    }
}while(writing)
