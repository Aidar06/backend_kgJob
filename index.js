import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js";
import fileUpload from "express-fileupload";
import axios from "axios";
import cors from "cors";

const PORT = process.env.PORT || 5000

const DB_URL = `mongodb+srv://user:user@cluster0.sjt64hj.mongodb.net/?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)
app.use(cors());



async function startApp(){
    try{
        await mongoose.connect(DB_URL, {})
        app.listen(PORT,()=> console.log('server' + PORT))
    }catch (e){
        console.log(e)
    }
}

startApp()

