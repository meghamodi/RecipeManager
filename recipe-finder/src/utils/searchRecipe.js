// utility function for searching the data/recipe
export default function searchRecipe(){
    const searchBar = document.getElementById('search-box');
    const searchValue = searchBar.value.toLowerCase();
    let searchVals = document.getElementsByClassName('card-title')

    for (let i=0;i< searchVals.length;i++){
        const recipeTitle = searchVals[i].textContent.toLowerCase()
        if (!recipeTitle.includes(searchValue)) {
            searchVals[i].parentElement.style.display = "none";
        }
        else {
            searchVals[i].parentElement.style.display = "flex";
        }

    }


}