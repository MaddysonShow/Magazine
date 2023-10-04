const text = require('./data')
const fs = require('fs')
const path = require('path')

const log = (text) => console.log(text)
log(text.kok)
log(text.text)

// fs.mkdir(path.join(__dirname, 'test'), err => {
//     if (err) {
//         throw new Error(err.toString())
//     }
//     else {
//         console.log('Path CREATED!!')
//     }
// })
//
//
//
// fs.writeFile(path.join(__dirname, 'test', 'text.txt'),'firstHi', err => {
//     if (err) throw err
//     else console.log('File created:)')
//     fs.appendFile(path.join(__dirname, 'test', 'text.txt'),'\nhiAgain', err => {
//         if (err) throw err
//         else console.log('File created:)')
//     })
// })

fs.readFile(path.join(__dirname, 'test', 'text.txt'),"utf-8", (err, data) => {
    if (err) throw err
    if (data) console.log(data);
})