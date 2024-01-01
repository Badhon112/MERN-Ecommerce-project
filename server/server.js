import express from "express"
// import colors from 'colors'
import dotenv from 'dotenv'
import morgan from "morgan"
import ConnectDB from "./config/db.js"


// config Env
dotenv.config()

//databse config
ConnectDB()

// rest object 
const app=express();

//Middlewares
app.use(express.json())
app.use(morgan('dev'))

//rest Api
app.get("/",(req,res)=>{
    res.send("Hello World")
})

// Port
const PORT=process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}` .bgCyan.white);
})