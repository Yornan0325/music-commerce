import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, } from "react-router-dom";
import modules from '../Modules';

const Home = () => {
    return (
        <>
            <Router>
                <header className="App-header">
                    <ul className="App-nav">
                        {modules.map(module => (
                            <li key={module.name}>
                                <Link to={module.routeProps.path}>{module.name}</Link>
                            </li>
                        ))}
                    </ul>
                </header>
                <hr />
                 <h1>hola</h1>
                    {modules.map(module => (
                        <Switch>
                            <Route {...module.routeProps} key={module.name} />
                        </Switch>
                    ))}
                

            </Router>
        </>
    );
};

export default Home;
