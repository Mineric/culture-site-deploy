import React from 'react';
import '../App.css';
import { Button } from './Button';
import './LandingSection.css';

function LandingSection() {
  
  const [play, setPlay] = React.useState(false);
  const url = play
    ? `https://www.youtube.com/embed/lHme9vPW068?autoplay=1`
    : `https://www.youtube.com/embed/lHme9vPW068`;

    <div className="App">
     
      <button onClick={() => setPlay(true)}></button>
    </div>
  return (
    <div className='landing-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <img src="/images/img-anime.jpg" alt="img-anime" />
      {/* <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>  */}
      
      <h1 className="bright">JAPANESE POP CULTURES</h1>
      <p  className="bright">Here's Interesting trends for you</p>
     
      <div className='landing-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path='/Anime/index'
        >
          EXPLORE MORE
        </Button> */}
        {/* <iframe
          src={url}
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen   
      ></iframe> */}
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          // path='/Anime/index'
          // onClick={() => setPlay(true)}
        >
          LET'S EXLPORE
          {/* <i className='far fa-play-circle' /> */}
        </Button>
      </div>
    </div>
  );
}

export default LandingSection;
