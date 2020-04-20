import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled';

import { ReactComponent as honey } from './images/01-honey.svg';
import { ReactComponent as pumpkin } from './images/03-pumpkin.svg';
import { ReactComponent as acorn } from './images/04-acorn.svg';
import { ReactComponent as mushroom } from './images/05-mushroom.svg';
import { ReactComponent as apple } from './images/06-apple.svg';
import { ReactComponent as basket } from './images/07-basket.svg';
import { ReactComponent as trunk } from './images/08-trunk.svg';
import { ReactComponent as wheat } from './images/09-wheat.svg';
import { ReactComponent as umbrella } from './images/10-umbrella.svg';
import { ReactComponent as kite } from './images/11-kite.svg';
import { ReactComponent as grapes } from './images/12-grapes.svg';
import { ReactComponent as applePie } from './images/13-apple-pie.svg';
import { ReactComponent as tree } from './images/14-tree.svg';
import { ReactComponent as hotChocolate } from './images/15-hot chocolate.svg';
import { ReactComponent as cloud } from './images/16-cloud-1.svg';
import { ReactComponent as socks } from './images/17-socks.svg';
import { ReactComponent as hat } from './images/18-hat-1.svg';
import { ReactComponent as pear } from './images/19-pear.svg';
import { ReactComponent as jam } from './images/20-jam.svg';
import { ReactComponent as sunflower } from './images/21-sunflower.svg';
import { ReactComponent as carrot } from './images/22-carrot.svg';
import { ReactComponent as bee } from './images/23-bee.svg';
import { ReactComponent as scarf } from './images/24-scarf.svg';
import { ReactComponent as honeycomb } from './images/25-honeycomb.svg';
import { ReactComponent as leaf } from './images/26-leaf-2.svg';
import { ReactComponent as corn } from './images/27-corn.svg';
import { ReactComponent as berries } from './images/28-berries.svg';
import { ReactComponent as shovel } from './images/29-shovel.svg';
import { ReactComponent as hazelnut } from './images/30-hazelnut.svg';
import { ReactComponent as shoe } from './images/31-shoe.svg';
import { ReactComponent as gardeningGlove } from './images/32-gardening-glove.svg';
import { ReactComponent as waterShoe } from './images/33-water-shoe.svg';
import { ReactComponent as hat2 } from './images/34-hat-2.svg';
import { ReactComponent as artichoke } from './images/35-artichoke.svg';
import { ReactComponent as wateringCan } from './images/36-watering-can.svg';
import { ReactComponent as sweater } from './images/37-sweater.svg';
import { ReactComponent as vegetablesBox } from './images/38-vegetables-box.svg';
import { ReactComponent as broom } from './images/39-broom.svg';
import { ReactComponent as backpack } from './images/40-backpack.svg';
import { ReactComponent as soup } from './images/41-soup.svg';
import { ReactComponent as raincoat } from './images/42-raincoat.svg';
import { ReactComponent as cloud2 } from './images/43-cloud-2.svg';
import { ReactComponent as wind } from './images/44-wind.svg';
import { ReactComponent as tractor } from './images/45-tractor.svg';
import { ReactComponent as hay } from './images/46-hay.svg';
import { ReactComponent as bell } from './images/47-bell.svg';
import { ReactComponent as thermometer } from './images/48-thermometer.svg';
import { ReactComponent as pinecone } from './images/49-pinecone.svg';
import { ReactComponent as almond } from './images/50-almond.svg';
import { ReactComponent as Blank } from './images/blank.svg';
import { ReactComponent as White } from './images/white.svg';

const allIcons = [
  honey,
  pumpkin,
  acorn,
  mushroom,
  apple,
  basket,
  trunk,
  wheat,
  umbrella,
  kite,
  grapes,
  applePie,
  tree,
  hotChocolate,
  cloud,
  socks,
  hat,
  pear,
  jam,
  sunflower,
  carrot,
  bee,
  scarf,
  honeycomb,
  leaf,
  corn,
  berries,
  shovel,
  hazelnut,
  shoe,
  gardeningGlove,
  waterShoe,
  hat2,
  artichoke,
  wateringCan,
  sweater,
  vegetablesBox,
  broom,
  backpack,
  soup,
  raincoat,
  cloud2,
  wind,
  tractor,
  hay,
  bell,
  thermometer,
  pinecone,
  almond,
];

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
  const [cardCount, setCardCount] = useState('');

  const sortedCards = allIcons.sort(() => 0.5 - Math.random()).slice(0, 6);

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
    setVanillaCards(() =>
      sortedCards.concat(sortedCards).sort(() => 0.5 - Math.random())
    );
  }, [sortedCards]);

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
    if (cardsWon.length === vanillaCards.length) {
      setCongrats(() => 'Congratulations! You found them all!');
    }
  }, [cardsWon]);

  useEffect(() => {
    console.log(cardCount);
    const sortedCards = allIcons.sort(() => 0.5 - Math.random()).slice(0, 6);
  }, [cardCount]);

  return (
    <>
      {congrats.length ? <h1>{congrats}</h1> : ''}
      <h2>Cards Matched:</h2>
      <h2>{cardsWon.length}</h2>
      <h3>Card Totals</h3>
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
