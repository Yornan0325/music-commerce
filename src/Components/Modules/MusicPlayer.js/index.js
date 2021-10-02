import React from 'react';
import Player from './Components/Player';

 
const Music = () => (
 <Player />
)

export default {
  routeProps: {
    path: '/musica',
    component: Music,
  },
  name: 'Musica',
  icons: 'fa fa-music'
};