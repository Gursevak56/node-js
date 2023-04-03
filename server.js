// const express=require("express");
// const app=express();
// const port=3000;
// app.listen(port,()=>{
//     console.log(`server starts on ${port}`);
// })

//get method
const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("<h1>Hello ,world</h1>");
})
app.get("/contact",(req,res)=>{
    res.send("this is contact page of gursevak singh");
})
app.get("/about",(req,res)=>{
    res.send("this is my about page");
})
app.listen(3000,()=>{
    console.log("server run on port 3000");
})