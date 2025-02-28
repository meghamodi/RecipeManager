// utility function for searching the data/recipe
import {useState} from 'react';
import recipesData from '../data/recipesData.js';
export function SearchRecipe(){
    const [searchvalue,setSearchValue] = useState('');
    function handleChange(e){
 
            setSearchValue(e.target.value.toLowerCase());
        }
        const filteredRecipes = Object.entries(recipesData).filter(([name])=>{
            return name.toLowerCase().includes(searchvalue)
})
    return (
    <div>
        <div className="searchBar">
            <input value={searchvalue} onChange={handleChange} placeholder="search recipes..."/>
            <div className="recipeGallery">
                {filteredRecipes.map(([name,details])=>{
                    const {image_url,recipe,protein,carbs,calories,fat,fiber}=details;
                return (
                    <div key={name} className="recipe-card">
                        <h3 className="card-title">{name}</h3>
                            <img src={image_url} alt={name} />
                            <p>{recipe}</p>
                            <p>Protein: {protein} | Carbs: {carbs} | Calories: {calories} | Fat: {fat} | Fiber:{fiber}</p>

                        </div>
                )

            })}
        </div>
     
    </div>
    </div>
    )}
