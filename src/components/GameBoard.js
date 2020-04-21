import React from 'react';
import { gridStyle, svgStyle } from '../styles';
import { Blank } from './arrayOfCards';

const GameBoard = ({ cards, flipCard }) => {
  return (
    <div style={gridStyle}>
      {cards.map((Card, index) => (
        <Card
          style={svgStyle}
          key={index}
          onClick={Card === Blank ? () => flipCard(index) : () => {}}
        />
      ))}
    </div>
  );
};

export default GameBoard;
