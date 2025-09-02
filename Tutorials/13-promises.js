/*A Promise can be in one of three states

Pending -> the initial state, operation not completed yet
Fufilled -> The operation completed successfully returned value
Rejected -> The operation failed and returned a reason (ususally an error)

Once a promise is either fulfilled or rejected, it becomes setled and cannot change state again
*/

const path = require('path')
const {readFile,writeFile} = require('fs')
const myPromise = new Promise((resolve, reject) =>{
    //List of Async tasks
    let success = true
    if(success){
        resolve("Task completed successfully")
    }else{
        reject("something went wrong")
    }
})


// let ip = "127.0.0.5"
// const newPromise = new Promise((resolve,reject) => {
//     //async operations

//     if(ip === "127.0.0.1" || ip === "127.0.0.5"){
//         resolve("Success")
//     }else{
//         reject("Failed Mission: No Respawn")
//     }
// })  
// console.log(newPromise)


let actualFile = path.join(__dirname, './content/first.txt')
console.log(actualFile)

//Now lets make some functions with promises

function processData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data.toUpperCase())
        },500)
    })
}

function saveData(data){}
    return new Promise((resolve,reject)=>{
        //save locally or to a cloud
        setTimeout(()=>{
            resolve(`Data saved: ${data}`)
        },500)
    })

//Usage
function realFilePromise(pathway){
    return new Promise((resolve, reject)=>{
        readFile(pathway, 'utf8', (err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

    // You can handle the outcome using .then(), .catch(), and .finally()

myPromise
    .then(result =>{
        result += "f"
    })
    .then(result =>{
        console.log(result)
    })
    .catch(error =>{
        console.log(error)
    })
    .finally(()=>{
        console.log("Promise Settled")
    })
    /*Pros of Promises
        Async Programming: Promises help manage tasks that take time like network requests or reading files with without blocking the rest of the code
        Chaining Operations: You can link multiple .then() calls so each one waits for the previous to complete
        Error Handling: .catch() makes error handling easier
    */


// async function getData(){
//     try {
//         let response = await fetch('https://api.example.com')
//         let data = await response.json();
//         console.log(data)
//     } catch (err){
//         console.error(err)
//     }
// }
