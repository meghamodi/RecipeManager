import './App.css';
import { toggleContents } from './utils/openHome.js';
// import { listRecipes, toggleRecipeContent } from './listRecipes.js';
import { cardCreate, toggleFoodContent } from './utils/cardCreate.js';
import { searchRecipe } from './utils/searchRecipe.js';
import { useState,useEffect } from 'react';
function App() {
  useEffect(()=>{
    window.cardCreate = cardCreate;
    window.searchRecipe = searchRecipe;
    window.toggleFoodContent = toggleFoodContent;
    window.onload = function() {
      toggleContents('homeText');
      cardCreate();
    }
  })


  return (
    <div className="App">
        <div class="container">
            <div class="headers">
                <div class="category">
                    <h3 id="home" onclick="toggleContents('homeText')">Home</h3> 
                </div>
            <div class="category">
                <h3 id="recipes" onclick="toggleContents('recipeList')" >Recipes</h3>
   
            </div>
            <div class="category">
                
                <h3 id="quickrecipes" onclick="toggleContents('qrecipes')" >On the Go Recipes</h3>
                    
            </div>

            <div class="category">
                <h3 id="AboutMe" onclick="toggleContents('AboutTag')">About</h3>
      
            </div>
            
        </div>

        <div class="content-grid">
            {/* <!-- Home Content --> */}
            <div id="homeText" class="content">
                <p>This is home</p>
            </div>

            {/* <!-- Recipes Content --> */}
            <div id="recipeList" class="content">
                
                    <div class="recipe-card" onclick="listRecipes()">
                        <strong>Favorites</strong>
                    </div>
               
            </div>

            {/* <!-- Quick Recipes Content --> */}
            <div id="qrecipes" class="content">
                <div>
                    <input type="text" onkeyup="searchRecipe()"  placeholder="Search recipes..." id="search-box"></input>
                </div>
                <div class="recipeGallery"></div>
                   
            </div>

            {/* <!-- About Content --> */}
            <div id="AboutTag" class="content">
                <p>This is the "About" section where you can add information about yourself or your website.</p>
            </div>
            </div>
      
    </div>
    </div>
  );
}

export default App;
