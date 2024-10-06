import React from 'react';

function CatCard({ name, image, age, description }) {
  return (
    <div className="max-w-lg flex items-center rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-purple-100 to-pink-100 my-4 p-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Image section */}
      <div className="w-1/3">
        <img 
          className="w-full h-full object-cover rounded-l-xl" 
          src={image} 
          alt={name} 
        />
      </div>

      {/* Text section */}
      <div className="w-2/3 p-4">
        <h3 className="text-2xl font-bold mb-1 text-gray-800">{name}</h3>
        <p className="text-lg text-gray-600 mb-2">
          Age: <span className="font-semibold text-purple-600">{age}</span>
        </p>
        <p className="text-base text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default CatCard;
