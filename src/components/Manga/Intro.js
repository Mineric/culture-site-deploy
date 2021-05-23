
import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import './contents.css';


const slideImages = [
  '../images/img-manga-1.jpg',
  '../images/img-manga-2.jpg',
  '../images/img-manga-3.jpg',
  '../images/img-anime.jpg',
];

const Manga= () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span className="text-container-left" >
              <h1 id="text-left"> A brief History of Japanese Manga</h1>
                <p id="text-left">
                  The very first instance of manga is believed to have appeared around the 
                  12th and 13th centuries in the form of the Chōjū giga, also known in English 
                  as Scrolls of Frolicking Animals and Humans. These works featured animals such 
                  as frogs and rabbits satirically behaving in very human-like fashion. The Chōjū 
                  giga is also seen as the basis for the right-to-left reading style used for manga today.
                  For the modern manga you may be more familiar with, inspiration in Japan came in the 
                  form of comics, cartoons, television and films that were brought over in droves from 
                  the U.S. during the late 1940s to early 1950s. Early results of that influence include
                  the highly popular Astro Boy, which has reached prominence both within and outside of 
                  Japan. Now, the term ‘manga’ is officially part of the English language, a testament 
                  to its ever-growing impact beyond Japan’s borders.
                </p>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span className="text-container-right" >
              <h1 id="text-left"> How and Where Japanese People Read Manga </h1>
              <p id="text-left">
                  Western manga fans typically buy single volumes of a particular 
                  anime to keep up with their favorite stories. In Japan, however, 
                  readers can purchase large manga magazines, which typically contain 
                  single episodes of many different stories. These magazines are published 
                  either weekly or monthly. The most popular manga magazines in Japan include:

                  Weekly Shōnen Jump, CoroCoro Comic, Weekly Young Jump, Ciao, etc.
                </p>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]}`}}>

            <span className="text-container-left" >
              <h1 id="text-left">  OSAMU TEZUKA </h1>
              <p id="text-left">
                  The “god of manga”, Osamu Tezuka alone created comics with epic stories and 
                  established the foundation of anime culture in Japan. His legacy continues through 
                  his influence of many noted manga artists, including Fujiko F. Fujio and Mitsuteru 
                  Yokoyama (author of Tetsujin 28-go). Tezuka produced a series of popular manga hits 
                  for over 40 years until his death in 1989. The Osamu Tezuka Manga Museum, located where 
                  he grew up in Takarazuka, Hyogo Pref., and managed by Takarazuka City, exhibits a number 
                  of precious historical materials and works of manga and anime.
                  One of his masterpieces, Tetsuwan ATOM (Astro Boy), became the first domestically produced 
                  30-minute TV anime series in Japan.

                </p>
              </span>
            
            </div>
            
          </div>


          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]}`}}>

            <span className="blank-container" >
              {/* <h1 id="text-left">  OSAMU TEZUKA </h1>
              <p id="text-left">
                  The “god of manga”, Osamu Tezuka alone created comics with epic stories and 
                  established the foundation of anime culture in Japan. His legacy continues through 
                  his influence of many noted manga artists, including Fujiko F. Fujio and Mitsuteru 
                  Yokoyama (author of Tetsujin 28-go). Tezuka produced a series of popular manga hits 
                  for over 40 years until his death in 1989. The Osamu Tezuka Manga Museum, located where 
                  he grew up in Takarazuka, Hyogo Pref., and managed by Takarazuka City, exhibits a number 
                  of precious historical materials and works of manga and anime.
                  One of his masterpieces, Tetsuwan ATOM (Astro Boy), became the first domestically produced 
                  30-minute TV anime series in Japan.

                </p> */}
              </span>
            
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Manga;

// const Intro = () => {

//     return (
//       <div className='cards'>
//         <div className=''>
//          {/* <img src='./images/manga-1.jpg' alt="manga-1" /> */}
//           {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
//           <img  className='image-contianer' src='../images/img-2.jpg' alt="manga-1" />  
//           <div className='text-container'> 
          
//             <h1>ADVENTURE AWAITS</h1>
//             <p> 
//                 Manga is one of the most popular forms of Japanese entertainment media. 
//                 Phenomenally popular among both adults and children, some manga are read 
//                 weekly, while others circulate widely as serials in national daily newspapers. 
//                 The fact that the annual sales of manga books and magazines reach between 
//                 thirty-five and forty percent of all publications in Japan shows the extent 
//                 and range of audiences who relate to these materials. Manga is a powerful 
//                 vehicle of influence in the youth subculture, and serves as significant 
//                 cultural entertainment. In fact, Japanese manga has a long history; it 
//                 originated in the 1900s with an artist named Kitazawa Rakuten, who was first 
//                 inspired by comic strips in early American newspapers. But the present popular 
//                 form is a postwar phenomenon, dating from the second half of the twentieth century.
//                 Wide marketing of weeklies and explosive circulation date back to the 1960s. 
//             </p>
//           </div>  
//         </div>
//         </div>
//       );
// };

