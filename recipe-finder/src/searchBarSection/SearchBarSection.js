import './SearchBarSection.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
export function SearchBarSection(){
    return (
    <div className="searchBar-wrapper">
        <form className="searchBar">
            <label className="search-input-wrapper">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </label>
             <input className="search-input" type="search" placeholder="Search our recipes"/>    
        </form>
        <div>
            <span className="or-text">or</span>
            <a href="https://pinchofyum.com/recipes/all/" className="view-all-link">+ View All Recipes</a>
        </div>   
    </div>
    )
}