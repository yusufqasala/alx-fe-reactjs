import { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate and submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate fields
    if (!formData.title.trim()) newErrors.title = "Title is required.";
    if (!formData.ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    if (!formData.steps.trim()) newErrors.steps = "Preparation steps are required.";

    // Ingredients validation (at least 2 items)
    if (formData.ingredients.trim() && formData.ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please include at least 2 ingredients (comma-separated).";
    }

    setErrors(newErrors);

    // If no errors, log the data or process the submission
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Recipe submitted successfully!");
      setFormData({ title: "", ingredients: "", steps: "" }); // Clear form
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Submit a New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Recipe Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ingredients <span className="text-gray-500">(comma-separated)</span>
          </label>
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="3"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {errors.ingredients && (
            <p className="text-sm text-red-500 mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Preparation Steps</label>
          <textarea
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            rows="5"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {errors.steps && <p className="text-sm text-red-500 mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
