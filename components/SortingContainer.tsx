import React from "react";

function SortingContainer() {
  const handleSortAZ = () => {
    // Sorting logic for A-Z sorting
    // Update the environment variables in the context
    // Replace the following line with your actual update logic
    console.log("Sorted A-Z:");
  };

  const handleSortZA = () => {
    // Sorting logic for Z-A sorting
    // Update the environment variables in the context

    // Replace the following line with your actual update logic
    console.log("Sorted Z-A:");
  };

  return (
    <div className="flex shadow rounded-md border px-2">
      <button
        className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-l-md"
        onClick={handleSortAZ}
      >
        Sort A-Z
      </button>
      <button
        className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4"
        onClick={handleSortZA}
      >
        Sort Z-A
      </button>
    </div>
  );
}

export default SortingContainer;
