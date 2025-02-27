// utility function for searching the data/recipe
import {useState} from 'react';
import {recipesData} from '../data/recipesData.js';
export function SearchRecipe(){
    const [searchvalue,setSearchValue] = useState('search recipe');

return (
    <>
    <div className="searchBar">
        <input value={searchvalue} onChange={e=>{setSearchValue(e.target.value)}}>
        </input>
    </div>
    </>
)}