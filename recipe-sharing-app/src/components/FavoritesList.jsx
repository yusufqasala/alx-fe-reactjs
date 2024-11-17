import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favoriteIds = useRecipeStore((state) => state.favorites);
  const favorites = recipes.filter((recipe) => favoriteIds.includes(recipe.id));

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet. Start adding some!</p>
      ) : (
        favorites.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px 0",
              padding: "10px",
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
