export function CollectionRecipes(){
    const categories =[
       { name:"Healthy",image:"/assets/Cauliflower-Black-Bean-Tostadas-4.jpg"},
       { name:"Bowls",image:"/assets/Crispy-Rice-Salad-4.jpg"},
       { name:"Most Popular",image:"/assets/Crockpot-Chicken-Bowls.jpg"},
       { name:"Vegetarian",image:"/assets/Lemon-Rosemary-Chicken-Soup.jpg"}
    ]


    return <div>
        <div className="homeRecipes">
            {categories.map((category,index)=>(
                  <div key={index} className="recipe-card">
                    <img className="image-recipe" src={category.image} alt={category.name}/>
                    <div className="recipe-label">
                    {category.name}
                  </div>
                  </div>
                 
            ))}
          

        </div>

    </div>

}