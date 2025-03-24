// create an GET endpoint for extracting data

import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import cors from 'cors';
const app = express()
app.use(express.json())
app.use(cors())
dotenv.config();
app.get('/recipes',async(req,res)=>{
    // ask chatgpt to provide any recipe name and search that in api
    const recipeName='pizza'
    const url = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${recipeName}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key':process.env.RAPID_APIKEY,
            'x-rapidapi-host':process.env.RAPID_HOST
        }
    };
    
    try {
        const response = await fetch(url, options);
        if (!response.ok){
            console.log("response not ok")
        }
        const result = await response.json();
        res.json(result);
    } catch (error) {
        console.log("Error fetching",error)
        res.status(500).json({error:"Internal error",details: error.message})
    }

})

app.listen(4000,()=>{
console.log("Backend server")

})