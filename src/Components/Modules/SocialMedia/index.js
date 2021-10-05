import React from 'react';

const SocialMedia = () => (
  <section class="section">
  <div class="container">
    <h1 class="title">
     Trabajando....
    </h1>
    <p class="subtitle">
      En construccion
      
    </p>
    <p class="subtitle">
      Red social
    </p>
  </div>
</section>
);

export default {
    routeProps: {
        path: '/red-social',
        component: SocialMedia,
    },
    name: 'Red social',
    icons:'fa fa-share-alt'
}; 