const os = require('os')

//information about the current users device
const user = os.userInfo()
console.log(user)

//Method return the system uptime in seconds
function convertTime(seconds){
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600)/60)
    const secs = Math.floor(seconds % 60)
    return `${hours}:${minutes}:${secs}`
}
console.log(convertTime(os.uptime()))