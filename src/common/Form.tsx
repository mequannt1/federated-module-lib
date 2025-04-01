import React from 'react';

function Form() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md w-96">
        <h2 className="text-lg font-semibold text-gray-700 mb-4"> I am Form from common lib</h2>
        
        <div className="w-full">
          {/* Name Input */}
          <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
          <input 
            type="text" 
            placeholder="Enter your name" 
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
          />

          {/* Email Input */}
          <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
          />

          {/* Dropdown */}
          <label className="block text-sm font-medium text-gray-600 mb-1">Select Option</label>
          <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>

          {/* Submit Button */}
          <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
