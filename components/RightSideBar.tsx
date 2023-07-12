import React from "react";

function RightSideBar() {
  // Mock data for the scrollable list of custom schema items
  const customSchemaItems = [
    { id: 1, regex: "TWILO_*", comment: "Comment here" },
    { id: 2, regex: "ANOTHER_*", comment: "Another comment" },
    { id: 3, regex: "SOME_*", comment: "Some comment" },
    // ...
  ];

  return (
    <div className="w-full flex-[1] md:ml-16 flex-col items-end">
      <div className="p-4 flex flex-col items-end">
        <h2 className="text-xl mb-4">Export variables</h2>
        <div className="flex gap-4">
          <button className="flex-1 w-20 h-20 bg-white hover:bg-gray-100 shadow-md rounded-lg py-2 px-4 transition duration-300">
            .env
          </button>
          <button className="flex-1 w-20 h-20 bg-white hover:bg-gray-100 shadow-md rounded-lg py-2 px-4 transition duration-300">
            JSON
          </button>
        </div>
      </div>

      <div className="flex items-center justify-end my-2">
        <label htmlFor="addCommentsCheckbox" className="select-none mr-2">
          Add comments
        </label>
        <input
          type="checkbox"
          id="addCommentsCheckbox"
          className="mr-2 h-6 w-6 appearance-none border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none transition duration-300"
        />
      </div>

      <div className="p-4 bg-white rounded-lg shadow-md mb-4 w-full">
        <h3 className="text-lg font-bold mb-2">Defined custom schema</h3>
        <p className="text-sm font-semibold mb-4">
          <span className="text-gray-500">3/23</span>
        </p>
        <div className="overflow-y-auto max-h-32 mb-2">
          {customSchemaItems.map((item) => (
            <div key={item.id} className="flex items-center mb-2">
              <span className="font-bold">{item.regex}</span>
              <span className="text-gray-400 mx-1">/</span>
              <span className="text-gray-500">{item.comment}</span>
            </div>
          ))}
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Define Schema
        </button>
      </div>
    </div>
  );
}

export default RightSideBar;
