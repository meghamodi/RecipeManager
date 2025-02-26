import {recipeCard } from '../RecipeCard/recipeCard.jsx';

export function openContent(contentId){
    const displayContent = document.querySelectorAll('.content');
    displayContent.forEach(content =>{
        content.style.display= 'none'
    } )
    const contentToShow = document.getElementById(contentId);
    if (contentToShow){
        contentToShow.style.display= 'block'


        if (contentId === 'qrecipes'){
            recipeCard();
        }
    }
    
    
}