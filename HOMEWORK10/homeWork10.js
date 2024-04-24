//Task1

const http = require('http');
const os = require('node:os');
const path = require('path');

const userInfo = os.userInfo();
const currentTime = new Date();
const serverFilePath = ('/Users/llozy/Documents/JavaScript for TA [Q1, 2024]/JavaScript-for-TA/HOMEWORK10/homeWork10.js')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type':'text/html'});
    res.write(`<h1>System information</h1>`);
    res.write(`
    <p>Current user name: ${userInfo.username} </p>
    <p>OS type: ${os.type()}</p>
    <p>System work time: ${currentTime}</p>
    <p>Current work directory: ${process.cwd()}</p>
    <p>Server file name: ${path.basename(serverFilePath)}</p>
    `)
    res.end();
})

server.listen(5000, () => {
    console.log('Server created at 5000....')
})


