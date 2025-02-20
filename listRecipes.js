import recipesData  from './recipesData.js';

export function listRecipes(){
    const RecipesBox = document.getElementById("recipeList")
    RecipesBox.innerHTML='';
    

    for (const [name,recipe] of Object.entries(recipesData)){
        // recipe container
        const recipeItem = document.createElement("div");
        recipeItem.classList.add("recipe-card");
        
        // heading for recipe
        const recipeName = document.createElement("strong");
        recipeName.textContent = name;
        recipeName.style.cursor = "pointer";

        // whole recipe
        const recipeDetails = document.createElement('div');
        recipeDetails.classList.add("recipe-details");
        recipeDetails.style.display= 'none';
        recipeDetails.textContent= recipe;

        
        recipeItem.appendChild(recipeName)
        recipeItem.appendChild(recipeDetails)

        recipeName.onclick = () => toggleRecipeContent(recipeDetails);

        RecipesBox.appendChild(recipeItem);



    }

}

export function toggleRecipeContent(detailsElement){
    if (detailsElement.style.display === 'none'){
        detailsElement.style.display= 'block'

    }
    else{
        detailsElement.style.display= 'none'
    }
}

    
