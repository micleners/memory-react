import React, { useState, useEffect } from 'react';

const Select = () => {
  const [cardCount, setCardCount] = useState('');

  useEffect(() => {
    console.log(cardCount);
    // const sortedCards = allIcons.sort(() => 0.5 - Math.random()).slice(0, 6);
  }, [cardCount]);

  return (
    <select
      onChange={(e) => setCardCount(e.target.value)}
      value={cardCount}
      id="card-total"
    >
      <option value="6">12</option>
      <option value="12">24</option>
      <option value="24">48</option>
      <option value="36">72</option>
      <option value="48">96</option>
    </select>
  );
};

export default Select;
