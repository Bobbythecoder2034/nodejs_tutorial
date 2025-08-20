const {readFileSync, writeFileSync} = require('fs')
const path = require('path')

console.log('Winter is Here')
/*
Synchronous(fs.readFileSystem abd fs.writeFileSync...etc)
Is considered a blocking event
Blocks the event loop until the operation finishes
No other code runs during that time
Simpler to write but can freeze server if the file is large or the disk space is low

Performace: Slow when handling many requests because each operation halts all code execution
Uses: Best one for programs like utilities or back-ups, or large database changes
*/

const first = readFileSync(path.join(__dirname, '/content/first.txt'),'utf8')
const second = readFileSync(path.join(__dirname, '/content/second.txt'),'utf8')
const third = readFileSync(path.join(__dirname, '/content/third.txt'),'utf8')
console.log(first)
console.log(second)
console.log(third)
/* Charset options:
ascii
base64
base64url (Node v 14+)
hex
usc2/usc-2/utf16le/utf-16le
utf8/utf-8
binary/latin1 (ISO8859-1, latin1 only in node 6.4.0+)
*/

writeFileSync(path.join(__dirname, "/content/CloneWars.txt"),`Here is the result: ${first}, ${second}, ${third}`,{flag:'a'})

/* Flags:
w(default): Opens the file for writing. if the file odes not exist it is created. If the file exists, its contents are overwritten before new data is written

wx: Similar to w but it fails to error if the path exists. This ensures that a new file is created without overwriting the existing one

a: Opens the file for appending. If the file does not exist it is created. If the file exists, the new data is appended to the end of the existing content

ax: Similar to a but fails if the path exists. This ensures that data is only appened to a file if it is newly created.

w+: opens the file for reading and writing. If the file does not exist it is created. If the file exists its contents are overwritten

a+: Opens a file for reading and appending. If the file does not exist, it is created. I fhte file exists, the new data is appended to the end of its existing content

r: reading

rs+: Opens the file for reading and writing synchronously. This flag should be used with caution as it can block the nodejs event loop.
*/