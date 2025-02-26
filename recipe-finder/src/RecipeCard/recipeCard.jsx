import recipesData from '../data/recipesData.js';

export function recipeCard(){
    const RecipesBoard = document.querySelector(".recipeGallery")
    RecipesBoard.innerHTML='';
    for (const [name,details] of Object.entries(recipesData)){
        const {recipe,image_url,protein,carbs,calories,fat,fiber} = details;
        const cardRec = document.createElement('div')
        cardRec.classList.add('qrecipe-card')

        const cardTitle = document.createElement('div')
        cardTitle.classList.add('card-title')
        cardTitle.textContent = name
        cardTitle.style.cursor = "pointer";

        const cardRecipeButton = document.createElement('div')
        cardRecipeButton.classList.add('card-recipe')
        cardRecipeButton.textContent ='Click for Recipe'


        const nutritionTable = [
            { label: 'Protein', value: protein },
            { label: 'Carbs', value: carbs },
            { label: 'Calories', value: calories },
            { label: 'Fat', value: fat },
            { label: 'Fiber', value: fiber },
        ];

        const nutritionElements = nutritionTable.map(nutrition => {
            const nutritionElement = document.createElement('div')
            nutritionElement.classList.add('nutrition-element')
            nutritionElement.textContent = `${nutrition.label}: ${nutrition.value}`;
            return nutritionElement;

        }

        )
    
        const cardDetail = document.createElement('div')
        cardDetail.classList.add('card-detailPop')
        cardDetail.style.display= 'none';
        cardDetail.textContent = recipe

        const cardImage = document.createElement('div')
        cardImage.classList.add('card-image')

        const imgElement =document.createElement('img')
        imgElement.src= details.image_url
        imgElement.alt = name

        const closeButton= document.createElement('button')
        closeButton.classList.add('closePop')
        closeButton.textContent = "X"
        closeButton.style.cursor = "pointer";
      
        closeButton.onclick= ()=> cardDetail.style.display = 'none';
        cardTitle.appendChild(cardRecipeButton)

        cardDetail.appendChild(closeButton)
        

        cardRec.appendChild(cardImage)
        cardImage.appendChild(imgElement)
        
        
        cardRec.appendChild(cardTitle)
        cardRec.appendChild(cardDetail)
        

        nutritionElements.forEach(element => cardRec.appendChild(element))

        cardRecipeButton.onclick = () => cardDetail.style.display = 'block';
        RecipesBoard.appendChild(cardRec)

    }
    
}
export function toggleFoodContent(detailsElement){
    if (detailsElement.style.display === 'none'){
        detailsElement.style.display = 'block';
   

    }
    else {
        detailsElement.style.display = 'none';
        
        
    }

}
