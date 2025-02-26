import './App.css';
import { openContent } from './utils/openContent.js';
// import { listRecipes, toggleRecipeContent } from './listRecipes.js';
import { recipeCard, toggleFoodContent } from './RecipeCard/recipeCard.jsx';
import searcheRecipe from './utils/searchRecipe.js';
import { useState,useEffect } from 'react';
function App() {
  useEffect(()=>{
    window.recipeCard = recipeCard;
    window.searcheRecipe = searcheRecipe;
    window.openContent = openContent;
    window.toggleFoodContent = toggleFoodContent;
    window.onload = function() {
      openContent('homeText');
      recipeCard();
    }
  },[])


  return (
    <div className="App">
        <div className="container">
            <div className="headers">
                <div className="category">
                    <h3 id="home" onClick={() =>openContent('homeText')}>Home</h3> 
                </div>
            {/* <div class="category">
                <h3 id="recipes" onclick="openContent('recipeList')" >Recipes</h3>
   
            </div> */}
            <div className="category">
                
                <h3 id="quickrecipes" onClick={()=> openContent('qrecipes')} >On the Go Recipes</h3>
                    
            </div>

            <div className="category">
                <h3 id="AboutMe" onClick={()=> openContent('AboutTag')}>About</h3>
      
            </div>
            
        </div>

        <div className="content-grid">
            {/* <!-- Home Content --> */}
            <div id="homeText" className="content">
                <p>This is home</p>
            </div>


            {/* <!-- Quick Recipes Content --> */}
            <div id="qrecipes" className="content">
                <div>
                    <input type="text" onKeyUp={searcheRecipe}  placeholder="Search recipes..." id="search-box"></input>
                </div>
                <div className="recipeGallery"></div>
                   
            </div>

            {/* <!-- About Content --> */}
            <div id="AboutTag" className="content">
                <p>This is the "About" section where you can add information about yourself or your website.</p>
            </div>
            </div>
      
    </div>
    </div>
  );
}

export default App;
