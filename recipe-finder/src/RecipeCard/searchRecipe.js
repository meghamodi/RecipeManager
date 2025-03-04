// utility function for searching the data/recipe
import {useState} from 'react';
import recipesData from '../data/recipesData.js';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


export function SearchRecipe(){
    const [searchvalue,setSearchValue] = useState('');
    // showRecipe is an empty object ({}) so down below we use showRecipe[name]
    const [showRecipe,setShowRecipe] = useState({});
    const [sortedRecipe,setSortedRecipe] = useState([]);

    function handleRecipe(name){
        // setShowRecipe is also a function with parameters
        setShowRecipe((prevShowRecipe)=>({
            ...prevShowRecipe,
            [name]: !prevShowRecipe[name]
        }
        ))
    }
    function handleAscOrder(){
        const sorted = Object.entries(recipesData).sort(([a],[b])=>a.localeCompare(b))
        setSortedRecipe(sorted)
    }
    function handleDescOrder(){
        const sortedDesc = Object.entries(recipesData).sort(([a],[b])=>b.localeCompare(a))
        setSortedRecipe(sortedDesc)

        
    }
    //  use useEffec if you want to render some other features based on the state of this toggle, more like a trigger a side effect 
    // useEffect(()=>{
    //     console.log(showRecipe)
    // },
    // [showRecipe])
        
    
    function handleChange(e){
            setSearchValue(e.target.value.toLowerCase());
        }
        const filteredRecipes = (sortedRecipe.length > 0 ? sortedRecipe: Object.keys(recipesData)
        .filter((name)=>name.toLowerCase().includes(searchvalue))
            .map((name)=>[name,recipesData[name]])
        )
    return (
    <div className="recipe-content">
        <div className="searchBar">
            <input value={searchvalue} onChange={handleChange} placeholder="search recipes..."/>
        </div>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                sort by
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={handleAscOrder}>ascending</Dropdown.Item>
                <Dropdown.Item onClick={handleDescOrder}>descending</Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown>
        <div className="recipeGallery">
            {filteredRecipes.map(([name,details])=>{
                const {image_url,recipe,protein,carbs,calories,fat,fiber}=details;
                return (
                        <div key={name} className="recipe-card">
                            <h3 className="card-title">{name}</h3>
                            <img src={image_url} alt={name} />
                            {/* calling a function reference when button is clicked */}
                            <button className="recipeBtn" onClick={()=>handleRecipe(name)}>Show Recipe</button>
                            {showRecipe[name] &&
                            <div key="recipe" className="card-recipe">
                                {recipe}
                            </div>}
                            <div key="nutrition" className="nutrition-element">
                                Protein: {protein} | Carbs: {carbs} | Calories: {calories} | Fat: {fat} | Fiber:{fiber}
                            </div>
                        </div>
                   
            
                )

            })}
        </div>
    </div>
    )}
