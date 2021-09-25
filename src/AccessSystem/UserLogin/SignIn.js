import React from "react";
import { Redirect } from "react-router";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import getFirebase from "../../FirebaseApp/FirebaseSettings";
import useInput from "../../ElementsTools/useInput";
import { useContext } from "../../ContextApp/UseContext";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  let history = useHistory();
  const { registeredUser } = useContext();
  const firebaseInstance = getFirebase();
  const email = useInput("");
  const password = useInput("");

  const hanleSignIn = async (event) => {
    event.preventDefault();
    try {
      if (firebaseInstance) {
        await firebaseInstance
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  if (registeredUser) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <section className="hero is-fullheight is-dark  ">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column  is-6 is-offset-3">
                <p className="title  has-text-white is-size-3">Inicia sesion</p>
                <h1 className="title">{registeredUser}</h1>
                <div className="box">
                  <form onSubmit={hanleSignIn}>
                    <div className="field">
                      {/* <label className="label ">Email</label> */}
                      <p className="control has-icon has-icon-right">
                        <input
                          value={email.value}
                          onChange={email.onChange}
                          className="input is-medium is-primary"
                          type="text"
                          placeholder="sesion@gmail.com"
                        />
                        <span className="icon is-small">
                          <i className="fa fa-warning"></i>
                        </span>
                        {/* <span className="help is-danger">{{Error Message}}</span> */}
                      </p>
                    </div>
                    <div className="field">
                      {/* <label className="label">Password</label> */}
                      <p className="control has-icon has-icon-right">
                        <input
                           value={password.value}
                          onChange={password.onChange}
                          className="input is-medium is-primary"
                          type="password"
                          placeholder="●●●●●●●"
                        />
                        <span className="icon is-small">
                          <i className="fa fa-warning"></i>
                        </span>
                        {/* <span className="help is-danger">{{Error Message}}</span> */}
                      </p>
                    </div>
                    <p className="control">
                      <button className="button   is-dark is-light is-normal">
                        Ingresar
                      </button>
                    </p>
                  </form>
                </div>
                <hr className="login-hr" />
                <div className="buttons">
                  {/* <a href="register.html">Registrarse</a> */}

                  <Link className="button is-info is-light" to="/signup">
                    Registrarse
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;