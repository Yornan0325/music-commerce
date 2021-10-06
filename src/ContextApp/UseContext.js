import { useState, useEffect } from "react";
import constate from "constate";
import getFirebase from "../FirebaseApp/FirebaseSettings";

const useContextApp = () => {
  const [registeredUser, setRegisteredUser] = useState(null);
  // const [loadin, setIsloadin] = useState({loadins:false})
  const firebase = getFirebase();

  //   const [itemsFS, setItemsFS] = useState(null);

  //   useEffect(() => {
  //     const firebase = getFirebase();
  //     firebase
  //       .firestore()
  //       .collection("itemList")
  //       .get()
  //       .then(({ docs }) => {
  //         const data = docs.map((doc) => ({
  //           id: doc.id,
  //           ...doc.data()
  //         }));
  //         setItemsFS(data);
  //       });
  //   }, []);


  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        setRegisteredUser(user.email);
      }else{
        setRegisteredUser(null);
      }
      
    });
  }, [firebase])
  
  return {
    registeredUser
    // itemsFS
  };
};

export const [ProvidersApp, useContext] = constate(useContextApp);
