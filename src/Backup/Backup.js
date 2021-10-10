// import React, { useEffect, useState } from 'react';
// import Player from './Components/Player';
// import NavBar from './Components/NavBar';
 
// const Music = () => {
//   const [songs] = useState([
//     {
//       title: "Titaliyaan",
//       artist: "Hardy sandhu",
//       img_src: "./images/05-11-19-musica.jpg",
//       src: "./songs/Morat - No Se Va.mp3"
//     }, {
//       title: "Care Ni Karda",
//       artist: "Yo Yo Honey",
//       img_src: "./images/art-artist-canvas-374054.jpg",
//       src: "./songs/Ángel Huellas - Me Estas Perdiendo (Official Video).mp3"
//     },
//     {
//       title: "Care Ni Karda",
//       artist: "Yo Yo Honey",
//       img_src: "./images/httpstved-prod.adobecqms.netcontentdameditorialTelevisamexicomuyinteresantemxciencia1411escuchar-musica.imgo_-1280x720.jpg",
//       src: "./songs/Ángel Huellas - Me Estas Perdiendo (Official Video).mp3"
//     },
//     {
//       title: "Care Ni Karda",
//       artist: "Yo Yo Honey",
//       img_src: "./images/Música.jpg",
//       src: "./songs/Ángel Huellas - Me Estas Perdiendo (Official Video).mp3"
//     }
//   ])
//   const [currentSongIndex, setCurrentSongIndex] = useState(0)
//   const [nextSongIndex, setNextSongIndex] = useState(0)
  
//   useEffect(() => {
//     setNextSongIndex(() => {
//       if (currentSongIndex + 1 > songs.length - 1) {
//         return 0
//       } else {
//         return currentSongIndex + 1
//       }

//     })

//   }, [currentSongIndex, songs.length])
//   return (
//     <>
//     <NavBar/>
  
//     <Player
//       currentSongIndex={currentSongIndex}
//       setCurrentSongIndex={setCurrentSongIndex}
//       nextSongIndex={nextSongIndex}
//       songs={songs}
//     />
//     </>
//   )
// }




// export default {
//   routeProps: {
//     path: '/musica',
//     component: Music,
//   },
//   name: 'Musica',
//   icons: 'fa fa-music'
// };