import { useState, useEffect } from "react";
import constate from "constate";
import getFirebase from "../FirebaseApp/FirebaseSettings";

const useContextApp = () => {
  const [registeredUser, setRegisteredUser] = useState(null);
   
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
    const firebase = getFirebase();
    if (firebase) {
      firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
            setRegisteredUser(authUser.email);
        } else {
            setRegisteredUser("El usuario no se encuentra en la base de datos");
        }
      });
    }
  }, []);

  return {
    registeredUser,
    // itemsFS
  };
};

export const [ProvidersApp, useContext] = constate(useContextApp);
