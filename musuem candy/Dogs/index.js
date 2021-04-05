const express= require('express');

const app= express();

// app.use((req,res)=>{
//     console.log("new req");
//     res.send("loalalallalalalalala");
// })

app.get('/r/:koko',(req,res)=>{
    const {q}= req.query;

    const {koko}= req.params;
   
    res.send(`kokokokkp ${koko} ${q}`);
    
})



app.get('/cats',(req,res)=>{
    res.send("llll");
})
app.get('/dogs',(req,res)=>{
    res.send("vada");
})
app.get("/",(req,res)=>{
    res.send("home");
})

app.get('*',(req,res)=>{
    res.send("poda");
})


app.listen(3000,()=>{
    console.log("listening ");
})
