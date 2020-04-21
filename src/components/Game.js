import React, { useState, useEffect } from 'react';

import GameStats from './GameStats';
import GameBoard from './GameBoard';
import { allIcons, White, Blank } from './arrayOfCards';

const Game = () => {
  const [vanillaCards, setVanillaCards] = useState([]);
  const [cards, setCards] = useState([]);
  const [cardsChosen, setCardsChosen] = useState([]);
  const [cardsWon, setCardsWon] = useState([]);
  const [counter, setCounter] = useState(0);
  const [congrats, setCongrats] = useState('');

  const flipCard = (cardId) => {
    setCardsChosen((cardsChosen) =>
      cardsChosen.concat({ card: vanillaCards[cardId], id: cardId })
    );
    cards.splice(cardId, 1, vanillaCards[cardId]);
    setCards(() => [...cards]);
    setCounter((counter) => counter + 1);
  };

  const checkForMatch = () => {
    const optionOneId = cardsChosen[0].id;
    const optionTwoId = cardsChosen[1].id;

    if (cardsChosen[0].card === cardsChosen[1].card) {
      alert('You found a match!');
      cards.splice(optionOneId, 1, White);
      cards.splice(optionTwoId, 1, White);
      setCards(() => [...cards]);
      setCardsWon(() => [...cardsWon, ...cardsChosen.map((x) => x.card)]);
    } else {
      alert('Sorry, try again');
      cards.splice(optionOneId, 1, Blank);
      cards.splice(optionTwoId, 1, Blank);
      setCards(() => [...cards]);
    }

    setCardsChosen(() => []);
  };

  useEffect(() => {
    const sortedCards = allIcons.sort(() => 0.5 - Math.random()).slice(0, 6);
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
    if (cardsWon.length && cardsWon.length === vanillaCards.length) {
      setCongrats(() => 'Congratulations! You found them all!');
    }
  }, [cardsWon]);
  return (
    <>
      <GameStats cardsWon={cardsWon} congrats={congrats} counter={counter} />
      <GameBoard cards={cards} flipCard={flipCard} />
    </>
  );
};

export default Game;
