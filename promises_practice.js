const doHomework = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        didHomework = false
            if(didHomework){
                resolve("Homework complete")
            }else{
                reject("Homework not done!")
            }
        },2000)
}).then(result =>{
    result += "d"
    console.log(result)
}).catch(error=>{
    console.error(error)
})


function studySubject(subject){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
            if(subject == "Math"){
                resolve("Studied Math!")
            }else{
                reject("I don't want to study that")
            }
        },1000)
    }).then(result =>{
        console.log(result)
    }).then(result =>{
        console.log("Now I am ready for the test!")
    }).catch(error=>{
        console.error(error)
    }).finally(()=>{
        console.log("End of the day - done or not done")
    })
}

function wakeUp(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        alive = true
            if(alive){
                resolve("Woke up at 7 AM!")
            }else{
                reject("Lazy")
            }
        },1000)
    }).then(result =>{
        console.log(result)
    }).catch(error=>{
        console.error(error)
    })
}
function eatBreakfast(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        alive = true
            if(alive){
                resolve("Ate breakfast!")
            }else{
                reject("Hungry")
            }
        },2000)
    }).then(result =>{
        console.log(result)
    }).catch(error=>{
        console.error(error)
    })
}
function goToSchool(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        alive = true
            if(alive){
                resolve("Reached school on time!")
            }else{
                reject("Dumb")
            }
        },1000)
    }).then(result =>{
        console.log(result)
    }).catch(error=>{
        console.error(error)
    })
}
studySubject("Math")

wakeUp()
.then(()=>{
    eatBreakfast()
})
.then(()=>{
    goToSchool()
})
.catch((error)=>{
    console.error(error)
})