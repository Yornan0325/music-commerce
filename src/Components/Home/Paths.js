import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import modules from '../Modules';

const Paths = () => {
    return (
        <>
            {modules.map(module => (
                <Route {...module.routeProps} key={module.name} />
            ))}
        </>
    );
};

export default Paths;