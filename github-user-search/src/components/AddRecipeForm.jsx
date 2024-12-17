import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Add a New Recipe
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-4 py-6 md:p-8"
      >
        {/* Recipe Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm md:text-base font-bold mb-2"
          >
            Recipe Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:px-4 md:py-3"
            placeholder="Enter recipe title"
          />
        </div>

        {/* Recipe Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm md:text-base font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:px-4 md:py-3"
            placeholder="Enter recipe description"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
