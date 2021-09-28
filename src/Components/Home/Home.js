import React from "react";
import { Link } from "react-router-dom";
import modules from '../Modules';

const Home = () => {
    return (
        <>
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
