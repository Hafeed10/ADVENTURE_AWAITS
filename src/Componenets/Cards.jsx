import React from 'react';
import './Cards.css';
import CardItem from '../../src/Componenets/Carditem';

import card from  './image/img-1.jpg';
import card1 from './image/img-2.jpg';
import card5 from './image/img-6.jpg';
import card6 from './image/img-7.jpg';
import card7 from './image/img-8.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={card}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={card1}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
               src={card5}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
               src={card6}
              text='Experience Football on Top of the Himalayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
               src={card7}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
