// // require the http module
// const http = require("http")
// // specify the hostname and the port that we want our server to run on
// const hostName = "127.0.0.1"
// const port = 3000


// // create a server form the http
// const server = http.createServer((req, res) => {
//     // req --> Request --> request provide the requested details
//     // res --> Response --> response provides the answer for the request
//     // These object handle the http call.
//     res.statusCode = 200 // indicates a successful request
//     res.setHeader("Context-type", "text/plain")
//     res.end("hello world") // end/close the response
// })

// // listen to the server on the specified prot and hostname, when the server is ready the cb will be executed
// server.listen(port , hostName , () => {
//     console.log(`Server running at http://${hostName}:${port}/`)
// })


const express = require("express")
const server = express()
const port = 5000

server.get("/" , (req, res) => {
    res.send({
        msg:" hello world"
    })
})

server.listen(port , () => console.log(`http://localhost:${port}`))