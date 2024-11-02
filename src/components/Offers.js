import React from 'react';

const Offers = () => {
  const offerImages = [
    '/bikeoffer.jpg',  
    '/bikeoffer2.webp',  
    '/bikeoffer3.jpeg',
    '/bikeoffer4.avif',  
    '/caroffer.jpeg',  
    '/caroffer2.jpg',
    '/caroffer3.jpg', 
    '/caroffer4.webp',
    '/cargooffer.webp',  
    '/cargooffer2.jpg',
    '/cargooffer3.webp', 
    '/cargooffer4.jpg',
  ];

  return (
    <div className="offers">
      {offerImages.map((image, index) => (
        <img key={index} src={image} alt={`Offer ${index + 1}`} className="offer-image" />
      ))}
    </div>
  );
};

export default Offers;