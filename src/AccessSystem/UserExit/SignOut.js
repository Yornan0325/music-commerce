import React from "react";
import getFirebase from "../../FirebaseApp/FirebaseSettings";
// import { Link } from "react-router-dom";


const SignOut = ({setMessageSignOut}) => {
  const firebaseInstance = getFirebase();
  const hanleSignOut = async () => {
    try {
      if (firebaseInstance) {
        await firebaseInstance.auth().signOut();
        // alert("Successfully signed out!");
        setMessageSignOut(true)
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <a onClick={hanleSignOut}>Salir</a>
    </>
  );
};

export default SignOut;