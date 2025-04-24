import {CollectionRecipes } from '../collectionRecipes/collectionRecipes.js'
import {MealsRecipes} from '../mealsRecipes/MealsRecipes.js';
import {SearchBarSection} from '../searchBarSection/SearchBarSection.js';

export function HomeRecipes(){
    return (
        <div className="home-recipes-container">
            <CollectionRecipes/>
            <MealsRecipes/>
            <SearchBarSection/>


        </div>
    )
}

