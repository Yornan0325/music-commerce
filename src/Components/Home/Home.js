import React, { useState } from "react";
import { Link } from "react-router-dom";
import modules from '../Modules';
import SignOut from "../../AccessSystem/UserExit/SignOut";
const Home = () => {
    const [isActive, setisActive] = React.useState(false);
    const [messageSignOut, setMessageSignOut] = React.useState(false)
    const toggle = () => setisActive(!isActive);
    console.log("hola", messageSignOut)
    return (
        <>
            <section class="hero is-dark">
                <div class="hero-head">
                    <nav class="navbar">
                        <div class="container">
                            <div class="navbar-brand">
                                <a class="navbar-item">
                                    <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                                </a>
                                <a
                                    href={() => false}
                                    onClick={toggle}
                                    role="button"
                                    className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                                    data-target="navbarMenuHeroA"
                                    aria-label="menu"
                                    aria-expanded="false"
                                >
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                </a>

                            </div>
                            <div id="navbarMenuHeroA" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                                <div class="navbar-end">
                                    <a class="navbar-item">
                                        <span class="icon">
                                            <i class="fa fa-sign-out-alt"></i>
                                        </span>
                                        <span> <SignOut setMessageSignOut={setMessageSignOut} /></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>


                {/* <div class="hero-body">
                    <div class="container has-text-centered">
                        <p class="title">
                            Title
                        </p>
                        <p class="subtitle">
                            Subtitle
                        </p>
                    </div>
                </div> */}


                <div class="hero-foot">
                    <nav class="tabs">
                        <div class="container">
                            <ul>
                                <li class="is-active"><a>Overview</a></li>
                                <li><a>Modulos de muestra</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
            <div style={{ margin: "12px" }}>
                <div class="columns">

                    {modules.map(module => (

                        <Link to={module.routeProps.path} key={module.name}>
                            <div class="column is-narrow ">
                                <div class="box" style={{ width: "200px" }}>
                                    <span class="icon-text">
                                        <span class="icon">
                                            <i className={module.icons}></i>
                                        </span>
                                        <span>{module.name}</span>
                                    </span>

                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>


        </>
    );
};

export default Home;
