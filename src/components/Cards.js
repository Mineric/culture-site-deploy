import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Tabbar from './Tabbar';
import Categories from './Categories';

function Cards() {
  return (
    <div className='cards'>
      <h1><p className='.Header'> Categories</p> </h1>
      {/* <Tabbar /> */}
      <Categories/>
    </div>
  );
}

export default Cards;
