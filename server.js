// import http, { Server } from 'node:http'
import http from 'node:http'
const server = http.createServer((req,res)=>{
    res.statusCode=300
    // res.Header('Content-Type','plain/text')
    res.end("Hello hhhWorld 2!")

})

server.listen(3000,()=>{
    console.log("app runnigghghgnghgiki")
})