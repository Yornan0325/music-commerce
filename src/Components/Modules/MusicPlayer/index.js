import React from "react";
import AppRouter from "./RouterApp/AppRouter";
import { Provider } from 'react-redux';
import store from './ComponentsPlayers/Store/store';
 
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';
const Music = () => {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
};

export default {
  routeProps: {
    path: "/home",
    component: Music,
  },
  name: "Musica",
  icons: "fa fa-music",
};
