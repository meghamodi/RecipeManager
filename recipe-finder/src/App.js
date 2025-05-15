import './App.css';
import { SearchRecipe } from './RecipeCard/searchRecipe.js';
import RandomRecipes from './RandomRecipe/RandomRecipes.js'
import {useState} from 'react';
import ChatBox from './ChatBox/ChatBox.js'

function App() {
    const [isActive, setIsActive] = useState('homeText')

  const handleContent = (contentId) =>{
            setIsActive(contentId)   
    }

  return (
    <div className="App">
        <div className="navbar">
            <div className="headers">
                <div className="category">
                    <h3  onClick={() =>handleContent('homeText')}>Home</h3> 
                </div>
            
            <div className="category">
                
                <h3 onClick={()=> handleContent('quickRecipes')} >On the Go Recipes</h3>
                    
            </div>


            <div className="category">
                <h3 onClick={()=> handleContent('RandomRecipe')}>Random Recipe</h3>
      
            </div>
            <div className="category">
                <h3 onClick={()=> handleContent('AboutMe')}>About</h3>
      
            </div>
            <div className="category">
                <h3 onClick={()=> handleContent('chatAssistant')}>AI Assistant</h3>
      
            </div>

            
        </div>
        </div>

        <div className="content-grid">
            {/* <!-- Home Content --> */}
            {isActive === 'homeText' && (
            <div  className="content">
                <p>Welcome to RecipeManager! Select a section to get started.</p> 
            </div> )}


            {/* <!-- Quick Recipes Content --> */}
            {/* It only executes the second part if the first part is true.
 */}
            {isActive === 'quickRecipes' && (
            <div className="content">
                <div>
                    <SearchRecipe/>
                    
                   
                </div>
            </div>
            )}

            {/* <!-- Glow Content --> */}
            {/* {isActive === 'glowRecipes' && (
            <div className="content">
                <div>
                    <p>Glow recipes coming soon</p>
                </div>
            </div>
            )} */}

            </div>
            {/* <!-- Random Content --> */}
            {isActive === 'RandomRecipe' && (
            <div className="content">
                <RandomRecipes/>
            </div>
            )}

            {/* <!-- About Content --> */}
            {isActive === 'AboutMe' && (
            <div className="content">
                <p>This is the "About" section where you can add information about yourself or your website.</p>
            </div>
            )}
            {/* <!-- Random Content --> */}
            {isActive === 'chatAssistant' && (
            <div className="content">
                <ChatBox/>
            </div>
            )}

    </div>
    
  );
}

export default App;
