import useRecipeStore from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        display: "block",
        marginBottom: "20px",
        padding: "8px",
        width: "100%",
      }}
    />
  );
};

export default SearchBar;
