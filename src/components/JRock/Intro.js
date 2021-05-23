
import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import './contents.css';


const slideImages = [
  '../images/img-jrock-1.jpg',
  '../images/img-jrock-2.jpg',
  '../images/img-jrock-3.jpg',
  '../images/img-jrock-4.jpg',
  '../images/img-jrock-5.jpg',
];

const Intro= () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span className="text-container-left" >
              <h1 id="text-left"> A brief History of J-Rock</h1>
                <p id="text-left">
                  Japanese rock , J-rock (ジェイ・ロック, Jei Rokku), is rock music from Japan. 
                  Influenced by American and British rock of the 1960s, the first rock bands in 
                  Japan performed what is called Group Sounds, with lyrics almost exclusively in English. 
                  Folk rock band Happy End in the early 1970s are credited as the first to sing rock music 
                  in the Japanese language. Punk rock bands Boøwy and The Blue Hearts and hard rock/heavy 
                  metal groups X Japan and B'z led Japanese rock in the late 1980s and early 1990s by achieving 
                  major mainstream success.
                </p>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span className="text-container-right" >
              <h1 id="text-left"> World Recognition </h1>
              <p id="text-left"> 
                Japanese rock music has received recognition worldwide, being widely 
                known in Asia, and has survived through decades competing with its 
                contemporary local style J-pop. Rock bands such as B'z and Mr. Children are 
                among the best selling music acts in Japan. The demand for rock in Japan is 
                so huge that festivals mainly focused on it like the Fuji Rock Festival have 
                been introduced since the late 90s with attendances reaching a peak of 200,000 
                people per festival making it the largest outdoor music event in the country.
              </p>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]}`}}>

            <span className="text-container-right" >
              <h1 id="text-left">  Visual kei </h1>
              <p id="text-left">
                During the 1980s, Japanese metal and rock bands gave birth to the movement 
                known as visual kei. Taking visual influence from Western glam rock and glam metal, 
                it was pioneered by bands like X Japan, Dead End, Buck-Tick, D'erlanger, and Color. 
                Although starting in the early 1980s, it was not until the tail-end of the decade 
                that visual kei acts saw major success. Buck-Tick's 1988 album Seventh Heaven reached 
                number 3 on the Oricon chart, and its follow-ups Taboo (1989) and Aku no Hana (1990) 
                both topped it.

              </p>
            </span>
            
            </div>
            
          </div>


          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]}`}}>

            <span className="text-container-left" >
                <h1 id="text-left">  Popular Jpanese Rock Banks (X-Japan) </h1>
                <p id="text-left">
                X Japan (Japanese: エックス・ジャパン, Hepburn: Ekkusu Japan) is a Japanese rock band from Chiba, 
                formed in 1982 by drummer Yoshiki and lead vocalist Toshi. In April 1989, X Japan's  album Blue 
                Blood reached number 6 and sold 712,000 copies.
                  Their third and best-selling album Jealousy was released in July 1991, topped the charts and 
                  sold over 1 million copies. They released two more number one studio albums, 
                  Art of Life (1993) and Dahlia (1996), before disbanding in 1997. X Japan signed an American 
                  record deal with Atlantic Records in 1992, but an international release never happened.
                  In the 1990s, Luna Sea and Glay sold millions of records, while Malice Mizer, La'cryma Christi, 
                  and Siam Shade also found success. 
                </p> 
              </span>
            </div>  
          </div>
 
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]}`}}>

            <span className="text-container-right" >
                <h1 id="text-left">  In Modern Time </h1>
                <p id="text-left">
                During the late 2000s there was an increasing number of bands that had built up a strong fan base 
                prior to their main break-through in the music industry. Veteran rock bands like L'Arc~en~Ciel and 
                X Japan sold out concerts at Madison Square Garden in 2012 and 2014, respectively, among other large 
                arenas through the United States. One OK Rock performed at the Taipei Arena, being the first time a 
                Japanese band did so, and additionally sold out shows at the AsiaWorld-Arena and Mall of Asia Arena, 
                the largest overseas shows they had to date with an average attendance of 12,000 people at each concert.
                </p> 
              </span>
            </div>  
          </div>


        </Slide>
      </div>
    )
};

export default Intro;

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

