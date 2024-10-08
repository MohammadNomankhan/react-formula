import { useEffect, useState } from "react";

const recipeData = {
    id: 1,
    name: "Classic Margherita Pizza",
    cuisine: "Italian",
    prepTimeMinutes: 20,
    difficulty: "Easy",
    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
    rating: 4.6,
    reviewCount: 98,
  };

  const FetchRecipe = () => {

    const [recipe, setRecipe] = useState(recipeData);
    const handleFetchRecipe = async () => {
        const randomNumber = Math.floor(Math.random() * 50) + 1;
        const response = await fetch(`https://dummyjson.com/recipes/${randomNumber}`);
        const data = await response.json();
        setRecipe(data);
    }

    return <div className="h-screen flex flex-col gap-8 justify-center items-center">
        <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            {/* Image section */}
            <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-40 object-cover"
            />

            {/* Recipe Content */}
            <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-1">{recipe.name}</h2>

                {/* Rating and Reviews */}
                <div className="flex items-center mb-2">
                    <span className="text-yellow-500 font-semibold text-lg">{recipe.rating}★</span>
                    <span className="text-gray-600 ml-2">({recipe.reviewCount} reviews)</span>
                </div>

                {/* Short Info */}
                <div className="text-sm text-gray-700">
                    <p><span className="font-bold">Cuisine:</span> {recipe.cuisine}</p>
                    <p><span className="font-bold">Difficulty:</span> {recipe.difficulty}</p>
                    <p><span className="font-bold">Prep Time:</span> {recipe.prepTimeMinutes} mins</p>
                </div>
            </div>
        </div>
        <button className="bg-rose-400 text-white p-2 max-w-sm" onClick={handleFetchRecipe}>Get Random Recipe</button>
    </div>
}

export default FetchRecipe;