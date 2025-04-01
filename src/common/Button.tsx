import React from "react";

function Card() {
  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">I am Card from common lib</h2>
        <p className="text-gray-600">This is a simple card component using Tailwind CSS.</p>
      </div>
    </div>
  );
}

export default Card;
