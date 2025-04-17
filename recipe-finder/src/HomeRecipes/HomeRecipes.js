import {CollectionRecipes } from '../collectionRecipes/collectionRecipes.js'
import {MealsRecipes} from '../mealsRecipes/MealsRecipes.js';

export function HomeRecipes(){
    return (
        <div className="home-recipes-container">
            <CollectionRecipes/>
            <MealsRecipes/>

        </div>
    )
}

