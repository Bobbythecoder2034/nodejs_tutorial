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
