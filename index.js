const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const port = 3006;

app.get("/hello", (req, res)=> {
    res.send("hello world")
})

app.post("/fetchData", (req, res)=>{
    var data = req.body;
    res.send(data)
})

app.listen(port, ()=>{
    console.log("server started at port: ", port)
})