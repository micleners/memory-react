import React from 'react';
import { flex } from '../styles';

const GameStats = ({ congrats, cardsWon, counter }) => {
  return (
    <>
      {congrats.length ? <h1>{congrats}</h1> : ''}
      <div style={flex}>
        <h2>Cards Matched:</h2>
        <h2>{cardsWon.length}</h2>
      </div>
      <div style={flex}>
        <h2>Moves:</h2>
        <h2>{counter}</h2>
      </div>
      {/* <h3>Card Totals</h3> */}
    </>
  );
};

export default GameStats;
