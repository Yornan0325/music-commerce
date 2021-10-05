import React from 'react';

const Ecommerce = () => (
    <section class="section">
    <div class="container">
      <h1 class="title">
       Trabajando....
      </h1>
      <p class="subtitle">
        En construccion
        
      </p>
      <p class="subtitle">
        Comercio
      </p>
    </div>
  </section>
);

export default {
    routeProps: {
        path: '/comercio',
        component: Ecommerce,
    },
    name: 'Comercio',
    icons:'fa fa-dumpster'
}; 