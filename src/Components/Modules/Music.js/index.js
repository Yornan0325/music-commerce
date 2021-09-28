import React from 'react';

const Music = () => (
    <section class="section">
    <div class="container">
      <h1 class="title">
       Trabajando....
      </h1>
      <p class="subtitle">
        En construccion
        
      </p>
      <p class="subtitle">
        Musica
      </p>
    </div>
  </section>
);

export default {
    routeProps: {
        path: '/musica',
        component: Music,
    },
    name: 'Musica',
    icons:'fa fa-music'
};