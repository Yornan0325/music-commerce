import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import modules from '../Modules';

const Paths = () => {
    return (
        <>
            <div className="App-content">
                {modules.map(module => (
                    <Route {...module.routeProps} key={module.name} />
                ))}
            </div>
        </>
    );
};

export default Paths;