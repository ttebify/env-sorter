import React from 'react';

function AboutAndFooter() {
  return (
    <div className="bg-gray-100 py-8 px-4 w-full">
      <div className="mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Environment Variable Sorter</h2>
          <p className="text-lg text-gray-700 mb-8">
            Your environment variables should be as clean as your code.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Group related environment variables, add comments, and apply filters to enhance readability and organization.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Check out the project on <a href="https://github.com/ttebify/env-sorter" className="text-blue-500 underline">GitHub</a>.
          </p>
          <div className="flex justify-center">
            <a href="https://github.com/ttebify" className="text-blue-500 mx-2" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://twitter.com/ttebify" className="text-blue-500 mx-2" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutAndFooter;
