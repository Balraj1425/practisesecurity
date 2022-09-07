const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const port = 80;

app.get("/hello", (req, res)=> {
    res.send("hello world")
})

app.get("/", (req, res)=> {
    res.sendFile(__dirname+'/index.html')
})

app.post("/fetchData", (req, res)=>{
    var data = req.body;
    res.send(data)
})

app.listen(port, ()=>{
    console.log("server started at port: ", port)
})