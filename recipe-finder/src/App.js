import './App.css';
import {SearchRecipe} from './RecipeCard/searchRecipe.js';
import {useState} from 'react';

function App() {
    const [isActive, setIsActive] = useState('homeText')
//   useEffect(()=>{
//     // window.recipeCard = recipeCard;
//     // window.SearchRecipe = SearchRecipe;
//     // window.OpenContent = OpenContent;
//     // window.toggleFoodContent = toggleFoodContent;
//     // window.onload = function() {
//     //   OpenContent('homeText');
//     // //   recipeCard();
//     }
//   },[])
  const handleContent = (contentId) =>{
    
        // setIsActive(contentId)
        
            setIsActive(contentId)
        
   

    }



  return (
    <div className="App">
        <div className="container">
            <div className="headers">
                <div className="category">
                    <h3 id="home" onClick={() =>handleContent('homeText')}>Home</h3> 
                </div>
            
            <div className="category">
                
                <h3 id="quickrecipes" onClick={()=> handleContent('qrecipes')} >On the Go Recipes</h3>
                    
            </div>

            <div className="category">
                <h3 id="AboutMe" onClick={()=> handleContent('AboutTag')}>About</h3>
      
            </div>
            
        </div>
        </div>

        <div className="content-grid">
            {/* <!-- Home Content --> */}
            {isActive === 'homeText' && (
            <div id="homeText" className="content">
                <p>This is home</p> 
            </div> )}


            {/* <!-- Quick Recipes Content --> */}
            {/* It only executes the second part if the first part is true.
 */}
            {isActive === 'qrecipes' && (
            <div id="qrecipes" className="content">
                <div>
                    <SearchRecipe/>
                </div>
            </div>
            )}

            {/* <!-- About Content --> */}
            {isActive === 'AboutTag' && (
            <div id="AboutTag" className="content">
                <p>This is the "About" section where you can add information about yourself or your website.</p>
            </div>
            )}
            </div>
      
    </div>
    
  );
}

export default App;
