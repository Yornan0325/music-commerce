import React from "react";
import getFirebase from "../../FirebaseApp/FirebaseSettings";
import useInput from "../../ElementsTools/useInput";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import {firebaseAuth} from "../../../firebaseApp/FirebaseSetting";

const SignUpForm = () => {
  const firebaseInstance = getFirebase();

  const email = useInput("");
  const password = useInput("");

  const hanleSignUp = async (event) => {
    event.preventDefault();
    try {
      if (firebaseInstance) {
        const user = await firebaseInstance
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        console.log("user", user);
        alert(`Welcome ${email.value}!`);
      }
    } catch (error) {
      console.log("error", error);
      alert(error.message);
    }
  };
  return (
    <>
      <div className="hero is-fullheight is-dark">
        <nav
          data-cy="navBar"
          className="navbar is-fixed-top"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="navbar-item">
                <span className="subtitle">
                  {/* <Link className="button is-primary is-outlined" to="/login">Iniciar sesión</Link> */}
                </span>
              </div>
            </div>
          </div>
        </nav>
        {/* code */}
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column is-5 is-offset-3">
                <p className="title has-text-white is-size-3">Registrate</p>
                {/* <hr className="login-hr" /> */}
                <div >
                  {/* <form>
                  {erroInput !== null && (
                    <div className="notification is-danger">
                      <button className="delete" />
                      {erroInput}
                    </div>
                  )}
                </form> */}
                  {/* onSubmit={handleSignUp} */}
                  <form onSubmit={hanleSignUp}>
                    {/* <div className="field">
                    <div className="control">
                      <p className="label has-text-white">Nombres</p>
                      <div className="control has-icons-left">
                        <input
                          className="input is-medium is-primary"
                          name="firstName"
                          type="text"
                          placeholder="Pepito"
                        />
                        <span className="icon is-small is-left">
                          <i className="fa fa-user" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                  </div> */}
                    {/* <div className="field">
                    <div className="control">
                      <p className="label has-text-white">Apellidos</p>
                      <div className="control has-icons-left">
                        <input
                          className="input is-medium is-primary"
                          name="surName"
                          type="text"
                          placeholder="Perez"
                        />
                        <span className="icon is-small is-left">
                          <i className="fa fa-user" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                  </div> */}
                    <div className="field">
                      <div className="control">
                        <label className="label has-text-white">Correo</label>
                        <div className="control has-icons-left">
                          <input
                            className="input is-medium is-primary"
                            value={email.value} 
                            onChange={email.onChange}
                            placeholder="registro@gmail.com"
                          />
                          <span className="icon is-small is-left">
                            <i className="fa fa-envelope"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <label className="label has-text-white">
                          Contraseña
                        </label>
                        <div className="control has-icons-left">
                          <input
                            className="input is-medium is-primary"
                            value={password.value}
                             onChange={password.onChange}
                            type="password"
                            placeholder="********"
                          />
                          <span className="icon is-small is-left">
                            <i className="fa fa-unlock"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="control">
                      <button
                        className="button is-info is-light is-medium is-fullwidth"
                        type="submit"
                      >
                        Enviar
                      </button>
                    </div>
                  </form>
                  
                </div>
                <hr className="login-hr" />
                <div className="buttons">
                <Link className="button is-dark is-light  " to="/login">
                  Inicia sesion
                </Link>
                  </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
