// create an GET endpoint for extracting data

import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import cors from 'cors';
import {ApolloServer, gql}from 'apollo-server-express'
const app = express()
app.use(express.json())
app.use(cors())
dotenv.config();

// schema for the recipe
const typeDefs = gql`
type Recipe{
title:String
ingredients: String
servings:String
instructions:String
}
type Query {
randomRecipe: Recipe
}
`;

// app.get('/recipes',async(req,res)=>{
//     // ask chatgpt to provide any recipe name and search that in api
const fetchRandRecipe= async()=>{
    const recipeList =['pizza','pasta','soup','sandwich','salad','sushi','rolls','pie','icecream']
    const recipeName=recipeList[Math.floor(Math.random()*recipeList.length)]
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
            return []
        }
        const result = await response.json();
        return result;

    } catch (error) {
        console.log("Error fetching",error)
        res.status(500).json({error:"Internal error",details: error.message})
        return []
    }

}


const resolvers= {
    Query:{
        randomRecipe:async()=> {
            try {
                const recipeData = await fetchRandRecipe();
                if (Array.isArray(recipeData) && recipeData.length > 0 ){
                    const randomRecipe = recipeData[Math.floor(Math.random() * recipeData.length)]
                    return randomRecipe;
                }
        throw new Error("No new recipes");
        }catch(error){
            console.error("Error in resolver",error)
            return null
        }
            }
        }
    }


const server= new ApolloServer({
    typeDefs,
    resolvers
})
await server.start()
server.applyMiddleware({app})

app.listen(4000,()=>{
console.log("Backend server")

})