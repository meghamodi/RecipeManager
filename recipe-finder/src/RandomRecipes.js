import {useState} from 'react';
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
            
        setRecipes(resData)
       
        console.log(`Recipes: ${resData}`)
        }catch(error){
            console.log("Error fetching")
            
        }
    }
    
    return (
        <div>
            <button onClick={showOneRecipe}>Click for random recipes</button>
            <ul>
            {recipes.map((recipe,index)=>(
                <li index={index}>{`${recipe.title}, ${recipe.ingredients}`}</li>
            )
        )}
        </ul>
        

        </div>
       
    )
}
