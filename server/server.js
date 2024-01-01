import express from "express"
import colors from 'colors'
import dotenv from 'dotenv'

// config Env
dotenv.config()
// rest object 
const app=express();

//rest Api
app.get("/",(req,res)=>{
    res.send("Hello World")
})

// Port
const PORT=process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}` .bgCyan.white);
})