
import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import './contents.css';


const slideImages = [
  '../images/img-jpop-1.jpg',
  '../images/img-jpop-2.jpg',
  '../images/img-jpop-3.jpg',
  '../images/img-jpop-4.jpg',
  '../images/img-jpop-5.jpg',
];

const Intro= () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span className="text-container-left" >
              <h1 id="text-left"> A Brief Guide to JPop</h1>
                <p id="text-left">
                J-pop , natively also known simply as pops (ポップス, poppusu), is a musical genre that 
                entered the musical mainstream of Japan in the 1990s. Modern J-pop has its roots in 
                traditional Japanese music, but significantly in 1960s pop and rock music, such as 
                The Beatles and The Beach Boys, which led to Japanese rock bands such as Happy End 
                fusing rock with Japanese music in the early 1970s. J-pop was further defined by 
                new wave and crossover fusion acts of the late 1970s such as Yellow Magic Orchestra 
                and Southern All Stars, then Eurobeat in the early 1990s, namely Namie Amuro.
                </p>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span className="text-container-right" >
              <h1 id="text-left"> Famous J-Pop Idol group (AKB48) </h1>
              <p id="text-left"> 
              AKB48 are a Japanese idol group named after the Akihabara (Akiba for short) area in Tokyo, 
              where the group's theater is located. AKB48's producer, Yasushi Akimoto, wanted to form a 
              girl group with its own theater and performing daily so fans could always see them live. 
              This "idols you can meet" concept includes teams which can rotate performances and perform 
              simultaneously at several events and "handshake" events, where fans can meet group members.
              </p>
              </span>
            </div>
          </div>
         
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]}`}}>

            <span className="text-container-left" >
                <h1 id="text-left">  Popular Boy Band (Arashi) </h1>
                <p id="text-left">
                  Arashi was a Japanese boy band consisting of five members. The members are Satoshi Ohno, 
                  Sho Sakurai, Masaki Aiba, Kazunari Ninomiya, and Jun Matsumoto. Arashi officially formed 
                  on September 15, 1999, in Honolulu, Hawaii, and made their debut CD on November 3, 1999. 
                  The group was 
                  initially signed to Pony Canyon and released one studio album and six singles—beginning 
                  with their 1999 eponymous debut single before moving to the Johnny's subsidiary label J 
                  Storm in 2001, which was initially set up for their succeeding releases.While their 
                  debut single sold close to a million copies, the group took a mixture of pop and 
                  alternate/contemporary approach to its music which attracted core followers, 
                  but subsequently faced commercially slow sales. 
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

