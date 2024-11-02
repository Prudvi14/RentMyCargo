import React, { useState } from 'react';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [carId, setCarId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${name} on car ID ${carId}`);
    setName('');
    setCarId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Car</h2>
      <input 
        type="text" 
        placeholder="Your Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="number" 
        placeholder="Car ID" 
        value={carId} 
        onChange={(e) => setCarId(e.target.value)} 
        required 
      />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;