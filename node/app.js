const express=require('express')
const app=express()
 
const PORT=3000

//check number odd or even usingpath params

//  app.get('/:num',(req,res)=>{
//     const num=parseInt(req.params.num)
//     if(num%2==0){
//         res.send("even")
//     }
//     else{
//         res.send("odd")
//     }
//  })


//  take 2 numbrs using query params  and find sum

app.get('/',(req,res)=>{

    const n1=parseInt(req.query.n1)
    const n2=parseInt(req.query.n2)

    res.send(`${n1 + n2}`)

})


 app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
 })