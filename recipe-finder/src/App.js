import './App.css';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {HomeRecipes} from './HomeRecipes/HomeRecipes.js';
function App() {
    const [isActive, setIsActive] = useState('home')

  const handleContent = (contentId) =>{
            setIsActive(contentId)   
    }

  return (
    <div className="App">
        <div className="container">
            <div className="headers">
            <div className="website-title" onClick={()=> handleContent('home')}>
                Pinch of yum
            </div>
            <div className="nav-menu">
                <div className="category">
                    <h3  onClick={() =>handleContent('home')}>HOME</h3> 
                </div>
        

                <div className="category">
                    <h3 onClick={()=> handleContent('about')}>ABOUT</h3>
        
                </div>
                <div className="category">
                    <h3 onClick={()=> handleContent('recipes')}>RECIPES</h3>
        
                </div>
                <div className="category">
                    <h3 onClick={()=> handleContent('startHere')}>START HERE</h3>
        
                </div>
                <div className="category">
                    <h3>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </h3>
                </div>
        </div>
        </div>
        </div>

        

        <div className="content-grid">
            
            {/* <!-- Home Content --> */}
            {isActive === 'home' && (
                <>
            <div className="thin-section">
            <div>
                <p>Simple recipes made for <span className="italic-text">real, actual, everyday life.</span> </p>
            </div> 
            </div>
            <div className="recipeVariety">
       
            <HomeRecipes/>
          
            </div>
            </>
    
    
    
    )}


            {isActive === 'recipes' && (
            <div className="content">
                <div>
                    <p>Something recipes</p>
                </div>
            </div>
            )}


            {/* <!-- About Content --> */}
            {isActive === 'about' && (
            <div className="content">
                <p>This is the "About" section where you can add information about yourself or your website.</p>
            </div>
            )}
            {isActive === 'startHere' && (
            <div className="content">
                <div>
                    <p>Some content</p>
                    
                   
                </div>
            </div>
            )}
            </div>

    </div>
    
  );
}

export default App;
