import React from 'react';

export default function PriceOffer({ price, offerPrice }) {
  const formattedPrice = formatWithCommas(price);
  const formattedOfferPrice = formatWithCommas(offerPrice);
  const percentage = (offerPrice / price) * 100;
  
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-end">
        <span className="text-customBlue text-2xl font-semibold">Rs {formattedOfferPrice}</span>
        <span className="text-gray-300">Rs {formattedPrice}</span>
      </div>
      <div className="h-1.5 overflow-hidden bg-gray-300">
        <div
          className='h-full bg-customBlue'
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

function formatWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}