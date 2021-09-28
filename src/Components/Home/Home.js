import React from "react";
import {Link} from "react-router-dom";
import modules from '../Modules';

const Home = () => {
    return (
        <>
            <header className="App-header">
                <ul className="App-nav">
                    {modules.map(module => (
                        <li key={module.name}>
                            <Link to={module.routeProps.path}>
                                {module.name}</Link>
                        </li>

                    ))}
                </ul>
            </header>
        </>
    );
};

export default Home;
