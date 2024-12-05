import { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required.";
    if (!formData.ingredients.trim())
      newErrors.ingredients = "Ingredients are required.";
    if (!formData.steps.trim())
      newErrors.steps = "Preparation steps are required.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target; // Correctly using target.value
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Recipe submitted successfully!");
      setFormData({ title: "", ingredients: "", steps: "" });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-2xl font-bold mb-6 text-center md:text-3xl">
        Submit a New Recipe
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div className="md:flex md:space-x-4">
          <label className="block text-sm font-medium text-gray-700 md:text-base">
            Recipe Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange} // Properly tracks input changes
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:text-lg"
          />
          {errors.title && (
            <p className="text-sm text-red-500 mt-1">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 md:text-base">
            Ingredients <span className="text-gray-500">(comma-separated)</span>
          </label>
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange} // Properly tracks input changes
            rows="3"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:text-lg"
          ></textarea>
          {errors.ingredients && (
            <p className="text-sm text-red-500 mt-1">{errors.ingredients}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 md:text-base">
            Preparation Steps
          </label>
          <textarea
            name="steps"
            value={formData.steps}
            onChange={handleChange} // Properly tracks input changes
            rows="5"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:text-lg"
          ></textarea>
          {errors.steps && (
            <p className="text-sm text-red-500 mt-1">{errors.steps}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors md:w-auto md:px-6"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
