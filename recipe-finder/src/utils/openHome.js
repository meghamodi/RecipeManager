import {cardCreate } from './cardCreate.js';

export function toggleContents(contentId){
    const displayContent = document.querySelectorAll('.content');
    displayContent.forEach(content =>{
        content.style.display= 'none'
    } )
    const contentToShow = document.getElementById(contentId);
    if (contentToShow){
        contentToShow.style.display= 'block'


        if (contentId === 'qrecipes'){
            cardCreate();
        }
    }
    
    
}