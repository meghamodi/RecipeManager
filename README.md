# RecipeManager

**RecipeManager** is a full-stack web application for discovering, managing, and exploring a variety of recipes. It offers intelligent search, filtering, and AI-powered suggestions, making it easy to find meals tailored to dietary needs and preferences.

## Features

- **Smart Search & Sort**  
  Easily search recipes by name or filter based on protein, carbs, calories, fat, or fiber.

- **AI Assistant**  
  ![AI](assets/ai_assistant.png)
  Ask ChatGPT to generate recipes on the fly with queries like "Show vegan zucchini recipe".

- **Random Recipe Generator**  
  Click a button to explore a surprise recipe.

- **Nutritional Info at a Glance**  
  View macros (protein, carbs, calories, fat, fiber) for each recipe card.

- **Responsive UI**  
  Clean, mobile-friendly layout with intuitive navigation tabs: Home, About, Random Recipe, and On-the-Go Recipes.

- **Visual Recipe Cards**  
  Browse recipe cards with images and one-click access to detailed instructions.

## Getting Started

### Frontend

1. Navigate to the `src` folder:
   ```bash
   cd src
   ```

2. Install dependencies (if needed):
   ```bash
   npm install
   ```

3. Run the frontend:
   ```bash
   npm start
   ```

### Backend (for Random Recipe Generator)

1. Navigate to the backend server folder:
   ```bash
   cd server
   ```

2. Start the backend:
   ```bash
   node index.js
   ```

> **Note:**  
> The AI Assistant feature is powered by OpenAI's ChatGPT API. To enable this functionality, you need access to the GPT-4/5 API via a paid OpenAI account (ChatGPT Plus or API access with billing enabled).  
> Make sure to set your OpenAI API key in your environment configuration:
>
> ```env
> OPENAI_API_KEY=your_openai_api_key
> 
