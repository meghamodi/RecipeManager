import {useState} from 'react';
import './RandomRecipe.scss';
export default function RandomRecipes(){
    const [recipes,setRecipes] = useState([])

    async function showOneRecipe(){
        try {
        const rData = await fetch('http://localhost:4000/recipes')
        
        if (!rData.ok) {
            console.log("Server failing")
            return;
        }
        const resData  = await rData.json()
        const randomRecipe = resData[Math.floor(Math.random() * resData.length)]
            
        setRecipes([randomRecipe])
       
        console.log(`Recipes: ${resData}`)
        }catch(error){
            console.log("Error fetching")
            
        }
    }
    
    return (
        <div>
            <button onClick={showOneRecipe}>Click for random recipes</button>
            <div className="recipeCard">
            {recipes.map((recipe,index)=>(
                <div key={index} className="recipeItem">
                <div className="recipeName">{recipe.title}</div>
                    <p>{recipe.ingredients}</p>
                    <p>{recipe.instructions}</p>
                </div>
            )
           
        )}
         </div>
     
        

        </div>
       
    )
}
