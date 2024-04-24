//Task2
const http = require('http');
const os = require('node:os');
const {systemInfo} = require('./personalmodule')

const userInfo = os.userInfo();
const currentTime = new Date();
const userName = userInfo.username

const server2 = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type':'text/html'});
    res.write(`Date of request: ${currentTime} </br>`)
    res.write(systemInfo(userName))
    res.end();
})

server2.listen(8000, () => {
    console.log('Server created at 8000....')
})