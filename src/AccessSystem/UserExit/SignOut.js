import React from "react";
import getFirebase from "../../FirebaseApp/FirebaseSettings";
// import { Link } from "react-router-dom";

 
const SignOut = () => {
  const firebaseInstance = getFirebase();

  const hanleSignOut = async () => {
    try {
      if (firebaseInstance) {
        await firebaseInstance.auth().signOut();
        alert("Successfully signed out!");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
       <button className="button is-dark" onClick={hanleSignOut}>Sign Out</button>
    </>
  );
};

export default SignOut;