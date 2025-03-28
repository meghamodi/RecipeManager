import {useState} from 'react';
import './RandomRecipe.scss';
export default function RandomRecipes(){
    const [recipes,setRecipes] = useState(null)

    async function showOneRecipe(){
        const query =`
        query {
        randomRecipe{
        title,
        ingredients,
        instructions
        }
        }`;
        try {
        const rData = await fetch('http://localhost:4000/graphql',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',

        },
        body:JSON.stringify({query})
    })
        
        if (!rData.ok) {
            console.log("Server failing")
            return;
        }
        const resData  = await rData.json()
        const randomRecipe = resData.data.randomRecipe;

        setRecipes(randomRecipe)
       
        }catch(error){
            console.log("Error fetching")
            
        }
    }
    
    return (
        <div>
            <button onClick={showOneRecipe}>Click for random recipes</button>
            <div className="recipeCard">
            {recipes && (
                <div className="recipeItem">
                <div className="recipeName">{recipes.title}</div>
                    <p>Ingredients:{recipes.ingredients}</p>
                    <p>Instructions: {recipes.instructions}</p>
                </div>
            )
           
        }
         </div>
     
        

        </div>
       
    )
}
