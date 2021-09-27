import React,{useState} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import modules from '../Modules';
 
const Pat = () => {
    return (
        <>
            
                <div className="App">
                    <div className="App-content">
                        {modules.map(module => (
                            // <Route {...module.routeProps} key={module.name} />
                            <Route {...module.routeProps} key={module.name} />
                        ))}
                    </div>
                </div>
             
        </>
    );
};

export default Pat;