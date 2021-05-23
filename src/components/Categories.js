import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Tabbar from './Tabbar';


function Categories() {

    return (
        <div className='cards__container'>
        <div className='cards__wrapper'>
        <div className='.label'><h2> Featured Contents </h2> </div>
          <ul className='cards__items'>
            <CardItem
              src='images/img-anime.jpg'
              text='A Brief History of Manga'
              label='Manga/Anime'
              path='/Anime/index'
            />
            <CardItem
              src='images/img-jrock.jpg'
              text='Japanese Rock'
              label='J-Rock'
              path='/JRock/index'
            />
             <CardItem
              src='images/img-jpop.jpg'
              text='Popular J-Pop'
              label='J-Pop'
              path='/JPop/index'
            />

          </ul>

          <div className='.label'><h2> All Contents </h2> </div>
          <ul className='cards__items'>
            <CardItem
              src='images/img-anime.jpg'
              text='A Brief History of Manga'
              label='Manga/Anime'
              path='/Anime/index'
            />
            <CardItem
              src='images/img-jrock.jpg'
              text='Japanese Rock'
              label='J-Rock'
              path='/JRock/index'
            />
             <CardItem
              src='images/img-jpop.jpg'
              text='Popular J-Pop'
              label='J-Pop'
              path='/JPop/index'
            />

            <CardItem
              src='images/img-jdrama.jpg'
              text='Best Japanese Drama of all time'
              label='Lifestyle'
              path='/sign-up'
            />

          </ul>


          <ul className='cards__items'>
            <CardItem
              src='images/img-chara.jpg'
              text='Famous Characters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-ani.jpg'
              text='Popular Anime'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-cosplay.jpg'
              text='Cosplay in Japan'
              label='Adrenaline'
              path='/sign-up'
            />

            <CardItem
              src='images/img-ghibili.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Lifestyle'
              path='/sign-up'
            />
          </ul>

        </div>
      </div>
    )
}


export default Categories;