import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";

// eslint-disable-next-line react/prop-types
const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // Redirects to the home page after deletion
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        marginTop: "10px",
        padding: "8px",
        backgroundColor: "red",
        color: "white",
        border: "none",
        cursor: "pointer",
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
