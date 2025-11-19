import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

const Toys = ({ toy }) => { 
  const rating = toy.rating || 0
  const filledStars = Math.max(0, Math.floor(rating))
  const emptyStars = Math.max(0, 5 - filledStars)

  return (
    <div className="ml-18 md:ml-4 card w-64 bg-base-100 shadow-2xl shadow-blue-500 border border-blue-200 m-4 hover:scale-105 transition-transform duration-300">
      <figure className='p-2'>
        <img src={toy.pictureURL} alt={toy.toyName} className="h-48 w-full object-cover rounded-sm border border-blue-200 p-2" />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title justify-center text-lg">{toy.toyName}</h2>
        
        <div className="flex justify-center items-center mb-2">
          {Array.from({ length: filledStars }).map((_, i) => (
            <FaStar key={i} className="text-yellow-400" />
          ))}
          {Array.from({ length: emptyStars }).map((_, i) => (
            <FaRegStar key={i} className="text-yellow-400" />
          ))}
          <span className="ml-2 text-gray-600">({rating.toFixed(1)})</span>
        </div>

        <p className="text-red-500 mb-1">Available: {toy.availableQuantity}</p>
        <p className="font-semibold text-lg mb-3">${toy.price.toFixed(2)}</p>

        <button className="btn bg-linear-to-r from-blue-500 to-purple-600 text-white font-bold border-0 hover:text-yellow-300 btn-sm">View More</button>
      </div>
    </div>
  );
};

export default Toys;
