//started operating system process
console.log('first')
setTimeout(()=>{
    console.log('second')
},0)
console.log('third')
//Things to keep in Mind
//You have ended operating system process
//To avoid infinite loops, use clearTimeout()