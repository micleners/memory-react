import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled';

import { ReactComponent as Blank } from './images/blank.svg';
import { ReactComponent as White } from './images/white.svg';
import { ReactComponent as Honey } from './images/01-honey.svg';
import { ReactComponent as Pumpkin } from './images/03-pumpkin.svg';
import { ReactComponent as Acorn } from './images/04-acorn.svg';
import { ReactComponent as Mushroom } from './images/05-mushroom.svg';
import { ReactComponent as Apple } from './images/06-apple.svg';
import { ReactComponent as Basket } from './images/07-basket.svg';

const svgStyle = {
  height: '100px',
  padding: '10px',
};

const gridStyle = {
  height: '400px',
  width: '500px',
  display: 'flex',
  flexWrap: 'wrap',
};

const App = () => {
  const [vanillaCards, setVanillaCards] = useState([]);
  const [cardsChosen, setCardsChosen] = useState([]);
  const [cardsChosenId, setCardsChosenId] = useState([]);
  const [cardsWon, setCardsWon] = useState([]);
  const [counter, setCounter] = useState(0);
  const [congrats, setCongrats] = useState('');

  const flipCard = (cardId) => {
    setCardsChosen((cardsChosen) => cardsChosen.concat(vanillaCards[cardId]));
    setCardsChosenId((cardsChosenId) => [...cardsChosenId, cardId]);
    cards.splice(cardId, 1, vanillaCards[cardId]);
    setCards(() => [...cards]);
    setCounter((counter) => counter + 1);
  };

  const checkForMatch = () => {
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match!');
      cards.splice(optionOneId, 1, White);
      cards.splice(optionTwoId, 1, White);
      setCards(() => [...cards]);
      setCardsWon(() => [...cardsWon, ...cardsChosen]);
    } else {
      alert('Sorry, try again');
      cards.splice(optionOneId, 1, Blank);
      cards.splice(optionTwoId, 1, Blank);
      setCards(() => [...cards]);
    }

    setCardsChosen(() => []);
    setCardsChosenId(() => []);
  };

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const sortedCards = [Honey, Pumpkin, Acorn, Mushroom, Apple, Basket];

    setVanillaCards(() =>
      sortedCards.concat(sortedCards).sort(() => 0.5 - Math.random())
    );
  }, []);

  useEffect(() => {
    setCards(vanillaCards.map(() => Blank));
  }, [vanillaCards]);

  useEffect(() => {
    if (cardsChosen.length === 2) {
      setTimeout(() => {
        checkForMatch();
      }, 50);
    }
  }, [counter]);

  useEffect(() => {
    console.log('won: ', cardsWon.length);
    console.log('all: ', vanillaCards.length);
    if (cardsWon.length === vanillaCards.length) {
      setCongrats(() => 'Congratulations! You found them all!');
    }
  }, [cardsWon]);

  return (
    <>
      {congrats.length ? <h1>{congrats}</h1> : ''}
      <h2>Cards Matched:</h2>
      <h2>{cardsWon.length}</h2>
      <div style={gridStyle}>
        {/* {cards.map((card, index) => card(index))} */}
        {cards.map((Card, index) => (
          <Card
            style={svgStyle}
            key={index}
            onClick={Card === Blank ? () => flipCard(index) : () => {}}
          />
        ))}
      </div>
    </>
  );
};

export default App;
