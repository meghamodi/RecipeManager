import './MealsRecipes.scss';
export function MealsRecipes(){
    const mealTypes = [
        { name: "Quick and Easy", image: "/assets/Family-Style-Pitas-2.jpg" },
        { name: "Dinner", image: "/assets/Crockpot-Chicken-Bowls.jpg" },
        { name: "Vegetarian", image: "/assets/Cauliflower-Black-Bean-Tostadas-4.jpg" },
        { name: "Healthy", image: "/assets/Kale-Apple-Salad.jpg" },
        { name: "Instant Pot", image: "/assets/Chicken-with-Coconut-Kale-Sauce-225x225.jpg" },
        { name: "Vegan", image: "/assets/Crispy-Rice-Salad-4.jpg" },
        { name: "Meal Prep", image: "/assets/Meal-Prep-Pasta-with-Cauliflower-640x640.webp" },
        { name: "Soups", image: "/assets/Tortilla-Soup.webp" },
        { name: "Salads", image: "/assets/Kale-Apple-Salad.jpg" }
    ];
    return (
        <div className="mealTypes-scroll">
            {mealTypes.map((category,idx)=>(
                <div className="mealTypes-container" key={idx}
       
                    style={{
                    marginLeft: idx === 0 ? '40px' : '0',
                    marginRight: idx === mealTypes.length - 1 ? '40px' : '0',
                    }}
                >
                <div key={idx} className="roundRecipes">
                <img className="mealsImage" src={category.image} alt={category.name} />
                <p>{category.name}</p>
                </div>        

        </div>
            ))}
            </div>
    )
    
}